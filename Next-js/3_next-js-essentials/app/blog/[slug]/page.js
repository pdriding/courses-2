export default function PostPage({ params }) {
  const { slug } = params; // e.g. "post-1"
  // fetch post by slug here or render based on slug
  return (
    <main>
      <h1>Blog Post</h1>
      <p>Slug: {slug}</p>
    </main>
  );
}
