import React from "react"

import { Link } from "gatsby"
import styles from "./header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link className={styles.logo} to="/">
          tbd
        </Link>
      </h1>
      <ul className={styles.links}>
        <li>
          <Link to="/">sample</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
