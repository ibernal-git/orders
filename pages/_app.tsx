import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { I18NProvider } from '../ context/i18n'

function MyApp ({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <I18NProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </I18NProvider>
  )
}

export default MyApp
