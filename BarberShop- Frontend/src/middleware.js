import { NextResponse } from "next/server";

export async function middleware(req) {
  const currentRoute = req.nextUrl.pathname;
  const adminToken = req.cookies.get("access_token")?.value;

  if (currentRoute.startsWith("/signin") && adminToken) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (currentRoute === "/" && !adminToken) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }

  return NextResponse.next();
}
