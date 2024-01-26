import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest } from 'next/server';

const headers = { 'accept-language': 'sv,en' };
const languages = new Negotiator({ headers }).languages();
const locales = ['en', 'sv'];
const defaultLocale = 'sv';

const getLocale = () => {
  return match(languages, locales, defaultLocale);
};

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale();
  request.nextUrl.pathname = `/${locale}/${pathname}`;
  // e.g. incoming request is /hours
  // The new URL is now /sv/sundsvall/hours
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next/static|_next/image|.*\\.png$).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
