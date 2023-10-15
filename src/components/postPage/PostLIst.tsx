"use client";

import { useState } from "react";
import { Post } from "@/service/posts";
import Link from "next/link";
import Image from "next/image";
import Category from "./Category";
export default function PostList({ posts }: { posts: Post[] }) {

  const Default_ALL_POSTS ="all"
  const [selectedPath, setSelectedPath] = useState(Default_ALL_POSTS);

  const filterPosts = posts.filter((post) => {
    switch (selectedPath) {
      case "all": {
        return post;
      }
      case "frontend": {
        return post.category === "frontend";
      }
      case "backend": {
        return post.category === "backend";
      }
      case "my story": {
        return post.category === "my story";
      }
      case "javascript": {
        return post.category === "javascript";
      }
    }
  });

  return (
    <section className="flex">
      <ul className="flex flex-wrap">
        {(filterPosts||posts).map((post, i) => {
          return (
            <li key={post.path} className="mr-5 mt-5 w-80">
              <ul>
                <li>
                  <Link href={`/posts/${post.path}`}>
                    <Image
                      className="max-w-full m-auto"
                      src={`/images/${post.path}.png`}
                      alt="postImage"
                      width={250}
                      height={250}
                    ></Image>
                  </Link>
                </li>
                <li className="text-center">{post.date}</li>
                <li className="text-center">
                  <strong>{post.title}</strong>
                </li>
                <li className="text-center">{post.description}</li>
                <li className="text-center">{post.category}</li>
              </ul>
            </li>
          );
        })}
      </ul>
      <Category setSelected={setSelectedPath} selected={selectedPath} />
    </section>
  );
}
