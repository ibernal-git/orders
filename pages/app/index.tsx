import { NextPage } from 'next'
import {
  getSession,
  signOut,
  useSession
} from 'next-auth/react'

const App: NextPage = () => {
  const { data: session } = useSession()
  console.log({
    session
  })

  return (
    <>
      <h1 className='text-lg font-bold'>Hidden</h1>
      <button onClick={() => signOut({ callbackUrl: '/' })}>Cerrar Sesión</button>
    </>
  )
}
export default App

export async function getServerSideProps (context: any) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/app/',
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
