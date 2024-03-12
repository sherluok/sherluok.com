import { globalStyle } from '@vanilla-extract/css';
import { ColorSchemeCookieValue } from '^/lib/common/color-scheme';
import { DARK_SCHEME, LIGHT_SCHEME } from '^/style/scheme-presets.css';
import { vars } from '^/style/vars.css';

globalStyle('html', {
  vars: {
    [vars.smallFontSize]: `14px`,
    [vars.normalFontSize]: `16px`,
    [vars.largeFontSize]: `18px`,
    [vars.bodyFontFamily]: `"Inter Variable"`,
    [vars.codeFontFamily]: `"JetBrains Mono Variable"`,
    [vars.defaultFont]: `normal 400 14px/20px ${vars.bodyFontFamily}`,

    [vars.transitionDurationTextColor]: '150ms',
    [vars.transitionDurationIconColor]: '100ms',
    [vars.transitionDurationBackground]: '200ms',
  },
});

globalStyle(`html[data-scheme="${ColorSchemeCookieValue.SysmtemPrefers}"]`, {
  colorScheme: 'light',
  vars: LIGHT_SCHEME,
  '@media': {
    '(prefers-color-scheme: dark)': {
      colorScheme: 'dark',
      vars: DARK_SCHEME,
    }
  },
});

globalStyle(`html[data-scheme="${ColorSchemeCookieValue.UserPrefersLight}"]`, {
  colorScheme: 'light',
  vars: LIGHT_SCHEME,
});

globalStyle(`html[data-scheme="${ColorSchemeCookieValue.UserPrefersDark}"]`, {
  colorScheme: 'dark',
  vars: DARK_SCHEME,
});

// https://developer.mozilla.org/en-US/docs/Web/CSS/::selection
globalStyle('::selection', {
  color: vars.selectionTextColor,
  backgroundColor: vars.selectionBackground,
});

globalStyle('html', {
  background: vars.defaultBackground,
  fontFamily: vars.bodyFontFamily,
  fontSize: vars.normalFontSize,
  color: vars.primaryTextColor,
});

globalStyle('body', {
  margin: 0,
});

globalStyle('code', {
  fontFamily: vars.codeFontFamily,
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});
