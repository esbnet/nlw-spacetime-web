import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const platform = 'web'

  const redirectTo = request.cookies.get('st-redirectTo')?.value

  const registerResponse = await api.post('/register', { code, platform })

  const { token } = registerResponse.data

  const redirectUrl = redirectTo ?? new URL('/', request.url)

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30 // 30 days

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `token-spacetime=${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
    },
  })
}
