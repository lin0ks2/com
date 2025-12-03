import { NextResponse } from "next/server";

const USER = "lin0ks";
const PASS = "sk0nil";

export function middleware(req) {
  const auth = req.headers.get("authorization");

  const expected = "Basic " + Buffer.from(`${USER}:${PASS}`).toString("base64");

  if (auth !== expected) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*" // защищаем всё
};
