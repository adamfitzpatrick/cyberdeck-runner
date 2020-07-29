declare namespace EnvironmentCssNamespace {
  export interface IEnvironmentCss {
    heading: string;
    hotSimBlock: string;
    hotSimBlockVisible: string;
    modeBlock: string;
  }
}

declare const EnvironmentCssModule: EnvironmentCssNamespace.IEnvironmentCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: EnvironmentCssNamespace.IEnvironmentCss;
};

export = EnvironmentCssModule;
