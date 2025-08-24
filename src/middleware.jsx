import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = request.nextUrl;

  // প্রোটেক্টেড পেজ
  const isProtected = pathname.startsWith("/addproduct");

  if (!token && isProtected) {
    // প্রোটেক্টেড পেজ থেকে লগইন করলে callbackUrl হিসেবে সেই পেজ রাখো
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/addproduct"],
};
