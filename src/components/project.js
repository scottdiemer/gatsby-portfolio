import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Project = ({ slug, title, description, imageData }) => (
  <article className="project">
    <Link to={`/${slug}/`}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <h2>
      <Link to={`/${slug}/`}>{title}</Link>
    </h2>
    <p>{description}</p>
    <p>
      <Link to={`/${slug}/`}>View this project &rarr;</Link>
    </p>
  </article>
)

export default Project
