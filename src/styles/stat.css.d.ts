declare namespace StatCssNamespace {
  export interface IStatCss {
    arc: string;
    base: string;
    dataWrapper: string;
    graphic: string;
    graphicBase: string;
    label: string;
  }
}

declare const StatCssModule: StatCssNamespace.IStatCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StatCssNamespace.IStatCss;
};

export = StatCssModule;
