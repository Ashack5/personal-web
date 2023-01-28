import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './index.module.css'
import { Header } from '../src/_core/components/Header'
import { Footer } from '../src/_core/components/Footer'
import NotFound from '../assets/images/404.svg'

const CustomErrorPage = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.replace('/')
    }, 3000)
  })

  return (
    <>
      <Header
        header={{
          title: 'Ashacks',
          url: '/',
        }}
      />
      <div className={styles.notfound}>
        <NotFound />
      </div>
      <Footer />
    </>
  )
}

export default CustomErrorPage
