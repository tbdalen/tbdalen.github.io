import React from "react"

import "../styles/vendors/normalize.scss"
import styles from "./layout.module.scss"

import Logo from "./logo/logo"
import SocialNavigation from "../components/social-nav/social-nav"
import MainNavigation from "../components/main-nav"

import "../styles/vendors/normalize.scss"

const Layout = props => {
  return (
    <div className={styles.container}>
      <div className={styles.containerGrid}>
        <div className={styles.logo}>
          <Logo />
        </div>
        {props.children}
        <div className={styles.main}>
          <MainNavigation />
        </div>
        <div className={styles.social}>
          <SocialNavigation />
        </div>
      </div>
    </div>
  )
}

export default Layout
