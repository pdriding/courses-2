import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function ImagePage({ params }) {
  const newsItemSlug = params.slug;

  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

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
