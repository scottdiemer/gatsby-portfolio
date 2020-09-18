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
      <h5>
        <Link className="title" to={`/${slug}/`}>
          {title}
        </Link>
      </h5>
      <p>{description}</p>
      {/* <p> */}
      {/*   <Link to={`/${slug}/`}>View this project &rarr;</Link> */}
      {/* </p> */}
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
        {technologies.map(tech => {
          return <span className="technology">{tech}</span>
        })}
      </div>
    </div>
  </article>
)

export default styled(Project)`
  background-color: var(--secondaryBackgroundColor);
  box-shadow: var(--lightShadow);
  text-align: center;
  margin: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .description {
    height: 100%;
    position: relative;
  }

  .github-icon {
    positon: absolute;
    bottom: 0;
  }

  .title {
    text-decoration: none;
    font-weight: 400;
  }

  technology-wrapper,
  .technology-badges {
    border-radius: 8px;
  }

  .technology-wrapper {
    border-radius: 8px;
  }

  .technology-title {
    border-top: 1px solid var(--darkGray);
    border-bottom: 1px solid var(--darkGray);
    color: var(--offWhite);
    background-color: hsl(255, 0%, 30%);
  }

  .technology-badges {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0.5rem;
    background-color: hsl(255, 0%, 22%);
  }

  .technology-badges .technology {
    background-color: var(--primaryColor);
    margin: 4px;
    padding: 0 0.1rem;
    border-radius: 3px;
    font-size: 0.8rem;
  }

  .github-icon {
    color: var(--offWhite);
    height: 150px;
    width: 150px;
  }
`
