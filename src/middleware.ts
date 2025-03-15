import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest, NextResponse } from 'next/server'

import { i18n } from './dictionaries/i18n-config'

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value
  })

  const locales: string[] = [...i18n.locales]

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales)

  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  return locale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // `/_next/` and `/api/` are ignored by the watcher,
  // but we need to ignore files in `public` manually.
  // If you have one
  if (
    [
      '/favicon.ico',
      // Your other files in `public`
    ].includes(pathname)
  )
    return undefined
  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameHasLocale) return undefined

  // redirect if there is no locale
  const locale = getLocale(request)
  if (!locale) return undefined

  request.nextUrl.pathname = `${locale}/${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|svg|image).*)'],
}
