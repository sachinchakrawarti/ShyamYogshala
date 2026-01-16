// src/pages/SearchResults.jsx
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { theme } from "../config/theme";
import { blogPosts } from "../data/BlogData";
import { yogaPoses } from "../data/YogaPosesData";

const SearchResults = () => {
  const [results, setResults] = useState({ blogs: [], yogaPoses: [] });
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q")?.toLowerCase() || "";

  useEffect(() => {
    setLoading(true);

    if (searchQuery) {
      // Filter blogs
      const filteredBlogs = blogPosts.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchQuery) ||
          blog.content.toLowerCase().includes(searchQuery) ||
          blog.category.toLowerCase().includes(searchQuery)
      );

      // Filter yoga poses
      const filteredYogaPoses = yogaPoses.filter(
        (pose) =>
          pose.name.toLowerCase().includes(searchQuery) ||
          pose.content.some((text) => text.toLowerCase().includes(searchQuery)) ||
          pose.category.toLowerCase().includes(searchQuery)
      );

      setResults({ blogs: filteredBlogs, yogaPoses: filteredYogaPoses });
    } else {
      setResults({ blogs: [], yogaPoses: [] });
    }

    setLoading(false);
  }, [searchQuery]);

  if (loading) {
    return (
      <div className={`${theme.layout.sectionPadding} text-center ${theme.textColors.primary}`}>
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
        <p className="mt-2">Searching for "{searchQuery}"...</p>
      </div>
    );
  }

  return (
    <div
      className={`${theme.layout.containerWidth} mx-auto ${theme.layout.sectionPadding} ${theme.background.section}`}
    >
      <h1 className={`text-2xl md:text-3xl font-bold mb-8 ${theme.textColors.primary}`}>
        Search Results for "{searchQuery}"
      </h1>

      {/* Blog Results */}
      {results.blogs.length > 0 && (
        <div className="mb-12">
          <h2 className={`text-xl md:text-2xl font-bold mb-6 ${theme.textColors.primary}`}>
            Blog Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.blogs.map((blog) => (
              <div
                key={blog.id}
                className={`p-4 ${theme.border.default} ${theme.shadow.container} rounded-xl overflow-hidden`}
              >
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-48 w-full object-cover rounded-lg mb-4"
                  />
                )}
                <h2 className={`text-lg font-semibold mb-2 ${theme.textColors.primary}`}>
                  {blog.title}
                </h2>
                <p className={`text-sm mb-4 ${theme.textColors.secondary} line-clamp-2`}>
                  {blog.content}
                </p>
                <Link
                  to={`/blogs/${blog.id}`}
                  className={`block text-center px-4 py-2 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button}`}
                >
                  View Post
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Yoga Pose Results */}
      {results.yogaPoses.length > 0 && (
        <div className="mb-12">
          <h2 className={`text-xl md:text-2xl font-bold mb-6 ${theme.textColors.primary}`}>
            Yoga Poses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.yogaPoses.map((pose) => (
              <div
                key={pose.id}
                className={`p-4 ${theme.border.default} ${theme.shadow.container} rounded-xl overflow-hidden`}
              >
                <img
                  src={pose.image}
                  alt={pose.name}
                  className="h-48 w-full object-cover rounded-lg mb-4"
                />
                <h2 className={`text-lg font-semibold mb-2 ${theme.textColors.primary}`}>
                  {pose.name}
                </h2>
                <p className={`text-sm mb-4 ${theme.textColors.secondary} line-clamp-2`}>
                  {pose.content[0]}
                </p>
                <Link
                  to={`/learn-yoga/yogapose/${pose.id}`}
                  className={`block text-center px-4 py-2 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button}`}
                >
                  View Pose
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {results.blogs.length === 0 && results.yogaPoses.length === 0 && (
        <div className={`text-center p-8 rounded-xl ${theme.background.bookCoverSide}`}>
          <p className={`text-lg ${theme.textColors.primary}`}>
            No results found for "{searchQuery}"
          </p>
          <Link
            to="/"
            className={`inline-block mt-4 px-6 py-2 ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.hoverBackground} ${theme.buttonColors.secondaryButton.textColor} ${theme.border.button}`}
          >
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
