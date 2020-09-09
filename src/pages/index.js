import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"

const IndexPage = () => {
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
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges

  return (
    <Layout>
      {projects.map(({ node: project }) => {
        const title = project.title
        const description = project.description
        const imageData = project.image.childImageSharp.fluid
        const slug = project.slug

        return (
          <ProjectPreview
            title={title}
            description={description}
            imageData={imageData}
            slug={slug}
          />
        )
      })}
    </Layout>
  )
}

export default IndexPage
