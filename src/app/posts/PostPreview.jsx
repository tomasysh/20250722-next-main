const PostPreview = ({ post }) => {
  return (
    <div className="post-preview">
      <a href="post.html">
        <h2 className="post-title">{post.title}</h2>
        {/* 有些文章有 subTilte, 有些則沒有(條件渲染) */}
        {post.subTitle && <h3 className="post-subtitle">{post.subTitle}</h3>}
      </a>
      <p className="post-meta">
        Posted by
        <a href="#!">{post.author}</a>
        on {post.date}
      </p>
    </div>
  );
};

export default PostPreview;
