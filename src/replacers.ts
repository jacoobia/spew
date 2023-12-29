import { Replacer } from './@types';

const defaultReplacers: Replacer[] = [
  { target: '%reset', replacer: '\x1b[0m' },
  { target: '%bright', replacer: '\x1b[1m' },
  { target: '%dim', replacer: '\x1b[2m' },
  { target: '%underscore', replacer: '\x1b[4m' },
  { target: '%reverse', replacer: '\x1b[7m' },
  { target: '%hidden', replacer: '\x1b[8m' },
  { target: '%fgOrange', replacer: '\x1b[38;5;208m' },
  { target: '%fgBlack', replacer: '\x1b[30m' },
  { target: '%fgRed', replacer: '\x1b[31m' },
  { target: '%fgGreen', replacer: '\x1b[32m' },
  { target: '%fgMagenta', replacer: '\x1b[35m' },
  { target: '%fgBlue', replacer: '\x1b[34m' },
  { target: '%fgLightBlue', replacer: '\x1b[38;5;39m' },
  { target: '%fgCyan', replacer: '\x1b[36m' },
  { target: '%fgLightGreen', replacer: '\x1b[38;5;154m' },
  { target: '%fgYellow', replacer: '\x1b[38;5;226m' },
  { target: '%fgOrange', replacer: '\x1b[38;5;208m' },
  { target: '%fgWhite', replacer: '\x1b[37m' },
  { target: '%fgGray', replacer: '\x1b[90m' },
  { target: '%bgBlack', replacer: '\x1b[40m' },
  { target: '%bgRed', replacer: '\x1b[41m' },
  { target: '%bgGreen', replacer: '\x1b[42m' },
  { target: '%bgYellow', replacer: '\x1b[43m' },
  { target: '%bgBlue', replacer: '\x1b[44m' },
  { target: '%bgMagenta', replacer: '\x1b[45m' },
  { target: '%bgCyan', replacer: '\x1b[46m' },
  { target: '%bgWhite', replacer: '\x1b[47m' },
  { target: '%bgGray', replacer: '\x1b[100m' },
  { target: '%tick', replacer: '\u2713' }
];

export default defaultReplacers;
