declare namespace SwitchCssNamespace {
  export interface ISwitchCss {
    base: string;
    buttonOverlay: string;
    label: string;
    slider: string;
    sliderTrue: string;
    track: string;
    trackTrue: string;
    valueLabel: string;
    valueLabelHidden: string;
  }
}

declare const SwitchCssModule: SwitchCssNamespace.ISwitchCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SwitchCssNamespace.ISwitchCss;
};

export = SwitchCssModule;
