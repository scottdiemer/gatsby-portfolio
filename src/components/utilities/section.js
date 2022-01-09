import styled from "styled-components"

const Section = styled.section`
  margin: 0 auto;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 2rem 4rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 4rem 8rem;
  }

  @media screen and (min-width: 1500px) {
    padding: 4rem 16rem;
  }
`
export default Section
