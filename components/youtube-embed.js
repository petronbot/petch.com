export default ({ src }) => (
  <iframe
    className="embed"
    src={src}
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);
