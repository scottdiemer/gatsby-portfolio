import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/project"
import styles from "../css/project-template.module.css"

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

const ProjectTemplate = ({ data: { projectsJson: project } }) => {
  const title = project.title
  const description = project.description
  const url = project.url
  const imageData = project.image.childImageSharp.fluid
  const technologies = project.technologies
  const githubUrl = project.githubUrl

  return (
    <Layout>
      <Project
        className={styles.project}
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
