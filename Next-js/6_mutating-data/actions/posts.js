"use server";

import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  let errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title must be at least 5 characters long.");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content must be at least 10 characters long.");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required.");
  }

  if (errors.length > 0) {
    return { errors };
  }
  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error("Image upload failed. Please try again.");
  }

  await storePost({
    imageUrl: imageUrl,
    title,
    content,
    userId: 1,
  });

  revalidatePath("/feed", "layout");
  redirect("/feed");
}

export async function togglePostsLikeStatus(postId) {
  await updatePostLikeStatus(postId, 2);
  revalidatePath("/feed", "layout");
}
