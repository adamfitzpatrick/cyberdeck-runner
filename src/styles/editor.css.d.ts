declare namespace EditorCssNamespace {
  export interface IEditorCss {
    modal: string;
    wrapper: string;
  }
}

declare const EditorCssModule: EditorCssNamespace.IEditorCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: EditorCssNamespace.IEditorCss;
};

export = EditorCssModule;
