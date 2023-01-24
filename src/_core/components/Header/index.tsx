/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import styles from './index.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.logo}>
          <Link href='/blog/'>Ashacks Blog</Link>
        </div>
      </div>
    </header>
  )
}
