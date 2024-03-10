import { globalStyle } from '@vanilla-extract/css';
import { vars } from '^/style';

globalStyle(':root', {
  vars: {
    [vars.smallFontSize]: `14px`,
    [vars.normalFontSize]: `16px`,
    [vars.largeFontSize]: `18px`,
    [vars.bodyFontFamily]: `"Inter Variable"`,
    [vars.codeFontFamily]: `"JetBrains Mono Variable"`,
    [vars.defaultFont]: ``,

    [vars.brightBackground]: `hsl(220 5% 100%)`,
    [vars.defaultBackground]: `hsl(220 5% 96%)`,
    [vars.hoverBackground]: `hsl(220 5% 92%)`,
    [vars.defaultBorderColor]: `hsl(220 5% 90%)`,
    [vars.primaryForeground]: `hsl(220 5% 20%)`,
    [vars.secondaryForeground]: `hsl(220 5% 40%)`,
    [vars.placeholderForeground]: `hsl(220 5% 60%)`,

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
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      colorScheme: 'dark',
      vars: {
        [vars.brightBackground]: `hsl(210 5% 0%)`,
        [vars.defaultBackground]: `hsl(210 5% 4%)`,
        [vars.hoverBackground]: `hsl(210 5% 12%)`,
        [vars.defaultBorderColor]: `hsl(210 5% 16%)`,
        [vars.primaryForeground]: `hsl(210 5% 80%)`,
        [vars.secondaryForeground]: `hsl(210 5% 60%)`,
        [vars.placeholderForeground]: `hsl(210 5% 40%)`,

        [vars.linkColor]: `hsl(210 60% 60%)`,
        [vars.linkHoverColor]: `hsl(210 60% 70%)`,
        [vars.linkPressColor]: `hsl(210 70% 80%)`,

        [vars.primaryButtonBackground]: `hsl(210 5% 100%)`,
        [vars.primaryButtonHoverBackground]: `hsl(210 5% 90%)`,
        [vars.primaryButtonPressBackground]: `hsl(210 5% 80%)`,
        [vars.primaryButtonBorderColor]: `hsl(210 5% 20% / 0%)`,
        [vars.primaryButtonForeground]: `hsl(210 5% 20%)`,
        [vars.primaryButtonHoverForeground]: `hsl(210 5% 20%)`,
        [vars.primaryButtonPressForeground]: `hsl(210 5% 20%)`,

        [vars.secondaryButtonBackground]: `hsl(210 5% 4%)`,
        [vars.secondaryButtonHoverBackground]: `hsl(210 5% 8%)`,
        [vars.secondaryButtonPressBackground]: `hsl(210 5% 12%)`,
        [vars.secondaryButtonBorderColor]: `hsl(210 5% 16%)`,
        [vars.secondaryButtonForeground]: `hsl(210 5% 80%)`,
        [vars.secondaryButtonHoverForeground]: `hsl(210 5% 80%)`,
        [vars.secondaryButtonPressForeground]: `hsl(210 5% 80%)`,
      },
    },
  },
});

globalStyle('html', {
  background: vars.defaultBackground,
  fontFamily: vars.bodyFontFamily,
  fontSize: vars.normalFontSize,
  color: vars.primaryForeground,
});

globalStyle('body', {
  margin: 0,
});

globalStyle('code', {
  fontFamily: vars.codeFontFamily,
});

globalStyle('a', {
  color: vars.linkColor,
  textDecoration: 'none',
});
