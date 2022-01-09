import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h2>
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </h2>
      <div className="underline"></div>
    </div>
  )
}

export default styled(Title)`
  text-transform: capitalize;
  margin-bottom: 2rem;
  h2 {
    text-align: center;
    letter-spacing: 7px;
  }
  .title {
    color: var(--titleColor);
  }
  .subtitle {
    color: var(--titleColor);
  }
  span {
    display: block;
    font-family: var(--titleFontFamily);
    font-size: var(--ms-large-3);
    font-weight: var(--titleFontWeight);
  }
  .underline {
    width: 5rem;
    height: 0.2rem;
    background: var(--primaryColor);
    margin: 0.5rem auto;
  }
  @media (min-width: 576px) {
    h2 {
      var(--ms-small-3);
    }
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
