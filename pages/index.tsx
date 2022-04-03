import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useI18N } from '../ context/i18n'
import { signIn, getSession } from 'next-auth/react'

const Home: NextPage = () => {
  const { t } = useI18N()
  const { locale, locales } = useRouter()
  const restOfLocales = locales?.filter(l => l !== locale) || []

  const handleSignIn = () => signIn('cognito', {
    callbackUrl: '/app/'
  })

  return (
    <>
      <Link href='/' locale={restOfLocales[0]}>
        <a>{restOfLocales[0]}</a>
      </Link>
      <h1 className='text-lg font-bold'>{t('HELLO_WORLD')}</h1>
      <button onClick={handleSignIn}>Iniciar Sesión</button>
    </>
  )
}

export default Home

export async function getServerSideProps (context: any) {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: '/app/',
        permanent: false
      }
    }
  }
  return {
    props: {
      session
    }
  }
}
