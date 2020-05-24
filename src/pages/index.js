import React, { Component } from "react"

import Logo from "../components/logo"
import BackgroundPhoto from "../components/photo/photo"
import MainNavigation from "../components/main-nav"
import SocialNavigation from "../components/social-nav/social-nav"
import FPText from "../components/typist/typist"
import Animation from "../components/animation/animation"

import { TimelineLite } from "gsap/all"

import styles from "./index.module.scss"

class indexPage extends Component {
  constructor(props) {
    super(props)
    // logo container
    this.logoContainer = null
    // objects
    this.logoTween = null
    this.logoContainerTwo = null
  }

  componentDidMount() {
    // create logo tween
    this.logoTween = new TimelineLite({ paused: false })
      .from(this.logoContainer, 2, { y: 200 })
      .from(
        this.logoContainerTwo,
        2,
        {
          y: -200,
        },
        "-=2"
      )
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.typistContainer}>
          <div className={styles.typist}>
            <FPText />
          </div>
        </div>
        <div ref={div => (this.logoContainer = div)} className={styles.photo}>
          <BackgroundPhoto />
        </div>
        <div className={styles.containerAnimation}>
          <div className={styles.animation}>
            <Animation />
          </div>
        </div>
        <div
          ref={div => (this.logoContainerTwo = div)}
          className={styles.photoEdge}
        >
          <BackgroundPhoto />
        </div>
        <div className={styles.box}></div>
        <div className={styles.main}>
          <MainNavigation />
        </div>
        <div className={styles.social}>
          <SocialNavigation />
        </div>
      </div>
    )
  }
}

export default indexPage