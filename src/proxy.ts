import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();

  // If the path is already /, do nothing
  if (url.pathname === "/") {
    return NextResponse.next();
  }

  // Redirect everything else to /
  url.pathname = "/";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/:path*", // matches all paths
};
