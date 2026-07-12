import { NextResponse } from "next/server";
import { z } from "zod";
import { createSessionToken, ADMIN_SESSION_COOKIE } from "@/lib/admin-auth";

const loginSchema = z.object({ password: z.string().min(1) });

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Password is required" }, { status: 400 });
  }

  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword || parsed.data.password !== adminPassword) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const token = await createSessionToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, "", { path: "/", maxAge: 0 });
  return response;
}
