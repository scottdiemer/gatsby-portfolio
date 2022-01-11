import React from "react"
import Title from "./utilities/title"
import Section from "./utilities/section"
import * as styles from "../css/about.module.css"

const About = () => {
  return (
    <Section id="about" className={styles.about}>
      <Title title="About Me" />
      <p className={styles.description}>
        👋Hi, I’m Scott! A Front-End Developer based in Orlando, Florida. I have
        a passion for building web applications that are performant, accessible,
        and offer a great overall user experience! I love learning, so you’ll
        always find me working on random side projects, watching coding videos,
        listening to podcasts and reading articles. I also participate in the
        #100DaysOfCode challenge, which I’ve completed multiple times.
      </p>
      <p className={styles.description}>
        My coding journey began when the internet was still in it’s infancy. I
        had seen a person on AOL that was using a app that they wrote to knock
        someone offline. At the time, I just remember being amazed that
        something like this was even possible! So I started asking around to
        find out how it was done. Most of these apps at the time were written in
        Visual Basic and were accessing DLL files to do the lower level
        functionality. This is when I decided to go down the path of learning to
        code. I was able to build the type of app that had impressed me so much.
        This is when I knew I was hooked! I enrolled at Winter Park Tech in the
        Business Computer Programming course with involved 600+ hours and
        involved learning languages such as Visual Basic and C++.
      </p>
    </Section>
  )
}

export default About
