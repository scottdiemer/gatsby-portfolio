import React from "react"
import HeroImage from "../images/hero.inline.svg"
import * as styles from "../css/hero.module.css"

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.callToAction}>
        <h1>
          Hi, my name is Scott Diemer
          <span className={styles.subtitle}>I'm a Web Developer!</span>
        </h1>
      </div>
      <div className={styles.heroImageWrapper}>
        <HeroImage />
      </div>
    </section>
  )
}

export default Hero
