import { NextResponse } from "next/server";

const PUBLIC_PATHS = [
  "/login",
  "/register",
  "/",
  "/demo",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];
const AUTH_PATHS = ["/dashboard"];
const ADMIN_ONLY_EXACT = ["/dashboard"];
const ADMIN_PATHS = ["/dashboard/admin"];

const isMatch = (pathname, paths) =>
  paths.some((path) => pathname === path || pathname.startsWith(path + "/"));

const isExactMatch = (pathname, paths) => paths.includes(pathname);

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const cookie = req.headers.get("cookie") ?? "";

  if (isMatch(pathname, PUBLIC_PATHS)) return NextResponse.next();

  // all /dashboard/* — must be logged in
  if (isMatch(pathname, AUTH_PATHS)) {
    try {
      const res = await fetch(
        `https://hirepilot-ai-server.vercel.app/api/v1/users/user`,
        {
          headers: { Cookie: cookie },
        },
      );
      if (!res.ok) return NextResponse.redirect(new URL("/login", req.url));
    } catch {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // exact /dashboard — admin only
  if (isExactMatch(pathname, ADMIN_ONLY_EXACT)) {
    try {
      const res = await fetch(
        `https://hirepilot-ai-server.vercel.app/api/v1/users/auth`,
        {
          headers: { Cookie: cookie },
        },
      );
      if (!res.ok) return NextResponse.redirect(new URL("/login", req.url));

      const { data } = await res.json();
      if (data !== true)
        return NextResponse.redirect(new URL("/dashboard/resumes", req.url)); // redirect users to their page
    } catch {
      return NextResponse.redirect(new URL("/dashboard/resumes", req.url));
    }
  }

  // /dashboard/admin/* — admin only
  if (isMatch(pathname, ADMIN_PATHS)) {
    try {
      const res = await fetch(
        `https://hirepilot-ai-server.vercel.app/api/v1/users/auth`,
        {
          headers: { Cookie: cookie },
        },
      );
      if (!res.ok) return NextResponse.redirect(new URL("/login", req.url));

      const { data } = await res.json();
      if (data !== true)
        return NextResponse.redirect(new URL("/dashboard/resumes", req.url));
    } catch {
      return NextResponse.redirect(new URL("/dashboard/resumes", req.url));
    }
  }

  return NextResponse.next();
}
