import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blogging Platform</title>
      </head>
      <body>
        <nav>
          <Link href="/"></Link>
          <Link href="/docs"></Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
