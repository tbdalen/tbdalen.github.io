import React from "react"

import { Link } from "gatsby"
import styles from "./main-nav.module.scss"

const MainNavigation = () => {
  return (
    <nav className={styles.links}>
      <ul>
        <li>
          <Link to="/">abode</Link>
        </li>
        <li>
          <Link to="/workshop">work</Link>
        </li>
        <li>
          <Link to="/lounge">lounge</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation
