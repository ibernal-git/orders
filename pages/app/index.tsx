import { NextPage } from 'next'
import {
  getSession,
  useSession
} from 'next-auth/react'
import Clients from '../../components/Clients'
import Header from '../../components/Header'

const App: NextPage = () => {
  const { data: session } = useSession()
  console.log({
    session
  })

  return (
    <div className="h-screen bg-secondary">
      <Header />
      <Clients />
    </div>
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
