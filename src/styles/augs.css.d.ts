declare namespace AugsCssNamespace {
  export interface IAugsCss {
    base: string;
    heading: string;
    indentedInput: string;
  }
}

declare const AugsCssModule: AugsCssNamespace.IAugsCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AugsCssNamespace.IAugsCss;
};

export = AugsCssModule;
