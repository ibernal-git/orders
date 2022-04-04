import { ReactNode } from 'react'
import { signIn } from 'next-auth/react'

export default function LoginButton ({ provider, children }: { provider: string, children: ReactNode }) {
  return (
    <button className="bg-black text-white p-2 rounded  my-4  w-56 shadow-md" onClick={() => signIn(provider, { callbackUrl: '/app/' })}>{children}</button>
  )
}
