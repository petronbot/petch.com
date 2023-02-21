export default ({ src }) => (
  <iframe
    className="embed"
    src={src}
    allowFullScreen={true}
    mozallowfullscreen="true"
    webkitallowfullscreen="true"
  />
);
