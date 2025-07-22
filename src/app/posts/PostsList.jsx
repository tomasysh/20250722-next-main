"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Hero from "@/components/Hero";
import PageContainer from "@/components/PageContainer";

export default function PostsList() {
  const router = useRouter();
  const search = useSearchParams();
  const onQueryTag = search.get("tag") ?? "all";

  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  // 取得文章與標籤
  useEffect(() => {
    const tag = search.get("tag") ?? "all";
    setLoading(true);
    fetch(`/api/posts?tag=${encodeURIComponent(tag)}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data || []);
        // 動態產生所有標籤
        const allTags = Array.from(
          new Set((data || []).flatMap((post) => post.tags))
        );
        setTags(allTags);
        setLoading(false);
      })
      .catch(() => {
        setPosts([]);
        setTags([]);
        setLoading(false);
      });
  }, [search]);

  const goToTag = (tag) => {
    const params = new URLSearchParams(search);
    params.set("tag", tag);
    router.push("/posts?" + params.toString(), { scroll: false });
  };

  return (
    <>
      <Hero title="Articles" img="post-bg" />
      <PageContainer>
        {/* tag 按鈕列 */}
        <div style={{ marginBottom: 24 }}>
          <button
            key="all"
            style={{ marginRight: 8, marginBottom: 8 }}
            className={`btn btn-sm ${
              onQueryTag === "all" ? "btn-primary" : "btn-outline-secondary"
            }`}
            onClick={() => goToTag("all")}
          >
            全部
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              style={{ marginRight: 8, marginBottom: 8 }}
              className={`btn btn-sm ${
                onQueryTag === tag ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => goToTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        {/* 文章列表 */}
        {loading ? (
          <div>載入中...</div>
        ) : posts.length === 0 ? (
          <div className="text-center">
            <h4>目前沒有文章</h4>
            <p>請稍後再來查看更多內容。</p>
          </div>
        ) : (
          posts.map((post, idx) => (
            <div key={post._id || idx}>
              <div className="post-preview">
                <a href={`/posts/${post._id || post.slug}`}>
                  <h2 className="post-title">{post.title || "無標題"}</h2>
                  {post.subTitle && (
                    <h3 className="post-subtitle">{post.subTitle}</h3>
                  )}
                </a>
                <p className="post-meta">
                  Posted by
                  <a href="#!">
                    {typeof post.author === "object" && post.author?.name
                      ? post.author.name
                      : typeof post.author === "string"
                      ? post.author
                      : "Unknown Author"}
                  </a>
                  on{" "}
                  {post.createdAt
                    ? new Date(post.createdAt).toLocaleDateString("zh-TW")
                    : "Unknown Date"}
                </p>
              </div>
              {idx < posts.length - 1 && <hr className="my-4" />}
            </div>
          ))
        )}
        {/* <!-- Pager--> */}
        <div className="d-flex justify-content-end mb-4">
          <a className="btn btn-primary text-uppercase" href="#!">
            Older Posts →
          </a>
        </div>
      </PageContainer>
    </>
  );
}
