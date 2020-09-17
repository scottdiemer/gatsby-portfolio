import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      technologies
      githubUrl
    }
  }
`

const ProjectTemplate = ({ data: { projectsJson: project } }) => (
  <Layout>
    <pre>{JSON.stringify(project, null, 2)}</pre>
  </Layout>
)

export default ProjectTemplate
