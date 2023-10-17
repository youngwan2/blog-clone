"use client"

import { Post } from "@/service/posts";
import { useRouter } from "next/navigation";


function NextPostButton({ path,posts }: { path: string,posts:Post[] }) {

    const router = useRouter()

    // 해당 포스트의 인덱스를 찾는다.
    const currentPostIndex = posts.findIndex((post) => {
        return post.path === path
    })

    // 해당 포스트의 인덱스 -1, +1 이 되는 게시글만 필터한다.
    const nextPost = posts[currentPostIndex + 1]
    const prevPost = posts[currentPostIndex - 1]


    return (
        <article className="mx-auto text-white w-3/5 text-center">
            <button className="bg-black p-5 w-72 pt-5" onClick={() => {
                router.push(`/posts/${prevPost.path}`)
            }}>{prevPost.title}</button>
            <button className="bg-blue-600 w-72 pt-5" onClick={() => {
                router.push(`/posts/${nextPost.path}`)
            }}>{nextPost.title}</button>
        </article>
    );
}

export default NextPostButton;