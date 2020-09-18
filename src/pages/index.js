import React from "react"

import Layout from "../components/layout"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Hero from "../components/hero"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default IndexPage
