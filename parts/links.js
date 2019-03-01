import styled from "styled-components";

const StyledLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    margin-right: 0.5em;
    font-size: 75%;
  }

  li a {
    display: block;
    color: rgba(0, 0, 0, 0.6);
    background-color: seashell;
    border-bottom: 3px solid transparent;
    padding: 0.4em 0.5em 0.25em 0.25em;
    text-decoration: none;

    &:hover {
      border-color: peachpuff;
      color: rgba(0, 0, 0, 0.7);
    }

    &.secondary {
      background-color: transparent;
      margin: 0 0.5em;
      padding-right: 0;
      padding-left: 0;
      padding-bottom: 0;
      margin-bottom: 0.25em;
      border-color: currentColor;
    }
  }
`;

export default () => (
  <StyledLinks>
    <li>
      <a className="secondary" href="/talks">
        Talks &amp; slides
      </a>
    </li>
    <li>Or contact me:</li>
    <li>
      <a href="mailto:p.gulicher@gmail.com">
        <i className="material-icons">perm_identity</i>Email
      </a>
    </li>
    <li>
      <a href="https://github.com/petronbot">
        <i className="material-icons">code</i>GitHub
      </a>
    </li>
    <li>
      <a href="http://twitter.com/petronbot">
        <i className="material-icons">chat_bubble_outline</i>Twitter
      </a>
    </li>
  </StyledLinks>
);
