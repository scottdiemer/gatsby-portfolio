import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Project from "../components/project"
import Title from "../components/title"
import styles from "../css/projects.module.css"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            url
            description
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
      }
    }
  `)

  const projects = data.allProjectsJson.edges

  return (
    <section className={styles.projects}>
      <Title title="projects" />
      <div className={styles.center}>
        {projects.map(({ node: project }, index) => {
          const title = project.title
          const description = project.description
          const imageData = project.image.childImageSharp.fluid
          const slug = project.slug
          const githubUrl = project.githubUrl
          const technologies = project.technologies

          return (
            <Project
              className={styles.project}
              key={index}
              title={title}
              description={description}
              imageData={imageData}
              slug={slug}
              githubUrl={githubUrl}
              technologies={technologies}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
