import { NextResponse } from 'next/server';

// Middleware disabled: authentication is handled on the client via AuthContext.
// Keep pass-through only to avoid incorrect redirects.
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
