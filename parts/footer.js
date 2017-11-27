import styled from "styled-components";

const StyledFooter = styled.footer`
  margin: 2em 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 0.5em;
  font-size: 75%;
`;

export default () => (
  <StyledFooter>
    <small>
      <a href="/">Home</a> | <a href="/slides">Slides</a>
      <br />
      Made with <a href="https://github.com/zeit/next.js/">Next.js</a>.
    </small>
  </StyledFooter>
);
