import type { NextPage } from 'next'
import { useI18N } from '../ context/i18n'

const Home: NextPage = () => {
  const { t } = useI18N()
  console.log(t('HELLO_WORLD'))
  return (
    <>
    <h1 className='text-lg font-bold'>{t('HELLO_WORLD')}</h1>
    </>
  )
}

export default Home
