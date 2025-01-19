// get static props is used to 
import { GetStaticProps } from 'next'; // get static props isliye use kiya jaata h taaki static props ko fetch kr sken 
import Link from 'next/link'; //  next link toh pta hi h link krne ko . 

type Post = { // prop validations 
  id: number;
  title: string;
  slug: string;
};

type BlogProps = {
  posts: Post[];
};

export default function Blog({ posts }: BlogProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl text-center mt-10">Blog Posts</h1>
      <div className="mt-6">
        {posts.map(post => ( // posts ko map kiya or post id , post slug use kiye , post slug is for fetching the all pages under blog sections , ie , jo tum  define kroge upar vohi aaja yega 
          <div key={post.id} className="mt-4">
            <Link href={`/blog/${post.slug}`}> 
              <h2 className="text-xl font-bold">{post.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// This function fetches data at build time
export const getStaticProps: GetStaticProps = async () => { // ye function se prop fetch krre h 
  const posts: Post[] = [ // ye list of posts h 
    { id: 1, title: 'First Post', slug: 'first-post' },
    { id: 2, title: 'Second Post', slug: 'second-post' },
  ];

  return {
    props: { // props return krre hain yha 
      posts,
    },
  };
};
