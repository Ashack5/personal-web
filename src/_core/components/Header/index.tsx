/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import styles from './index.module.css'

type Props = {
  header: {
    title: string
    url: string
  }
}

export const Header = (props: Props) => {
  const { header } = props
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.logo}>
          <Link href={header.url}>{header.title}</Link>
        </div>
      </div>
    </header>
  )
}
