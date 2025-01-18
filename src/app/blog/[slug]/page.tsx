// src/app/blog/[slug]/page.tsx

"use client"; // This directive enables the use of client-side features like useParams

import { useParams } from 'next/navigation';

export default function BlogPost() {
  const { slug } = useParams(); // Get the dynamic part of the URL

  return (
    <div className="h-screen bg-neutral-900">
      <h1 className="text-4xl text-center mt-10">Blog Post: {slug}</h1>
      <p className="text-lg text-center mt-4">Content for the blog post will go here.</p>
    </div>
  );
}
