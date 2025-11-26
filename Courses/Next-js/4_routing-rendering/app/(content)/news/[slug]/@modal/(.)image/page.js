"use client";

import { DUMMY_NEWS } from "@/dummy-news";

export default function InterceptedImagePage({ params }) {
  // Extract slug from pathname to avoid useParams hook
  let slug = null;

  if (typeof window !== "undefined" && params) {
    slug = params.slug;
  }

  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={() => window.history.back()}>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </div>
  );
}
