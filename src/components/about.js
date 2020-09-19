import React from "react"
import Title from "./title"
import styles from "../css/about.module.css"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="About" subtitle="Me" />
      <p>
        Ipsum adipisicing itaque rerum nisi suscipit tempora Rem voluptates
        delectus reprehenderit atque dolor molestiae Cumque harum unde facere
        maxime esse Quod aspernatur nesciunt optio eligendi consectetur
        Repellendus repellendus culpa accusantium maxime nihil? Et dignissimos
        excepturi itaque sunt eveniet consequatur Illum debitis earum aperiam
        dolor quia debitis. Accusamus iure impedit in.
      </p>
    </section>
  )
}

export default About
