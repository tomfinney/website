import React from "react";
import Link from "next/link";

interface IProps {
  handle: string;
  children: React.ReactNode;
  className?: string;
}

export function PostLink({ handle, children, className }: IProps) {
  return (
    <Link href="/post/[handle]" as={`/post/${handle}`}>
      <a className={className}>{children}</a>
    </Link>
  );
}
