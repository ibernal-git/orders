import { ReactNode } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function LoginButton ({ provider, children }: { provider: string, children: ReactNode }) {
  const { locale, defaultLocale } = useRouter()
  let callbackUrl = '/app/'
  if (locale !== defaultLocale) {
    callbackUrl = `/${locale}/app/`
  }
  return (
    <button className="bg-black text-white p-2 rounded  my-4  w-56 shadow-md" onClick={() => signIn(provider, { callbackUrl: callbackUrl })}>{children}</button>
  )
}
