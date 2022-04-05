import { getSession } from 'next-auth/react'

export async function getUserSession (context: any) {
  const session = await getSession(context)
  const defaultLocale = context.defaultLocale
  let destination: string
  destination = context.resolvedUrl

  if (context.locale !== defaultLocale) {
    destination = `/${context.locale}${destination}`
  }
  if (!session) {
    destination = `/api/auth/signin?callbackUrl=${destination}`
  }
  return { session, destination }
}
