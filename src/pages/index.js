import React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Portfolio" />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default IndexPage
