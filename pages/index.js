import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tomás Canosa Moreno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Projects />
    </>
  )
}
