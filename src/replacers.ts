import { Replacer } from './@types';

const defaultReplacers: Replacer[] = [
  { target: '%reset', replacer: '\x1b[0m' },
  { target: '%bright', replacer: '\x1b[1m' },
  { target: '%dim', replacer: '\x1b[2m' },
  { target: '%underscore', replacer: '\x1b[4m' },
  { target: '%reverse', replacer: '\x1b[7m' },
  { target: '%tick', replacer: '\u2713' },
  { target: '%heavyTick', replacer: '\u2714' },
  { target: '%cross', replacer: '\u2717' },
  { target: '%heavyCross', replacer: '\u2718' }
];

export default defaultReplacers;
