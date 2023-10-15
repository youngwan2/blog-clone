import { Post } from "@/service/posts";
import PostCard from "./PostCard";

function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <PostCard posts={posts}/>
  );
}

export default PostsGrid;
