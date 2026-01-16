import React from "react";
import { useParams, Link } from "react-router-dom";
import { theme } from "../config/theme";
import { blogPosts } from "../data/BlogData";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="text-center py-20">Post not found</div>;
  }

  return (
    <div className={`${theme.background.section} min-h-screen ${theme.layout.sectionPadding}`}>
      <div className={`${theme.layout.containerWidth} mx-auto`}>
        <div className={`${theme.border.default} ${theme.shadow.container} overflow-hidden bg-white`}>
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <span className={`text-sm ${theme.textColors.highlight}`}>{post.category}</span>
            <h1 className={`text-3xl font-bold ${theme.textColors.primary} mb-4`}>{post.title}</h1>
            <p className={`${theme.textColors.secondary} mb-6`}>{post.content}</p>
            <Link
              to="/blogs"
              className={`px-4 py-2 ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.hoverBackground} ${theme.buttonColors.secondaryButton.textColor}`}
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
