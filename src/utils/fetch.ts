import iunfetch from "isomorphic-unfetch";

export function fetch(path) {
  return iunfetch(`${process.env.HOST}${path}`);
}
