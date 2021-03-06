import React from "react"

import "../styles/vendors/normalize.scss"
import styles from "./layout.module.scss"
import Div100vh from "react-div-100vh"

import Logo from "./logo/logo"
import SocialNavigation from "../components/social-nav/social-nav"
import MainNavigation from "../components/main-nav"

import "../styles/vendors/normalize.scss"

const Layout = props => {
  return (
    <Div100vh>
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
    </Div100vh>
  )
}

export default Layout
