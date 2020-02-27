import styled from "styled-components";

const StyledQuote = styled.blockquote`
    margin: 0;

    p {
      padding: 15px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }

    p::before {
      content: "“";
    }
    
    p::after {
        content: "”";
    }
`;

export default StyledQuote;
