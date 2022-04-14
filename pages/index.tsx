import type { NextPage } from 'next'
import Head from 'next/head'
import { FeedbackList } from '@/components/FeedbackList'
import { Header } from '@/components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Feedback App</title>
        <meta name="description" content="Feedback App" />
      </Head>

      <Header />

      <div className="container">
        <FeedbackList />
      </div>
    </>
  )
}

export default Home
