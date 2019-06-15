import iunfetch from "isomorphic-unfetch";

const host = process.env.HOST ? process.env.HOST : "http://localhost:3000";

export function fetch(path) {
  return iunfetch(`${host}${path}`);
}
