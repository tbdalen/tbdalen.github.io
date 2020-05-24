import React from "react"

import "../styles/vendors/normalize.scss"
import styles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={styles.container}>
      <div className={styles.site_content}>{props.children}</div>
    </div>
  )
}

export default Layout
