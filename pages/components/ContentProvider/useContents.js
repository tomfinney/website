import { useContext } from "react";
import { ContentContext } from "./ContentProvider";

export default function useContents() {
  return useContext(ContentContext);
}
