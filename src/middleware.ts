import { NextRequest, NextResponse } from 'next/server'

const loginUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token-spacetime')?.value

  if (!token) {
    return NextResponse.redirect(loginUrl, {
      headers: {
        'Set-Cookie': `st-redirectTo=${request.url}; Path=/; HttpOnly; max-age=30`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:path*',
}
