import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>This is the News Page</h1>
      <ul>
        <li>
          <Link href="/news/Nextjs-is-cool">NextJS is cool</Link>
        </li>
        <li>
          <Link href="/news/Nextjs-is-awesome">NextJS is awesome</Link>
        </li>
      </ul>
    </>
  );
}
