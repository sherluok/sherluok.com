import { type Options as RehypePrettyCodeOptions } from 'rehype-pretty-code';

export const COLOR_SCHEME_COOKIE_KEY = 'colorScheme';

export enum ColorSchemeCookieValue {
  SysmtemPrefers = 'system-prefers',
  UserPrefersLight = 'user-prefers-light',
  UserPrefersDark = 'user-prefers-dark',
}

export function toRehypePrettyCodeOptions(colorScheme: ColorSchemeCookieValue): RehypePrettyCodeOptions {
  switch (colorScheme) {
    case ColorSchemeCookieValue.SysmtemPrefers: return {
      keepBackground: false,
      theme: {
        light: 'github-light',
        dark: 'github-dark-dimmed',
      },
    };
    case ColorSchemeCookieValue.UserPrefersLight: return {
      keepBackground: false,
      theme: 'github-light',
    };
    case ColorSchemeCookieValue.UserPrefersDark: return {
      keepBackground: false,
      theme: 'github-dark-dimmed',
    };
  }
}
