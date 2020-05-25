import React, { Component } from "react"

import styles from "./index.module.scss"

import Layout from "../components/layout"
import BackgroundPhoto from "../components/photo/photo"
import FPText from "../components/typist/typist"
import Animation from "../components/animation/animation"

import { Helmet } from "react-helmet"
import { TimelineLite, CSSPlugin, AttrPlugin } from "gsap/all"

//without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
const plugins = [CSSPlugin, AttrPlugin]

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
      .from(this.logoContainer, 2, { y: 200, delay: 3 })
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
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>TBD</title>
          <link rel="canonical" href="https://tbdalen.github.io" />
        </Helmet>
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
      </Layout>
    )
  }
}

export default indexPage
