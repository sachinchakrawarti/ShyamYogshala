import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { theme } from '../config/theme';

const BlogPostCrud = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({ 
    title: '', 
    content: '', 
    image: '' 
  });
  const [editId, setEditId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [imagePreview, setImagePreview] = useState(null);

  const API_BASE = 'http://localhost:5000/api/blogs';

  // Fetch all blogs
  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(API_BASE);
      setBlogs(res.data);
    } catch (err) {
      showMessage('Error fetching blogs', 'error');
      console.error('Error fetching blogs:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  // Handle image URL changes
  const handleImageChange = (e) => {
    const url = e.target.value;
    setFormData({ ...formData, image: url });
    setImagePreview(url || null);
  };

  // Create or update blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (editId) {
        await axios.put(`${API_BASE}/${editId}`, formData);
        showMessage('Blog updated successfully!', 'success');
      } else {
        await axios.post(API_BASE, formData);
        showMessage('Blog created successfully!', 'success');
      }
      setFormData({ title: '', content: '', image: '' });
      setImagePreview(null);
      setEditId(null);
      fetchBlogs();
    } catch (err) {
      showMessage('Error saving blog', 'error');
      console.error('Error saving blog:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Delete blog
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog post?')) return;
    
    setIsLoading(true);
    try {
      await axios.delete(`${API_BASE}/${id}`);
      showMessage('Blog deleted successfully!', 'success');
      fetchBlogs();
    } catch (err) {
      showMessage('Error deleting blog', 'error');
      console.error('Error deleting blog:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Load blog into form for editing
  const handleEdit = (blog) => {
    setFormData({ 
      title: blog.title, 
      content: blog.content, 
      image: blog.image 
    });
    setImagePreview(blog.image || null);
    setEditId(blog._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Style classes from theme
  const inputClasses = `
    w-full p-3 ${theme.border.button} ${theme.ringEffect}
    focus:ring-2 focus:ring-purple-500 focus:outline-none
    ${theme.textColors.primary}
  `;

  const buttonClasses = (type = 'primary') => `
    px-4 py-2 ${theme.border.button} ${theme.shadow.button} font-medium
    ${type === 'primary' ? 
      `${theme.buttonColors.primaryButton.background} 
       ${theme.buttonColors.primaryButton.hoverBackground} 
       ${theme.buttonColors.primaryButton.textColor}` : 
      `${theme.buttonColors.secondaryButton.background} 
       ${theme.buttonColors.secondaryButton.hoverBackground} 
       ${theme.buttonColors.secondaryButton.textColor}`}
    transition-all
  `;

  return (
    <div className={`${theme.layout.containerWidth} mx-auto ${theme.layout.sectionPadding} ${theme.background.section}`}>
      <div className={`p-8 ${theme.background.bookCoverSide} ${theme.border.default} ${theme.shadow.container}`}>
        <h1 className={`text-2xl md:text-3xl font-bold mb-6 ${theme.textColors.primary}`}>
          {editId ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h1>

        {message.text && (
          <div className={`mb-6 p-3 rounded-lg ${
            message.type === 'success' ? 'bg-lime-50 text-lime-600' : 'bg-purple-50 text-purple-600'
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 mb-10">
          <div>
            <input
              type="text"
              placeholder="Blog Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className={inputClasses}
              required
            />
          </div>
          
          <div>
            <textarea
              placeholder="Blog Content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className={`${inputClasses} h-40`}
              required
              rows="5"
            />
          </div>
          
          <div>
            <input
              type="text"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleImageChange}
              className={inputClasses}
            />
            {imagePreview && (
              <div className="mt-3">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="max-h-40 rounded-lg border border-purple-200"
                />
              </div>
            )}
          </div>
          
          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={isLoading}
              className={buttonClasses()}
            >
              {isLoading ? 'Processing...' : editId ? 'Update Blog' : 'Create Blog'}
            </button>
            {editId && (
              <button
                type="button"
                onClick={() => {
                  setEditId(null);
                  setFormData({ title: '', content: '', image: '' });
                  setImagePreview(null);
                }}
                className={buttonClasses('secondary')}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <h2 className={`text-xl md:text-2xl font-bold mb-6 ${theme.textColors.primary}`}>
          All Blog Posts
        </h2>
        
        {isLoading && blogs.length === 0 ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : blogs.length === 0 ? (
          <p className={`text-center py-8 ${theme.textColors.secondary}`}>No blog posts found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <div 
                key={blog._id} 
                className={`p-6 ${theme.border.default} ${theme.shadow.container} rounded-xl`}
              >
                {blog.image && (
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className={`text-lg font-semibold mb-2 ${theme.textColors.primary}`}>
                  {blog.title}
                </h3>
                <p className={`text-sm mb-4 ${theme.textColors.secondary} line-clamp-3`}>
                  {blog.content}
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleEdit(blog)}
                    className={buttonClasses('secondary')}
                    disabled={isLoading}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md font-medium transition-all"
                    disabled={isLoading}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostCrud;