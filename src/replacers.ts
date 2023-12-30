import { Replacer } from './@types';

const defaultReplacers: Replacer[] = [
  { token: '%reset', replacer: '\x1b[0m' },
  { token: '%bright', replacer: '\x1b[1m' },
  { token: '%dim', replacer: '\x1b[2m' },
  { token: '%underscore', replacer: '\x1b[4m' },
  { token: '%reverse', replacer: '\x1b[7m' },
  { token: '%tick', replacer: '\u2713' },
  { token: '%heavyTick', replacer: '\u2714' },
  { token: '%cross', replacer: '\u2717' },
  { token: '%heavyCross', replacer: '\u2718' }
];

export default defaultReplacers;
