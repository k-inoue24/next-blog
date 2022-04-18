import path from "path";
import fs from "fs";
import matter from "matter";

const postsDirectory = patj.join(process.cwd(), "posts");


export function getPostsDate() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return  {
      id,
      ...matterResult
    }
  })
}
