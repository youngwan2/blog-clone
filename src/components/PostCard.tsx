import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
export default function PostCard({posts}:{posts:Post[]}){

    return (
        <ul  className="flex flex-wrap">
        {posts.map((post, i) => {
          return (
            <li key={post.path} className="mr-5 mt-5 w-80">
              <ul>
                <li><Link href={`/posts/${post.path}`}><Image className="max-w-full m-auto" src={`/images/${post.path}.png`} alt="postImage" width={250} height={250}></Image></Link></li>
                <li className="text-center">
                  {post.date}
                </li>
                <li className="text-center">
                  <strong>{post.title}</strong>
                </li>
                <li className="text-center">
                  {post.description}
                </li>
                <li className="text-center">
                  {post.category}
                </li>
              </ul>
            </li>
          );
        })}
      </ul>

    )
}