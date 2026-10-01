import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/* Next.js 16 names the middleware entry proxy.ts */
export default createMiddleware(routing);

export const config = {
  /* every path except api, Next internals and static files */
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
