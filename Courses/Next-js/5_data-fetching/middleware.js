import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Request to:", request.nextUrl.pathname); // inspect request
  return NextResponse.next(); // allow request to continue
}
