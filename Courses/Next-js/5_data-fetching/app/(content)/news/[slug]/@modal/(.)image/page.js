import { getNewsItem } from "@/lib/news";

import ModalBackdrop from "@/app/components/modal-backdrop";

export default async function InterceptedImagePage({ params }) {
  // Extract slug from pathname to avoid useParams hook
  let slug = params.slug;

  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    return null;
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
