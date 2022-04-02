import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useI18N } from '../ context/i18n'

const Home: NextPage = () => {
  const { t } = useI18N()
  const { locale, locales } = useRouter()
  const restOfLocales = locales?.filter(l => l !== locale) || []
  return (
    <>
      <Link href='/' locale={restOfLocales[0]}>
        <a>{restOfLocales[0]}</a>
      </Link>
      <h1 className='text-lg font-bold'>{t('HELLO_WORLD')}</h1>
    </>
  )
}

export default Home
