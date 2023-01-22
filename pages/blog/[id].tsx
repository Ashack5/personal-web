import type { InferGetStaticPropsType, NextPage } from 'next'
import styles from './index.module.css'
import { format } from 'date-fns'
import { client } from '../../src/libs/client'
import Head from 'next/head'
import { Header } from '../../src/_core/components/Header'
import { Footer } from '../../src/_core/components/Footer'

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const blog = await client.get({ endpoint: 'blog' })
  const paths = blog.contents.map((content: { id: any }) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const blog = await client.get({ endpoint: 'blog', contentId: id })

  return {
    props: {
      blog,
    },
  }
}

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blog }) => {
  console.log(blog)
  return (
    <>
      <Head>
        <title>{blog.title} | Ashacks Blog</title>
        <meta name='description' content={blog.title} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <article className={styles.article}>
          <h1 className={styles.head}>{blog.title}</h1>
          <p className={styles.date}>{format(new Date(blog.publishedAt), 'yyyy年MM月dd日')}</p>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
          />
        </article>
      </main>
      <Footer />
    </>
  )
}

export default Blog
