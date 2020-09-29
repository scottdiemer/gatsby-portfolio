import React from "react"
import HeroImage from "../images/hero.inline.svg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="call-to-action">
        <h1>Testing!</h1>
      </div>
      <div className="hero-image-wrapper">
        <HeroImage />
      </div>
    </section>
  )
}

export default Hero
