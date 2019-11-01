import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/vendors/normalize.scss"
import styles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.site_content}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
