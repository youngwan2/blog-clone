
import MarkdownView from "@/components/MarkdownView";
import { getPostMarkdown } from "@/service/posts";


type Props = {
  params: {
    path: string;
  };
};
export default async function PostsDetail({ params }: Props) {
  console.log(params.path);

  const { metaData, data } = await getPostMarkdown(params.path);

  return (
    <section>
      <h2>{metaData?.title}</h2>
      <MarkdownView markdown={data}/>
    </section>
  );
}
