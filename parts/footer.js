import styled from "styled-components";

import Links from "./../parts/links";

const StyledFooter = styled.footer`
  padding: 1em 2em;

  p {
    font-size: 75%;
  }
  
`;

export default () => (
  <StyledFooter>
    <Links />
    <p>
      Made with <a href="https://github.com/zeit/next.js/">Next.js</a>.
    </p>
  </StyledFooter>
);
