import type { InferGetStaticPropsType, NextPage } from 'next'
import { format } from 'date-fns'
import { client } from '../../src/libs/client'

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
    <div>
      <main>
        <h1>{blog.title}</h1>
        <p>{format(new Date(blog.publishedAt), 'yyyy年MM月dd日')}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
        />
      </main>
    </div>
  )
}

export default Blog
