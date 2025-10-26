import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const path = request.nextUrl.pathname;

  // Define public pages that don't require authentication
  const publicPages = [
    "/",
    "/login", 
    "/signup",
    "/pricing",
    "/features",
    "/contact",
    "/company",
    "/customers",
    "/changelog",
    "/method"
  ];

  // Define protected pages that require authentication
  const protectedPages = ["/dashboard"];
  
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // If user is logged in and tries to access login/signup, redirect to dashboard
  if ((path === "/login" || path === "/signup") && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If user is not logged in and tries to access protected pages, redirect to login
  if (protectedPages.some(page => path.startsWith(page)) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Check for admin access
  if (path.startsWith("/admin") && token?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Allow all other requests to proceed
  return NextResponse.next();
}

// Temporarily disabled middleware
export const config = {
  matcher: [],
};