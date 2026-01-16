import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { theme } from '../config/theme';

const YogaPosesCrud = () => {
  const [poses, setPoses] = useState([]);
  const [formData, setFormData] = useState({
    englishName: '',
    imageUrl: '',
    description: '',
    details: '',
  });
  const [editingId, setEditingId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const fetchYogaPoses = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/yogaposes');
      setPoses(res.data);
    } catch (err) {
      showMessage('Error fetching yoga poses', 'error');
      console.error('Error fetching yoga poses:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchYogaPoses();
  }, []);

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/yogaposes/${editingId}`, formData);
        showMessage('Pose updated successfully!', 'success');
      } else {
        await axios.post('http://localhost:5000/api/yogaposes', formData);
        showMessage('Pose created successfully!', 'success');
      }
      setFormData({
        englishName: '',
        imageUrl: '',
        description: '',
        details: '',
      });
      setEditingId(null);
      fetchYogaPoses();
    } catch (err) {
      showMessage('Error submitting yoga pose', 'error');
      console.error('Error submitting yoga pose:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (pose) => {
    setFormData(pose);
    setEditingId(pose._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this pose?')) return;
    
    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:5000/api/yogaposes/${id}`);
      showMessage('Pose deleted successfully!', 'success');
      fetchYogaPoses();
    } catch (err) {
      showMessage('Error deleting pose', 'error');
      console.error('Error deleting pose:', err);
    } finally {
      setIsLoading(false);
    }
  };

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
        <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${theme.textColors.primary}`}>
          {editingId ? 'Edit Yoga Pose' : 'Add New Yoga Pose'}
        </h2>

        {message.text && (
          <div className={`mb-6 p-3 rounded-lg ${
            message.type === 'success' ? 'bg-lime-50 text-lime-600' : 'bg-purple-50 text-purple-600'
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 mb-8">
          <div>
            <input
              type="text"
              name="englishName"
              placeholder="English Name"
              value={formData.englishName}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>
          <div>
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              value={formData.imageUrl}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>
          <div>
            <textarea
              name="description"
              placeholder="Short Description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
              className={inputClasses}
            />
          </div>
          <div>
            <textarea
              name="details"
              placeholder="Detailed Instructions (supports HTML)"
              value={formData.details}
              onChange={handleChange}
              required
              rows="5"
              className={inputClasses}
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={isLoading}
              className={buttonClasses()}
            >
              {isLoading ? 'Processing...' : editingId ? 'Update Pose' : 'Create Pose'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setFormData({
                    englishName: '',
                    imageUrl: '',
                    description: '',
                    details: '',
                  });
                }}
                className={buttonClasses('secondary')}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <h2 className={`text-xl md:text-2xl font-bold mb-6 ${theme.textColors.primary}`}>
          Yoga Poses List
        </h2>
        
        {isLoading && poses.length === 0 ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : poses.length === 0 ? (
          <p className={`text-center py-8 ${theme.textColors.secondary}`}>No yoga poses found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {poses.map(pose => (
              <div 
                key={pose._id} 
                className={`p-6 ${theme.border.default} ${theme.shadow.container} rounded-xl`}
              >
                <h3 className={`text-lg font-semibold mb-3 ${theme.textColors.primary}`}>
                  {pose.englishName}
                </h3>
                {pose.imageUrl && (
                  <img 
                    src={pose.imageUrl} 
                    alt={pose.englishName} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <p className={`text-sm mb-4 ${theme.textColors.secondary}`}>
                  {pose.description}
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleEdit(pose)}
                    className={buttonClasses('secondary')}
                    disabled={isLoading}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(pose._id)}
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

export default YogaPosesCrud;