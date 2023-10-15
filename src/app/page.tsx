import FeaturedPosts from "@/components/FeaturedPosts"
import Profile from "@/components/Profile"
import UserLikePosts from "@/components/UserLikePosts"

export default function Home() {
  return (
    <section>
      <h1 className="text-white">홈페이지</h1>
      <Profile/>
      <FeaturedPosts/>
      <UserLikePosts/>
    </section>
  )
}
