import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-toc">
      <strong>Sesha</strong>
      <br />
      <em>Code, Lift, Play, Repeat</em>
      <ul>
        <li>
          <Link href="/labs" id="wd-toc-home">
            Home
          </Link>
        </li>
        <li>
          <Link href="/labs/lab1" id="wd-toc-lab1">
            Lab 1
          </Link>
        </li>
        <li>
          <Link href="/labs/lab2" id="wd-toc-lab2">
            Lab 2
          </Link>
        </li>
        <li>
          <Link href="/labs/lab3" id="wd-toc-lab3">
            Lab 3
          </Link>
        </li>
        <li>
          <Link href="/kambaz" id="wd-toc-kambaz">
            Kambaz
          </Link>
        </li>
        <li>
          <Link href="/book/ch1" id="wd-toc-book-link">
            Chapter 1
          </Link>
        </li>
      </ul>
    </div>
  );
}