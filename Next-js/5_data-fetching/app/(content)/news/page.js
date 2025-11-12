import NewsList from "@/app/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <div>
      <h1>News Page</h1>
      <NewsList news={news} />;
    </div>
  );
}
