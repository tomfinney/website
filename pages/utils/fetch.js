import iunfetch from "isomorphic-unfetch";

const host =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_HOST
    : process.env.DEV_HOST;

export function fetch(path) {
  return iunfetch(`${host}${path}`);
}
