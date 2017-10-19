import fetch from 'node-fetch'
import styled, { injectGlobal } from 'styled-components'

import Timeline from './../parts/timeline'
import markerData from './data.js'

injectGlobal`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 1em 2em;
    background-color: #EFEFEF;
    font-size: 4.5vw;
    line-height: 1.35;

    @media (min-width: 30em) {
      font-size: 24px;
    }
    @media (min-width: 75em) {
      max-width: 35em;
    }
  }

  i {
    vertical-align: bottom;
    margin-right: .3em;
  }
`

const Links = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    margin-right: .5em;
    font-size: 75%;
  }

  li a {
    display: block;
    color: rgba(0, 0, 0, .6);
    background-color: seashell;
    border-bottom: 3px solid transparent;
    padding: .4em .5em .25em .25em;
    text-decoration: none;
  }

  li a:hover {
    border-color: peachpuff;
    color: rgba(0, 0, 0, .7);
  }
`

const Footer = styled.footer`
  margin: 2em 0;
  border-top: 1px solid rgba(0, 0, 0, .2);
  padding-top: .5em;
  font-size: 75%;
`

const Page = ({ stars }) =>
  <div>
    <h1 className='title'>Petra Gulicher - Web Developer</h1>
    <p>Full stack web developer from Sydney, Australia. Experience in leading technical teams and scrum coaching. Combining 10 years of professional experience and continuous learning in web technologies.</p>
    <Links>
      <li><a href='mailto:p.gulicher@gmail.com'><i className="material-icons">perm_identity</i>Email</a></li>
      <li><a href='https://github.com/petronbot'><i className="material-icons">code</i>GitHub</a></li>
      <li><a href='http://twitter.com/petronbot'><i className="material-icons">chat_bubble_outline</i>Twitter</a></li>
    </Links>
    <h2>Brief resumé</h2>
    <Timeline markers={markerData} />
    <Footer>
      <small>Made with <a href="https://github.com/zeit/next.js/">Next.js</a>.</small>
    </Footer>
  </div>

export default Page
