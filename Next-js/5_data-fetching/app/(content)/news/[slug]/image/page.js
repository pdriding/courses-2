import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";

export default async function ImagePage({ params }) {
  const newsItemSlug = params.slug;

  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <h1>helllo</h1>
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
