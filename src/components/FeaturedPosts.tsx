
import { getFeaturedPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";
export default async function FeaturedPosts() {

    // 1. 모든 포스트 데이터를 읽어와야 한다.
    const posts = getFeaturedPosts()

    // 2. 모든 포스트 데이터를 보여준다.
  return <section>

    <h2 className="text-xl font-bold">선택된 게시글</h2>
    <PostsGrid posts={posts}/>
  </section>;
}
