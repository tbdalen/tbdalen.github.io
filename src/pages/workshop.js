import React from "react"

import styles from "./workshop.module.scss"

import Layout from "../components/layout"
import { navigate } from "gatsby"

if (typeof window !== `undefined`) {
  var Hammer = require("hammerjs")
}

class WorkShopPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    const viewerImage = document.getElementById("myElement")
    const hammertime = new Hammer(viewerImage)
    hammertime.on("swipeleft", e => {
      console.log("HAMMERTIME: TAP")
      navigate("/lounge")
    })
  }
  render() {
    return (
      <Layout>
        <div id="myElement" className={styles.card}>
          {this.props.children}
        </div>
      </Layout>
    )
  }
}
export default WorkShopPage
