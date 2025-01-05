// src/app/blog/[id]/page.tsx

'use client';  // This line marks the component as a client-side component

import { usePathname } from 'next/navigation';

const BlogPost = () => {
  const pathname = usePathname();
  const id = pathname?.split('/').pop(); // Extracts the dynamic ID from the URL

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>This is a blog post with the ID: {id}</p>
    </div>
  );
};

export default BlogPost;
