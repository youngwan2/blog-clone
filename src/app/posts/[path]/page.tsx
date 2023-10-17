import Image from "next/image";
import MarkdownView from "@/components/MarkdownView";
import { Post, getPostMarkdown,getAllPosts } from "@/service/posts";
import NextPostButton from "@/components/NextPostButton";

type Props = {
  params: {
    path: string;
  };
};
export default async function PostsDetail({ params }: Props) {
  console.log(params.path);

  const posts:Post[] = getAllPosts()
  const { metaData, data } = await getPostMarkdown(params.path);
  const { title, description, date, category, path } = metaData as Post;

  return (
    <section className="w-full px-16 pt-5">
      <article className="max-w-3xl mx-auto">
        <Image
          className="mx-auto"
          src={`/images/${path}.png`}
          alt="postImage"
          width={720}
          height={420}
        />
        <p className="text-right">{date}</p>
        <h2 className="text-xl font-bold py-1.5">{title}</h2>
        <p>{description}</p>
        <span className="bg-orange-400 p-1 rounded-md inline-block">{category}</span>
      </article>
      <hr />
      <MarkdownView markdown={data} />
      <NextPostButton path ={params.path||''} posts={posts}/>
    </section>
  );
}
