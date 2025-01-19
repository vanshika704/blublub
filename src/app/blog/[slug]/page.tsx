// src/app/blog/[slug]/page.tsx
import { GetStaticPaths, GetStaticProps } from 'next';


type Post = {
  id: number;
  title: string;
  content: string;
};

type BlogPostProps = {
  post: Post;
};

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl text-center mt-10">{post.title}</h1>
      <p className="text-lg text-center mt-4">{post.content}</p>
    </div>
  );
}

// Fetch data for each blog post at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  const post = {
    id: 1,
    title: `Post for ${slug}`,
    content: `Content for the blog post with slug: ${slug}`,
  };

  return {
    props: {
      post,
    },
  };
};

// Define dynamic routes for blog posts
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = ['first-post', 'second-post'];

  const paths = slugs.map(slug => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false, // Show 404 if a post is not found
  };
};
