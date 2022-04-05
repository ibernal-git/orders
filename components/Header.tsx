
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useI18N } from '../ context/i18n'

export default function Header () {
  const { t } = useI18N()
  return (
    <div className='bg-white flex justify-between h-16 items-center shadow-lg px-4'>
      <h1 className='text-lg font-bold'>{t('APP_NAME')}</h1>
      <Link href='/'>
        <a onClick={() => signOut()}>{t('LOG_OUT')}</a>
      </Link>
    </div>
  )
}
