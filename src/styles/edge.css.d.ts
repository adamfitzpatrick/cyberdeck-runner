declare namespace EdgeCssNamespace {
  export interface IEdgeCss {
    base: string;
    buttonOverlay: string;
    indicator: string;
    indicators: string;
    label: string;
    on: string;
    wrapper: string;
  }
}

declare const EdgeCssModule: EdgeCssNamespace.IEdgeCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: EdgeCssNamespace.IEdgeCss;
};

export = EdgeCssModule;
