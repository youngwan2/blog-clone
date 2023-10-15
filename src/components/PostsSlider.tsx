"use client";

import { Post } from "@/service/posts";
import Carousel from "react-multi-carousel";
import Link from "next/link";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

export default function PostsSlider({ posts }: { posts: Post[] }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
    >
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
    </Carousel>
  );
}
