/**
 * next-auth by next.js app route handlers
 * https://next-auth.js.org/configuration/initialization#route-handlers-app
 */

import { handler } from '^/lib/server/auth';

export {
  handler as GET,
  handler as POST
};

