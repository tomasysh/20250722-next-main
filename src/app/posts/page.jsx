"use client";
export const dynamic = "force-dynamic";
import { Suspense } from "react";
import PostsList from "./PostsList";

export default function PostsPage() {
  return (
    <Suspense fallback={<div>載入中...</div>}>
      <PostsList />
    </Suspense>
  );
}
