"use client";

import { togglePostsLikeStatus } from "@/actions/posts";
import { useOptimistic } from "react";
import Post from "./post";

export default function Posts({ posts }) {
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(
    posts,
    (prevPosts, updatedPostsId) => {
      const updatedPostIndex = prevPosts.findIndex(
        (post) => post.id === updatedPostsId
      );

      if (updatedPostIndex === -1) {
        return prevPosts;
      }

      const updatedPost = {
        ...prevPosts[updatedPostIndex],
      };
      updatedPost.likes = updatedPost.likes + (updatedPost.likes ? -1 : 1);
      updatedPost.isLiked = !updatedPost.isLiked;
      const newPosts = [...prevPosts];
      newPosts[updatedPostIndex] = updatedPost;
      return newPosts;
    }
  );

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  async function updatePost(postId) {
    updateOptimisticPosts(postId);
    await togglePostsLikeStatus(postId);
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} action={updatePost} />
        </li>
      ))}
    </ul>
  );
}
