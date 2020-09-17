import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { FaGithub } from "react-icons/fa"

const Project = ({
  slug,
  title,
  description,
  githubUrl,
  technologies,
  imageData,
  className,
}) => (
  <article className={className}>
    <Link to={`/${slug}/`}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <div className="description">
      <h2>
        <Link to={`/${slug}/`}>{title}</Link>
      </h2>
      <p>{description}</p>
      <p>
        <Link to={`/${slug}/`}>View this project &rarr;</Link>
      </p>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <div className="technology-wrapper">
        <div className="technology-title">Technologies</div>
        <div className="technology-badges">
          {technologies.map(tech => {
            return <span className="technology">{tech}</span>
          })}
        </div>
      </div>
    </div>
  </article>
)

export default styled(Project)`
  box-shadow: var(--lightShadow);
  border-radius: 8px;
  text-align: center;
  margin: 1rem;
  .description {
    padding: 1rem;
  }
  img {
    border-radius: 8px 8px 0 0;
  }
  h2 {
    font-size: 1.5rem;
  }
  a {
    color: var(--mainBlack);
  }
`
