import React from "react"

import styles from "./workshop.module.scss"

import Layout from "../components/layout"

class WorkShopPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className={styles.card}>workshop</div>
      </Layout>
    )
  }
}
export default WorkShopPage
