import { readFileSync } from "fs";

const blogs = [
  readFileSync(__dirname + "/../markdown/blogs/01_new_website.md", "utf-8")
];

export default blogs;
