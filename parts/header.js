import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 0 2em;

  a {
    color: black;
    text-decoration: none;
    transition: color .2s ease-in-out;

    &:hover {
      color: rgba(0,0,0,0.6);
    }
  }
`;

export default ({ children }) => (
  <StyledHeader>
    <h1><a href="/">Petra Gulicher - Web Developer</a></h1>
  </StyledHeader>
);
