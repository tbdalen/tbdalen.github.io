import React from "react"

import Github from "./svg/github"
import LinkedIn from "./svg/linkedIn"
import styles from "./social-nav.module.scss"

const SocialNavigation = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a href="www.github.com">
            <Github />
          </a>
        </li>
        <li>
          <a href="www.linkedin.com">
            <LinkedIn />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialNavigation
