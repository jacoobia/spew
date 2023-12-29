import fs from 'fs';
import readline from 'readline';
import defaultReplacers from './replacers';

import { PrintOptions, RGB, Replacer } from './@types';

const templateFileName: string = 'template';
const shorthandHexColorRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
const standardHexColorRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
const hexReplacerRegex = /%hex\[([0-9A-Fa-f]{6})\]/g;

/**
 * Uses regex to find and convert hex shorthand and longhand to RGB values
 * Example:
 * #de1b83, de1b83, #d18 and d18 will be converted to { r: 222, g: 27, b: 131 }
 * @param hex the hex string to convert
 * @returns {RGB} the RGB value of the hex
 */
const hexToRgb = (hex: string): RGB => {
  hex = hex.replace('#', '');
  hex = hex.replace(shorthandHexColorRegex, (r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = standardHexColorRegex.exec(hex);
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : null;
};

/**
 * Converts a hex colour code to rgb and then down to an ansii value
 * to later be added into a colour escape code
 * @param {string} hex the hext string to convert
 * @returns {number} Ansi number for the colour
 */
const hexToAnsi = (hex: string): number => {
  const { r, g, b } = hexToRgb(hex);

  if (r === g && g === b) {
    if (r < 8) {
      return 16;
    }
    if (r > 248) {
      return 231;
    }
    return Math.round(((r - 8) / 247) * 24) + 232;
  }

  const val =
    16 + 36 * Math.round((r / 255) * 5) + 6 * Math.round((g / 255) * 5) + Math.round((b / 255) * 5);
  return val;
};

/**
 * Extracts hex to ansi replacers from a string
 * @param {number} line the line to extract replacers for
 * @returns {Replacer[]} replacers
 */
const extractHexReplacers = (line: string): Replacer[] => {
  let matches;
  const replacers = [];

  while ((matches = hexReplacerRegex.exec(line)) !== null) {
    const ansiCode = hexToAnsi(matches[1]);
    const replacer = {
      target: matches[0],
      replacer: `\x1b[38;5;${ansiCode}m`
    };
    replacers.push(replacer);
  }

  return replacers;
};

/**
 * Replaces the tokens in a line
 * @param {string} line the line to replace tokens
 * @returns {string} the processed line
 */
const replaceTokens = (line: string, options?: PrintOptions): string => {
  const hexReplacers: Replacer[] = extractHexReplacers(line);
  const dynamicReplacers: Replacer[] = [
    ...(options?.customReplacers || []),
    ...defaultReplacers,
    ...hexReplacers
  ];

  dynamicReplacers.forEach((replacer: Replacer) => {
    line = line.replaceAll(replacer.target, replacer.replacer);
  });

  return `${line}${options?.resetEachLine || ''}`;
};

/**
 * Print a string line character by character (a typewriter effect)
 * @param {string} line the line to print character by character
 * @param {number} charDelay the delay between each character
 */
const typeWrite = async (line: string, charDelay: number = 10): Promise<void> => {
  for (const char of line) {
    process.stdout.write(char);
    await new Promise((resolve) => setTimeout(resolve, charDelay));
  }
  process.stdout.write('\n');
};

/**
 * Prints the contents of the template file to the console
 * with any tokens replaced to colour the output
 * @param {PrintOptions} options The print option
 */
const printTemplate = async (options?: PrintOptions): Promise<void> => {
  const fileStream = fs.createReadStream(templateFileName, { encoding: 'utf8' });

  const lineReader = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of lineReader) {
    const processed = replaceTokens(line, options);
    if (options?.typeEffect) {
      await typeWrite(processed, options.charDelay || 50);
    } else {
      console.log(processed);
    }
    if (options?.lineDelay) await new Promise((resolve) => setTimeout(resolve, options.lineDelay));
  }

  lineReader.close();
  fileStream.destroy();
};

export default printTemplate;
export * from './@types/index';
