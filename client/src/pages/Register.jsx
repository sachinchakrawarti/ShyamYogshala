import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { theme } from '../config/theme';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('user', JSON.stringify(data));
        setMsg('✅ Registered successfully!');
        setTimeout(() => navigate('/profile'), 1000);
      } else {
        setMsg(`❌ ${data.message}`);
      }
    } catch (err) {
      setMsg('❌ Server error');
    }
  };

  return (
    <div className={`min-h-screen ${theme.background.section} flex items-center justify-center`}>
      <div className={`w-full max-w-md p-8 ${theme.background.bookCoverSide} ${theme.border.default} ${theme.shadow.container}`}>
        <h2 className={`text-3xl font-bold text-center mb-8 ${theme.textColors.primary}`}>Create Account</h2>

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
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 ${theme.border.button} ${theme.ringEffect} focus:ring-2 focus:ring-purple-500 focus:outline-none`}
              required
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 ${theme.border.button} ${theme.ringEffect} focus:ring-2 focus:ring-purple-500 focus:outline-none`}
              required
            />
          </div>
          
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 ${theme.border.button} ${theme.ringEffect} focus:ring-2 focus:ring-purple-500 focus:outline-none`}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium transition-all`}
          >
            Register
          </button>
        </form>

        <p className={`mt-6 text-center text-sm ${theme.textColors.secondary}`}>
          Already have an account?{' '}
          <span
            className={`${theme.textColors.highlight} hover:text-purple-900 font-medium cursor-pointer transition-colors`}
            onClick={() => navigate('/login')}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;