import { getAllPosts } from "@/service/posts"
import PostList from "@/components/postPage/postLIst";
export default function PostsPage() {

    const posts = getAllPosts();

    
    return (
        <section>
            <h2>Posts</h2>
            <PostList posts={posts}/>

        </section>
    )
}