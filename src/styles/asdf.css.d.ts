declare namespace AsdfCssNamespace {
  export interface IAsdfCss {
    attack: string;
    base: string;
    buttonOverlay: string;
    dataProcessing: string;
    firewall: string;
    label: string;
    sleaze: string;
    swapFromButton: string;
    value: string;
  }
}

declare const AsdfCssModule: AsdfCssNamespace.IAsdfCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AsdfCssNamespace.IAsdfCss;
};

export = AsdfCssModule;
