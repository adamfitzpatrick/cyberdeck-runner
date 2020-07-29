declare namespace SkillsCssNamespace {
  export interface ISkillsCss {
    base: string;
  }
}

declare const SkillsCssModule: SkillsCssNamespace.ISkillsCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SkillsCssNamespace.ISkillsCss;
};

export = SkillsCssModule;
