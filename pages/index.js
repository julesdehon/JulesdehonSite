import Head from 'next/head'
import Layout from '../components/layout'
import Countdown from '../components/countdown'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Jules Dehon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Redesign coming</h1>
      <Countdown date={new Date(2021, 6, 20)} />
      <div className={styles.socials}>
        <a href="https://github.com/julesdehon">Github</a>
        <a href="https://www.linkedin.com/in/jules-dehon/">LinkedIn</a>
        <a href="https://youtu.be/KtZKW_z5SwM?t=85">Can I grab it?</a>
      </div>
    </Layout>
  )
}
