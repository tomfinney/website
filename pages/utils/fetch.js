import iunfetch from "isomorphic-unfetch";

const host = process.env.HOST ? process.env.HOST : "http://localhost";
const port = process.env.PORT ? process.env.PORT : 3000;

export function fetch(path) {
  return iunfetch(`${host}:${port}${path}`);
}
