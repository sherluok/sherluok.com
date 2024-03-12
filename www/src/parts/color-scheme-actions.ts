'use server';

import { COLOR_SCHEME_COOKIE_KEY, ColorSchemeCookieValue } from '^/lib/common/color-scheme';
import { cookies } from 'next/headers';

export async function setColorScheme(value: ColorSchemeCookieValue): Promise<void> {
  // https://nextjs.org/docs/app/api-reference/functions/cookies
  cookies().set(COLOR_SCHEME_COOKIE_KEY, value);
}
