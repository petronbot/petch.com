import Link from "next/link";

export default () => (
  <ul className="links">
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/talks.html">Talks</Link>
    </li>
    <li>
      <Link href="mailto:petra@gulicher.com" className="external">Email &#8599;</Link>
    </li>
    <li>
      <Link href="https://github.com/petronbot" className="external">GitHub &#8599;</Link>
    </li>
    <li>
      <Link href="https://www.linkedin.com/in/petragulicher/" className="external">LinkedIn &#8599;</Link>
    </li>
  </ul>
);
