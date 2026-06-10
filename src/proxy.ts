import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// In Next.js 16 the middleware entry file is named `proxy.ts`.
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except API routes, Next internals and static files.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
