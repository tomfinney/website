import { useContext } from "react";
import { ContentContext } from "./ContentProvider";

export default function useContent() {
  return useContext(ContentContext);
}
