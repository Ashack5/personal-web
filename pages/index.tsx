import Link from 'next/link'
import styles from './index.module.css'
import { format } from 'date-fns'
import Head from 'next/head'
import { Header } from '../src/_core/components/Header'
import { Footer } from '../src/_core/components/Footer'

const Home = () => {
  return (
    <>
      <Head>
        <title>Ashacks</title>
        <meta name='description' content='Ashacks' />
        <meta property='og:title' content='Ashacks' />
        <meta property='og:description' content='Ashacks' />
        <meta property='og:type' content='article' />
        <meta property='og:url' content='https://ashacks.jp/' />
        {/* <meta property='og:image' content={`https://ashacks.jp/blog/${blog.eyecatch.url}`} /> */}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header
        header={{
          title: 'Ashacks',
          url: '/',
        }}
      />
      <main className={styles.main}>
        <div>Home</div>
      </main>
      <Footer />
    </>
  )
}

export default Home
