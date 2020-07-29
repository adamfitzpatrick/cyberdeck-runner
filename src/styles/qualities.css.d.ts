declare namespace QualitiesCssNamespace {
  export interface IQualitiesCss {
    base: string;
    heading: string;
  }
}

declare const QualitiesCssModule: QualitiesCssNamespace.IQualitiesCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: QualitiesCssNamespace.IQualitiesCss;
};

export = QualitiesCssModule;
