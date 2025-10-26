import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const path = request.nextUrl.pathname;

  // Only allow access to login and signup pages without authentication
  const isAuthPage = path === "/login" || path === "/signup";
  
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // If user is on the root path ("/") and not logged in, redirect to login
  if (path === "/" && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If the user is on an auth page (login/signup) and is already logged in,
  // redirect them to the dashboard
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If the user is not on an auth page and is not logged in,
  // redirect them to the login page
  if (!isAuthPage && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Check for admin access
  if (path.startsWith("/admin") && token?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  // Match all routes except static files, api routes, and other special paths
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 3. /fonts/ (inside public directory)
     * 4. /logo-assets/ (inside public directory)
     * 5. /favicon.ico, /sitemap.xml (public files)
     */
    "/((?!api|_next|fonts|logo-assets|favicon.ico).*)",
  ],
};