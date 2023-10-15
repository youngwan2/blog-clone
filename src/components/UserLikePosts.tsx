import { Post, getFeaturedPosts } from "@/service/posts";
import 'react-multi-carousel/lib/styles.css';
import PostsSlider from "./PostsSlider";
export default function UserLikePosts() {
  const posts: Post[] = getFeaturedPosts();
  
  return (
    <section>
      <h2 className="text-xl font-bold  mt-10">
        너가 좋아할지도 모르는 포스트
      </h2>
      <PostsSlider posts={posts}/>
    </section>
  );
}
