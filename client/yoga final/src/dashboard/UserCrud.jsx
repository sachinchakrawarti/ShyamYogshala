import React, { useEffect, useState } from 'react';
import { theme } from '../config/theme';

const UserCrud = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [msg, setMsg] = useState('');

  const fetchUsers = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/users');
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEdit
      ? `http://localhost:5000/api/users/${editId}`
      : 'http://localhost:5000/api/users/register';

    const method = isEdit ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMsg(isEdit ? '✅ User updated' : '✅ User added');
        setForm({ name: '', email: '', password: '' });
        setIsEdit(false);
        setEditId(null);
        fetchUsers();
      } else {
        setMsg(`❌ ${data.message}`);
      }
    } catch (err) {
      console.error("Error:", err);
      setMsg("❌ Something went wrong");
    }
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email, password: user.password });
    setIsEdit(true);
    setEditId(user._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete?")) return;

    try {
      await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'DELETE',
      });
      setMsg('🗑️ User deleted');
      fetchUsers();
    } catch (err) {
      console.error("Delete error:", err);
      setMsg("❌ Failed to delete");
    }
  };

  return (
    <div className={`${theme.layout.containerWidth} mx-auto ${theme.layout.sectionPadding} ${theme.background.section}`}>
      <div className={`p-8 ${theme.background.bookCoverSide} ${theme.border.default} ${theme.shadow.container}`}>
        <h2 className={`text-3xl font-bold mb-6 ${theme.textColors.primary}`}>
          {isEdit ? 'Edit User' : 'Add User'}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className={`px-4 py-3 ${theme.border.button} ${theme.ringEffect} focus:ring-2 focus:ring-purple-500 focus:outline-none`}
            required
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={`px-4 py-3 ${theme.border.button} ${theme.ringEffect} focus:ring-2 focus:ring-purple-500 focus:outline-none`}
            required
          />
          <input
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className={`px-4 py-3 ${theme.border.button} ${theme.ringEffect} focus:ring-2 focus:ring-purple-500 focus:outline-none`}
            required
          />
          <button
            type="submit"
            className={`col-span-full py-3 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium transition-all`}
          >
            {isEdit ? 'Update User' : 'Add User'}
          </button>
        </form>

        {/* Message */}
        {msg && (
          <div className={`mb-6 p-3 text-center rounded-lg ${
            msg.includes('✅') ? 'bg-lime-50 text-lime-600' : 
            msg.includes('❌') ? 'bg-purple-50 text-purple-600' : 
            'bg-purple-100 text-purple-800'
          }`}>
            {msg}
          </div>
        )}

        {/* User Table */}
        <h3 className={`text-xl font-semibold mb-4 ${theme.textColors.primary}`}>User List</h3>
        <div className="overflow-x-auto">
          <table className={`w-full table-auto ${theme.border.default} text-sm ${theme.shadow.container}`}>
            <thead>
              <tr className={`bg-purple-100 ${theme.textColors.primary}`}>
                <th className="border border-purple-200 px-4 py-3">Name</th>
                <th className="border border-purple-200 px-4 py-3">Email</th>
                <th className="border border-purple-200 px-4 py-3">Password</th>
                <th className="border border-purple-200 px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id} className="hover:bg-purple-50 transition-colors">
                    <td className={`border border-purple-200 px-4 py-3 ${theme.textColors.secondary}`}>{user.name}</td>
                    <td className={`border border-purple-200 px-4 py-3 ${theme.textColors.secondary}`}>{user.email}</td>
                    <td className={`border border-purple-200 px-4 py-3 ${theme.textColors.secondary}`}>{user.password}</td>
                    <td className="border border-purple-200 px-4 py-3 space-x-2">
                      <button
                        onClick={() => handleEdit(user)}
                        className={`px-3 py-1 ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.hoverBackground} ${theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} text-sm font-medium transition-all`}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className={`px-3 py-1 bg-red-500 hover:bg-red-600 text-white ${theme.border.button} ${theme.shadow.button} text-sm font-medium transition-all`}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className={`text-center py-4 ${theme.textColors.secondary}`}>
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserCrud;