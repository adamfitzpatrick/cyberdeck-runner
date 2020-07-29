declare namespace SkillCssNamespace {
  export interface ISkillCss {
    base: string;
    rating: string;
    specializationButton: string;
  }
}

declare const SkillCssModule: SkillCssNamespace.ISkillCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SkillCssNamespace.ISkillCss;
};

export = SkillCssModule;
