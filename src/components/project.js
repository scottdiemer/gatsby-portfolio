import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaBroadcastTower, FaGithub } from "react-icons/fa"

const Project = ({
  title,
  description,
  url,
  githubUrl,
  technologies,
  imageData,
  className,
}) => {
  const image = getImage(imageData)
  return (
    <article className={className}>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <GatsbyImage
          className="image"
          image={image}
          alt={title}
          placeholder="TRACED_SVG"
        />
      </a>
      <div className="description">
        <h3 className="title">{title}</h3>
        <p>{description}</p>
        <div class="button-container">
          <a
            href={url}
            className="icon-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live site link for ${title} project`}
          >
            <FaBroadcastTower className="icon" size="1.5rem" />
            Live Site
          </a>
          <a
            href={githubUrl}
            className="icon-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Github link for ${title} project`}
          >
            <FaGithub className="icon" size="1.5rem" />
            Github
          </a>
        </div>
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
