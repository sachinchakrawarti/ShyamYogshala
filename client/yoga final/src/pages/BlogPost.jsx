import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../config/theme";
import { blogPosts } from "../data/BlogData";

const BlogPost = () => {
  return (
    <div className={`${theme.background.section} min-h-screen ${theme.layout.sectionPadding}`}>
      <div className={`${theme.layout.containerWidth} mx-auto`}>
        <h1 className={`text-4xl font-bold ${theme.textColors.primary} mb-8 text-center`}>
          Wellness Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className={`${theme.border.default} ${theme.shadow.container} overflow-hidden bg-white`}>
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className={`text-sm ${theme.textColors.highlight}`}>{post.category}</span>
                <h2 className={`text-xl font-bold ${theme.textColors.primary} mb-2`}>{post.title}</h2>
                <p className={`${theme.textColors.secondary} mb-4`}>
                  {post.content.substring(0, 80)}...
                </p>
                <Link
                  to={`/blogs/${post.id}`}
                  className={`px-4 py-2 text-sm ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor}`}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
