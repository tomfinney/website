import { readFileSync } from "fs";

const projects = [
  readFileSync(__dirname + "/../markdown/projects/01_new_website.md", "utf-8")
];

export default projects;
