import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useI18N } from '../ context/i18n'
import LoginButton from '../components/LoginButton'
import { getUserSession } from '../lib/session'

const Home: NextPage = () => {
  const { t } = useI18N()
  const { locale, locales } = useRouter()
  const restOfLocales = locales?.filter(l => l !== locale) || []

  return (
    <>
      <div className='flex h-screen items-center justify-center space-between bg-secondary'>
        <div className='h-96 mx-auto w-96 bg-primary p-10 rounded text-center shadow-md'>
          <h1 className='text-2xl font-bold'>{t('APP_NAME').toUpperCase()}</h1>
          <div className='flex flex-col justify-center h-full'>
            <div>
              <LoginButton provider='cognito'>
                {t('SIGN_IN', 'Cognito')}
              </LoginButton>
              <LoginButton provider='azure-ad'>
                {t('SIGN_IN', 'Azure AD')}
              </LoginButton>
            </div>
            <Link href='/' locale={restOfLocales[0]}>
              <a>{t('CHANGE_LANGUAGE')} {restOfLocales[0]}</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

export async function getServerSideProps (context: any) {
  let destination = '/app/'
  const defaultLocale = context.defaultLocale
  if (context.locale !== defaultLocale) {
    destination = `/${context.locale}/app/`
  }
  const { session } = await getUserSession(context)
  if (session) {
    return {
      redirect: {
        destination: destination,
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
