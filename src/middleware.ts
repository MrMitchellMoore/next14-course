import { NextRequest, NextResponse } from 'next/server';

const isLoggedIn: boolean = true;
export function middleware(request: NextRequest) {
  let headers = new Headers(request.headers);

  if (isLoggedIn && request.url === 'http://localhost:3000/profile') {
    return NextResponse.next();
  }
  console.log(headers);
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/profile'],
};
