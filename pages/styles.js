export default `
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 1em 2em;
  background-color: #EFEFEF;
  font-size: 4.5vw;
  line-height: 1.25;
}
i {
  vertical-align: bottom;
  margin-right: .3em;
}
.links {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.links li {
  display: inline-block;
  margin-right: .5em;
  font-size: 75%;
}
.links li a {
  display: block;
  color: rgba(0, 0, 0, .6);
  background-color: seashell;
  border-bottom: 3px solid transparent;
  padding: .4em .5em .25em .25em;
  text-decoration: none;
}
.links li a:hover {
  border-color: peachpuff;
  color: rgba(0, 0, 0, .7);
}
.footer {
  margin: 2em 0;
  border-top: 1px solid rgba(0, 0, 0, .2);
  padding-top: .5em;
  font-size: 75%;
}
@media (min-width: 30em) {
  body {
    font-size: 24px;
  }
}
@media (min-width: 75em) {
  body > * {
    max-width: 35em;
  }
}
`
