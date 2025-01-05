export async function GET() {
  const blogs = [
    { id: 1, title: 'Blog Post 1' },
    { id: 2, title: 'Blog Post 2' },
  ];

  return new Response(JSON.stringify(blogs), { status: 200 });
}
