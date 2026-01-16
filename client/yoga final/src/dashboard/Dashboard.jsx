import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../dashboard/DashboardNavbar';
import { theme } from '../config/theme';

export default function Dashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      if (password === 'yoga123') {
        setAuthenticated(true);
        setError('');
      } else {
        setError('Invalid password');
      }
      setIsLoading(false);
    }, 500);
  };

  if (!authenticated) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme.background.section}`}>
        <div className={`p-8 ${theme.background.bookCoverSide} ${theme.border.default} ${theme.shadow.container} rounded-xl w-full max-w-md`}>
          <h1 className={`text-2xl md:text-3xl font-bold text-center mb-6 ${theme.textColors.primary}`}>
            Admin Dashboard Login
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className={`block mb-2 ${theme.textColors.secondary}`}>Username</label>
              <input 
                type="text" 
                value="admin" 
                readOnly 
                className={`w-full px-4 py-3 ${theme.border.button} ${theme.background.bookCoverSide} rounded-lg`}
              />
            </div>
            <div>
              <label className={`block mb-2 ${theme.textColors.secondary}`}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className={`w-full px-4 py-3 ${theme.border.button} ${theme.ringEffect} focus:ring-2 focus:ring-purple-500 focus:outline-none rounded-lg`}
                placeholder="Enter password"
                required
              />
              {error && (
                <p className={`text-sm mt-1 ${theme.textColors.highlight}`}>
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium transition-all`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Authenticating...
                </span>
              ) : 'Login'}
            </button>
            <a
              href="https://www.shyamyogshala.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`block text-center mt-4 ${theme.textColors.primary} hover:underline`}
            >
              Visit Shyam Yogshala
            </a>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme.background.section}`}>
      <DashboardNavbar />
      <div className={`${theme.layout.sectionPadding} pt-4`}>
        <div className={`${theme.layout.containerWidth} mx-auto`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
