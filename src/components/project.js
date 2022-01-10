import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithub } from "react-icons/fa"

const Project = ({
  title,
  description,
  githubUrl,
  technologies,
  imageData,
  className,
}) => {
  console.log("imageData: ", imageData)
  const image = getImage(imageData)
  return (
    <article className={className}>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <GatsbyImage className="image" image={image} alt={title} />
      </a>
      <div className="description">
        <h3 className="title">{title}</h3>
        <p>{description}</p>
        <a
          href={githubUrl}
          className="github-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Github link for ${title} project`}
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
}

export default Project
