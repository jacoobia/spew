type BasePrintOptions = {
  resetEachLine?: boolean;
  customReplacers?: Replacer[];
};

type TypeEffectOptions = BasePrintOptions & {
  typeEffect: true;
  charDelay?: number;
  lineDelay?: never;
};

type NoTypeEffectOptions = BasePrintOptions & {
  typeEffect?: false | undefined;
  lineDelay?: number;
};

export type RGB = {
  r: number;
  g: number;
  b: number;
};

export type Replacer = {
  target: string;
  replacer: string;
};

export type PrintOptions = TypeEffectOptions | NoTypeEffectOptions;
