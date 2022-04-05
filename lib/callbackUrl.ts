import type { ParsedUrlQuery } from 'querystring'

export function getCallbackUrl (query: ParsedUrlQuery, locale: string | undefined, defaultLocale: string | undefined) {
  let callbackUrl: string
  if (query?.callbackUrl && typeof query.callbackUrl === 'string') {
    callbackUrl = query.callbackUrl
  } else {
    callbackUrl = '/app/'
    if (locale && defaultLocale && locale !== defaultLocale) {
      callbackUrl = `/${locale}/app/`
    }
  }
  return { callbackUrl }
}
