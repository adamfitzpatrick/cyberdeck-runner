declare namespace OperatorCssNamespace {
  export interface IOperatorCss {
    attributes: string;
    edge: string;
    heading: string;
  }
}

declare const OperatorCssModule: OperatorCssNamespace.IOperatorCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: OperatorCssNamespace.IOperatorCss;
};

export = OperatorCssModule;
