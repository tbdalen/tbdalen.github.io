import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import styles from "./index.module.scss"

import Layout from "../components/layout"
import FPText from "../components/typist/typist"
import Avatar from "../components/avatar/avatar"
import Background from "../components/background/background"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class indexPage extends Component {
  constructor(props) {
    super(props)
    // logo container
    this.logoContainer = null
    this.logoContainer2 = null
    this.logoContainer3 = null
    this.logoContainer4 = null
    this.logoContainer5 = null
    this.logoContainer6 = null

    // objects
    this.logoTrigger = null
    if (typeof window !== `undefined`) {
      this.tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: this.logoTrigger, // start the animation when ".box" enters the viewport (once)
          scrub: true,
          markers: true,
        },
      })
    }
  }

  componentDidMount() {
    // create logo tween
    this.tl
      .to(this.logoContainer4, {
        height: "100%",
        autoAlpha: 1,
        duration: 0.5,
      })
      .to(
        this.logoContainer,
        {
          y: -200,
          duration: 1,
        },
        "-=0.5"
      )
      .to(
        this.logoContainer2,
        {
          y: 2000,
          duration: 1,
        },
        "-=1"
      )
      .to(this.logoContainer3, {
        duration: 1,
      })
      .fromTo(
        this.logoContainer5,
        {
          y: 5000,
          opacity: 1,
          autoAlpha: 0,
        },
        { y: 0, autoAlpha: 1, duration: 1 },
        "-=2"
      )
      .fromTo(
        this.logoContainer6,
        {
          y: -5000,
          opacity: 1,
          autoAlpha: 0,
        },
        { y: 0, autoAlpha: 1, duration: 1 },
        "-=2"
      )
  }

  render() {
    return (
      <div className={styles.container}>
        <Layout>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Tarjei B. Dalen</title>
            <link rel="canonical" href="https://tbdalen.github.io" />
          </Helmet>
          <div className={styles.typistContainer}>
            {this.props.children}
            <div
              ref={div => (this.logoContainer3 = div)}
              className={styles.typist}
            >
              <FPText />
            </div>
          </div>
          <div className={styles.box}></div>
          <div
            ref={div => (this.logoTrigger = div)}
            className={styles.trigger}
          ></div>
          <div ref={div => (this.logoContainer = div)} className={styles.photo}>
            <Avatar />
          </div>
          <div
            ref={div => (this.logoContainer5 = div)}
            className={styles.photo2}
          >
            <Background />
          </div>
          <div
            ref={div => (this.logoContainer6 = div)}
            className={styles.photoEdge2}
          >
            <Background />
          </div>
          <div
            ref={div => (this.logoContainer2 = div)}
            className={styles.photoEdge}
          ></div>
          <div
            ref={div => (this.logoContainer4 = div)}
            className={styles.color}
          ></div>
        </Layout>

        <div ref={div => (this.logoTrigger = div)} className={styles.trigger}>
          dfsdf
        </div>
        <div className={styles.down}>fdsfsdf</div>
      </div>
    )
  }
}

export default indexPage
