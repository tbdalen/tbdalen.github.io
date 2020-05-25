import React from "react"

import Github from "./svg/github"
import LinkedIn from "./svg/linkedIn"
import styles from "./social-nav.module.scss"

const SocialNavigation = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a href="https://github.com/tbdalen/">
            <Github />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mos1ka/">
            <LinkedIn />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialNavigation
