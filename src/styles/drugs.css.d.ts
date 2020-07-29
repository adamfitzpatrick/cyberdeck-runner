declare namespace DrugsCssNamespace {
  export interface IDrugsCss {
    base: string;
    heading: string;
  }
}

declare const DrugsCssModule: DrugsCssNamespace.IDrugsCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DrugsCssNamespace.IDrugsCss;
};

export = DrugsCssModule;
