import { COLOR_SCHEME_COOKIE_KEY, ColorSchemeCookieValue } from '^/lib/common/color-scheme';
import { cookies } from 'next/headers';

export function getColorSchemeCookieValue(): ColorSchemeCookieValue {
  // https://nextjs.org/docs/app/api-reference/functions/cookies
  const cookieStore = cookies();
  const colorSchemeCookie = cookieStore.get(COLOR_SCHEME_COOKIE_KEY);
  switch (colorSchemeCookie?.value) {
    case ColorSchemeCookieValue.UserPrefersLight:
      return ColorSchemeCookieValue.UserPrefersLight;
    case ColorSchemeCookieValue.UserPrefersDark:
      return ColorSchemeCookieValue.UserPrefersDark;
    default:
      return ColorSchemeCookieValue.SysmtemPrefers;
  }
}

