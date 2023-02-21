import Link from "next/link";

export default () => (
  <ul className="links">
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/talks">Talks</Link>
    </li>
    <li>
      <Link href="mailto:petra@gulicher.com">Email</Link>
    </li>
    <li>
      <Link href="https://github.com/petronbot">GitHub</Link>
    </li>
    <li>
      <Link href="http://twitter.com/petronbot">Twitter</Link>
    </li>
  </ul>
);
