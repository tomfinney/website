import iunfetch from "isomorphic-unfetch";

export function fetch(path) {
  const base = process.env.HOST || "http://localhost:3000"

  return iunfetch(`${base}${path}`);
}
