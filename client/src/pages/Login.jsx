import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { theme } from '../config/theme';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('user', JSON.stringify(data.user));
        setMsg(`✅ Welcome ${data.user.name}`);
        setTimeout(() => navigate('/profile'), 1000);
      } else {
        setMsg(`❌ ${data.message}`);
      }
    } catch (err) {
      setMsg('❌ Server error');
    }
  };

  return (
    <div className={`${theme.layout.containerWidth} mx-auto ${theme.layout.sectionPadding} ${theme.background.section}`}>
      <div className={`max-w-md mx-auto p-8 ${theme.background.bookCoverSide} ${theme.border.default} ${theme.shadow.container}`}>
        <h2 className={`text-3xl font-bold mb-6 text-center ${theme.textColors.primary}`}>Login</h2>

        {msg && (
          <p className={`mb-6 p-3 text-center text-sm rounded-lg ${
            msg.includes('✅') ? 'bg-lime-50 text-lime-600' : 'bg-purple-50 text-purple-600'
          }`}>
            {msg}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 ${theme.border.button} ${theme.ringEffect} focus:ring-2 focus:ring-purple-500 focus:outline-none`}
            />
          </div>

          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 ${theme.border.button} ${theme.ringEffect} focus:ring-2 focus:ring-purple-500 focus:outline-none`}
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium transition-all`}
          >
            Login
          </button>
        </form>

        <p className={`mt-6 text-center text-sm ${theme.textColors.secondary}`}>
          Don't have an account?{' '}
          <Link 
            to="/register" 
            className={`${theme.textColors.highlight} hover:text-purple-900 font-medium transition-colors`}
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;