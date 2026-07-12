import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySessionToken, ADMIN_SESSION_COOKIE } from "@/lib/admin-auth";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  const isAuthenticated = await verifySessionToken(token);
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  if (pathname.startsWith("/api/inventory") && request.method !== "GET") {
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/inventory/:path*"],
};
