declare namespace AsdfBlockCssNamespace {
  export interface IAsdfBlockCss {
    base: string;
    heading: string;
  }
}

declare const AsdfBlockCssModule: AsdfBlockCssNamespace.IAsdfBlockCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AsdfBlockCssNamespace.IAsdfBlockCss;
};

export = AsdfBlockCssModule;
