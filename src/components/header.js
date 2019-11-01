import React from "react"

import { Link } from "gatsby"
import styles from "./header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>
          <Link to="/">tbd</Link>
        </h1>
      </div>

      <nav className={styles.links}>
        <ul>
          <li>
            <Link to="/">abode</Link>
          </li>
          <li>
            <Link to="/workshop">workshop</Link>
          </li>
          <li>
            <Link to="/lounge">lounge</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
