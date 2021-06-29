import Head from 'next/head'
import Layout from '../components/layout.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Jules Dehon's Personal Site</h1>
    </Layout>
  )
}
