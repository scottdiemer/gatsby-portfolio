import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Project from "../components/project"
import Title from "../components/utilities/title"
import Section from "../components/utilities/section"
import * as styles from "../css/projects.module.css"
import "../css/project.css"

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
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
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
    <Section id="projects">
      <Title title="projects" />
      <div className={styles.center}>
        {projects.map(({ node: project }, index) => {
          const title = project.title
          const description = project.description
          const imageData = project.image.childImageSharp.gatsbyImageData
          const slug = project.slug
          const githubUrl = project.githubUrl
          const technologies = project.technologies

          return (
            <Project
              className="project"
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
    </Section>
  )
}

export default Projects
