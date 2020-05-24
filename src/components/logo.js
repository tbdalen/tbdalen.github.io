import React from "react"

import { Link } from "gatsby"
import styles from "./logo.module.scss"

const Logo = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} to="/">
        TBD
      </Link>
    </div>
  )
}

export default Logo
