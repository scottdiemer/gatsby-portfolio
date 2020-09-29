import React from "react"
import HeroImage from "../images/hero.inline.svg"
import styles from "../css/hero.module.css"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.callToAction}>
        <h1>Hi, my name is Scott Diemer</h1>
        <h1>I'm a Developer!</h1>
      </div>
      <div className={styles.heroImageWrapper}>
        <HeroImage />
      </div>
    </section>
  )
}

export default Hero
