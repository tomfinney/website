import iunfetch from "isomorphic-unfetch";

export function fetch(path: string) {
  const base = process.env.SERVER_URL || "http://localhost:3000"
  return iunfetch(`${base}${path}`);
}
