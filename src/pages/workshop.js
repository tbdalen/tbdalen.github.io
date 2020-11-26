import React from "react"

import styles from "./workshop.module.scss"

import $ from "jquery"

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
    hammertime.get("swipe").set({ direction: Hammer.DIRECTION_ALL })
    hammertime.on("swipedown", e => {
      console.log("HAMMERTIME: TAP")
      navigate("/lounge")
    })
    $(document).bind("mousewheel", function(e) {
      var delta = e.originalEvent.wheelDelta
      //console.log("The mouse delta is : " + delta)
      if (delta < 0) {
        console.log("under 0")
      } else if (delta > 0) {
        console.log("over 0")
      } else {
        console.log("0")
      }
    })
    window.onscroll = function(e) {
      console.log("hey")
    }
  }
  render() {
    return (
      <Layout>
        <div id="myElement" className={styles.card}>
          {this.props.children}
          <div className={styles.test}>Cyrene</div>
        </div>
      </Layout>
    )
  }
}
export default WorkShopPage
