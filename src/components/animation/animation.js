import React from "react"

import SvgTry from "./svg/svgtry"
import SvgTry2 from "./svg/svgtry2"
import styles from "./animation.module.scss"

export default class Animation extends React.Component {
  constructor() {
    super()
    this.state = { component: <SvgTry /> }
  }

  render() {
    setTimeout(() => {
      this.setState({ component: <SvgTry2 /> })
    }, 8000)
    return <div className={styles.container}>{this.state.component}</div>
  }
}
