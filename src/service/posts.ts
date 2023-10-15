const { readFile } = require("fs/promises");
const path = require("path");
const posts = require("../blog/data/posts");

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export function getFeaturedPosts() {
  const data:Post[] = posts;

  return data.sort((a, b) => (a > b ? -1 : 1)).filter((post)=>{
    return post.featured === true
  })
}
export function getAllPosts() {
  const data: Post[] = posts;

  return data.sort((a, b) => (a > b ? -1 : 1));
}

export async function getPostMarkdown(fileName:string) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "blog/data",
    "posts",
    `${fileName}.md`
  );
  const data = await readFile(filePath, { encoding: "utf8" });
  const metaData =  getAllPosts().find((post)=>{ return post.path === fileName})

  return {metaData,data};
}

