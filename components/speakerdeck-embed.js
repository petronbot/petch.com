export default ({ src, title }) => (
  <iframe
    src={src}
    title={title}
    className="embed"
    allowfullscreen="true"
    mozallowfullscreen="true"
    webkitallowfullscreen="true"
  />
);
