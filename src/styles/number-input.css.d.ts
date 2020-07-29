declare namespace NumberInputCssNamespace {
  export interface INumberInputCss {
    base: string;
    disabled: string;
    input: string;
  }
}

declare const NumberInputCssModule: NumberInputCssNamespace.INumberInputCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NumberInputCssNamespace.INumberInputCss;
};

export = NumberInputCssModule;
