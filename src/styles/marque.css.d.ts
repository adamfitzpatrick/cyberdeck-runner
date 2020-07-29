declare namespace MarqueCssNamespace {
  export interface IMarqueCss {
    base: string;
    heading: string;
    interior: string;
    settings: string;
  }
}

declare const MarqueCssModule: MarqueCssNamespace.IMarqueCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MarqueCssNamespace.IMarqueCss;
};

export = MarqueCssModule;
