import Head from 'next/head'
import Header from '../components/Header'
import Projects from '../components/Projects'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tomás Canosa Moreno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Projects />
    </div>
  )
}
