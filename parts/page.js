import styled from "styled-components";

import Hr from "./../parts/hr";
import Footer from "./../parts/footer";
import Header from "./../parts/header";

const StyledBody = styled.div`
  padding: 0 2em;
`;

export default ({ children }) => (
  <div>
    <Header />
    <Hr />
    <StyledBody>{children}</StyledBody>
    <Hr />
    <Footer />
  </div>
);
