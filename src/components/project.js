import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
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
      <Image className="image" fluid={imageData} alt={title} />
    </Link>
    <div className="description">
      <h5>
        <Link className="title" to={`/${slug}/`}>
          {title}
        </Link>
      </h5>
      <p>{description}</p>
      <a
        href={githubUrl}
        className="github-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size="1.5rem" />
      </a>
    </div>
    <div className="technology-wrapper">
      <div className="technology-title">Technologies</div>
      <div className="technology-badges">
        {technologies.map((tech, index) => {
          return (
            <span key={index} className="technology">
              {tech}
            </span>
          )
        })}
      </div>
    </div>
  </article>
)

export default Project
