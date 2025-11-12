import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
      <p>
        <Link href="/blog/post-1">Post 12</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Post 22</Link>
      </p>
    </main>
  );
}
