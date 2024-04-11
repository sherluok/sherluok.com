import * as vars from './scheme-vars.css';

const DEBUG_SCHEME = Object.fromEntries(Object.values(vars).map((cssVarFunction) => [cssVarFunction, 'red']));

export const LIGHT_SCHEME = {
  ...DEBUG_SCHEME,
  [vars.brightBackground]: `hsl(220 5% 100%)`,
  [vars.defaultBackground]: `hsl(50 12% 92%)`,
  [vars.editorBackground]: `hsl(220 5% 100%)`,
  [vars.hoverBackground]: `hsl(220 5% 92%)`,
  [vars.defaultBorderColor]: `hsl(220 5% 90%)`,

  [vars.primaryTextColor]: `hsl(50 20% 8%)`,
  [vars.secondaryTextColor]: `hsl(50 12% 16%)`,
  [vars.placeholderTextColor]: `hsl(50 12% 24%)`,

  [vars.linkColor]: `hsl(210 60% 40%)`,
  [vars.linkHoverColor]: `hsl(210 80% 40%)`,
  [vars.linkPressColor]: `hsl(210 80% 60%)`,

  [vars.primaryButtonBackground]: `hsl(220 5% 0%)`,
  [vars.primaryButtonHoverBackground]: `hsl(220 5% 20%)`,
  [vars.primaryButtonPressBackground]: `hsl(220 5% 30%)`,
  [vars.primaryButtonBorderColor]: `hsl(220 5% 20% / 0%)`,
  [vars.primaryButtonForeground]: `hsl(220 5% 100%)`,
  [vars.primaryButtonHoverForeground]: `hsl(220 5% 100%)`,
  [vars.primaryButtonPressForeground]: `hsl(220 5% 100%)`,

  [vars.secondaryButtonBackground]: `hsl(220 5% 100%)`,
  [vars.secondaryButtonHoverBackground]: `hsl(220 5% 96%)`,
  [vars.secondaryButtonPressBackground]: `hsl(220 5% 92%)`,
  [vars.secondaryButtonBorderColor]: `hsl(220 5% 90%)`,
  [vars.secondaryButtonForeground]: `hsl(220 5% 20%)`,
  [vars.secondaryButtonHoverForeground]: `hsl(220 5% 20%)`,
  [vars.secondaryButtonPressForeground]: `hsl(220 5% 20%)`,

  [vars.selectionTextColor]: 'hsl(40 16% 92%)',
  [vars.selectionBackground]: 'hsl(40 16% 32%)',

  [vars.inlineCodeTextColor]: `hsl(50 100% 30%)`,
  [vars.inlineCodeBackground]: `hsl(50 8% 88%)`,
  [vars.inlineCodeBorderColor]: `hsl(50 8% 88%)`,
  [vars.blockCodeBackground]: `hsl(50 8% 88%)`,
  [vars.blockCodeBorderColor]: `hsl(50 8% 88%)`,
};

export const DARK_SCHEME = {
  ...DEBUG_SCHEME,

  [vars.defaultBorderColor]: `hsl(50 12% 12%)`,

  [vars.defaultBackground]: `hsl(50 12% 4%)`,
  [vars.editorBackground]: `hsl(50 8% 6%)`,
  [vars.hoverBackground]: `hsl(50 12% 20%)`,

  [vars.primaryTextColor]: `hsl(50 8% 80%)`,
  [vars.secondaryTextColor]: `hsl(50 10% 60%)`,
  [vars.placeholderTextColor]: `hsl(50 8% 48%)`,

  [vars.linkColor]: `hsl(210 60% 60%)`,
  [vars.linkHoverColor]: `hsl(210 60% 70%)`,
  [vars.linkPressColor]: `hsl(210 60% 80%)`,

  [vars.selectionTextColor]: 'hsl(40 16% 92%)',
  [vars.selectionBackground]: 'hsl(40 16% 32%)',

  [vars.inlineCodeTextColor]: `hsl(50 30% 72%)`,
  [vars.inlineCodeBackground]: `hsl(50 6% 16%)`,
  [vars.inlineCodeBorderColor]: `hsl(50 12% 4%)`,
  [vars.blockCodeBackground]: `hsl(50 8% 8%)`,
  [vars.blockCodeBorderColor]: `hsl(50 8% 12%)`,
  [vars.highlightedCodeLineBackground]: `hsl(50 8% 16%)`,
  [vars.highlightedCodeCharBackground]: `hsl(50 8% 20%)`,

  [vars.secondaryButtonBackground]: `hsl(50 8% 12%)`,
  [vars.secondaryButtonBorderColor]: `hsl(50 8% 20%)`,
  [vars.secondaryButtonForeground]: `hsl(50 12% 80%)`,
};
