
import { signOut } from 'next-auth/react'
import { useI18N } from '../ context/i18n'

export default function Header () {
  const { t } = useI18N()
  return (
    <div className='bg-white flex justify-between h-16 items-center shadow-lg'>
      <h1 className='text-lg font-bold'>{t('APP_NAME')}</h1>
      <button onClick={() => signOut({ callbackUrl: '/' })}>{t('LOG_OUT')}</button>
    </div>
  )
}
