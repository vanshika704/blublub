interface DocsProps {
  params: { slug?: string[] }; // Optional array of strings
}

// Async function to handle params
export default async function Docs({ params }: DocsProps) {
  // If `slug` is undefined, we default to "Home"
  const path = params?.slug?.length ? params.slug.join('/') : 'Home';

  return (
    <main>
      <h1>📚 Current Path: {path}</h1>
    </main>
  );
}
