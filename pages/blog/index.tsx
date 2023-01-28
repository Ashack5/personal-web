/* eslint-disable @next/next/no-img-element */
import type { InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import styles from './index.module.css'
import { format } from 'date-fns'
import { client } from '../../src/libs/client'
import Head from 'next/head'
import { Header } from '../../src/_core/components/Header'
import { Footer } from '../../src/_core/components/Footer'

export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: 'blog' })
  return {
    props: {
      blog: blog.contents,
    },
  }
}

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blog }) => {
  return (
    <>
      <Head>
        <title>Ashacks Blog TOP | Ashacks Blog</title>
        <meta name='description' content='Ashacks Blog' />
        <meta property='og:title' content='Ashacks Blog' />
        <meta property='og:description' content='Ashacks Blog' />
        <meta property='og:type' content='article' />
        <meta property='og:url' content='https://ashacks.jp/blog/' />
        {/* <meta property='og:image' content={`https://ashacks.jp/blog/${blog.eyecatch.url}`} /> */}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header
        header={{
          title: 'Ashacks Blog',
          url: '/blog/',
        }}
      />
      <main className={styles.main}>
        <div>
          <ul className={styles.contents}>
            {blog.map((blog: any) => (
              <li key={blog.id} className={styles.list}>
                <Link href={`/blog/${blog.id}`}>
                  <div className={styles.eyecatch}>
                    <img src={blog.eyecatch.url} alt='' width={blog.eyecatch.width} height={blog.eyecatch.height} />
                  </div>
                  <p className={styles.title}>{blog.title}</p>
                  <p className={styles.date}>{format(new Date(blog.publishedAt), 'yyyy年MM月dd日')}</p>
                  <ul className={styles.words}>
                    {blog.word.split(/\n/).map((value: string, index: number) => (
                      <li key={index}>
                        <div>{value}</div>
                      </li>
                    ))}
                  </ul>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Blog
