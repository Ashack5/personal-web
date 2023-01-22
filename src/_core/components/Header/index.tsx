/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './index.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.logo}>
          <a href='#'>Ashacks Blog</a>
        </div>
      </div>
    </header>
  )
}
