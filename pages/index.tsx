import type { NextPage } from 'next'
import Head from 'next/head'
import { FeedbackList } from '@/components/FeedbackList'
import { FeedbackStats } from '@/components/FeedbackStats'
import { Header } from '@/components/Header'
import { FeedbackContextProvider } from 'context/FeedbackContext'

const Home: NextPage = () => {
  return (
    <FeedbackContextProvider>
      <Head>
        <title>Feedback App</title>
        <meta name="description" content="Feedback App" />
      </Head>

      <Header />

      <div className="container">
        <FeedbackStats />
        <FeedbackList />
      </div>
    </FeedbackContextProvider>
  )
}

export default Home
