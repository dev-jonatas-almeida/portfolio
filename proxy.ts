import { NextResponse, type NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  return NextResponse.redirect(new URL("/home", req.url));
}

export const config = { matcher: "/" };
