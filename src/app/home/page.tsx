import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to the Blogging Platform!</h1>
      <p>Check out our latest blogs:</p>
      <ul>
        <li>
          <Link href="/blog/1">Blog Post 1</Link>
        </li>
        <li>
          <Link href="/blog/2">Blog Post 2</Link>
        </li>
      </ul>
    </main>
  );
}
