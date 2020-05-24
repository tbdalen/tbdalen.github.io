import React from "react"

import Typist from "react-typist"
import "react-typist/dist/Typist.css"
import styles from "./typist.module.scss"

const FPText = () => {
  return (
    <React.Fragment>
      <h1 className={styles.text}>
        <Typist
          avgTypingDelay={70}
          startDelay={200}
          cursor={{
            show: true,
            blink: true,
            element: "|",
            hideWhenDone: false,
            hideWhenDoneDelay: 1000,
          }}
        >
          <Typist.Delay ms={1000} />
          Welcome to my humble abode.
          <Typist.Delay ms={2000} />
          <Typist.Backspace count={27} delay={200} />
          My name is Tarjei and I like to build stuff
        </Typist>
      </h1>
    </React.Fragment>
  )
}

export default FPText
