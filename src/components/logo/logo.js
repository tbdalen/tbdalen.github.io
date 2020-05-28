import React from "react"

import { Link } from "gatsby"
import styles from "./logo.module.scss"
import SvgLogo from "./svg/svgLogo"

const Logo = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} to="/">
        <SvgLogo />
      </Link>
    </div>
  )
}

export default Logo
