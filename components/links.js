import Link from "next/link";

export default () => (
  <ul className="links">
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/talks.html">Talks</Link>
    </li>
    <li>/</li>
    <li>
      <Link href="mailto:petra@gulicher.com">Email &rarr;</Link>
    </li>
    <li>
      <Link href="https://github.com/petronbot">GitHub &rarr;</Link>
    </li>
  </ul>
);
