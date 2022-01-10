import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/project"

export const query = graphql`
  query ($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      image {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
      technologies
      githubUrl
    }
  }
`

const ProjectTemplate = ({ data: { projectsJson: project } }) => {
  console.table(project)
  const title = project.title
  const description = project.description
  const url = project.url
  const imageData = project.image.childImageSharp.gatsbyImageData
  const technologies = project.technologies
  const githubUrl = project.githubUrl

  return (
    <Layout>
      <Project
        title={title}
        description={description}
        url={url}
        imageData={imageData}
        githubUrl={githubUrl}
        technologies={technologies}
      />
    </Layout>
  )
}

export default ProjectTemplate
