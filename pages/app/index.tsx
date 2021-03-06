import { GetServerSideProps, NextPage } from 'next'
import { getUserSession } from '../../lib/session'
import Clients from '../../components/Clients'
import Header from '../../components/Header'

const App: NextPage = () => {
  return (
    <div className="h-screen bg-secondary">
      <Header />
      <Clients />
    </div>
  )
}
export default App

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { session, destination } = await getUserSession(context)
  if (!session) {
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
