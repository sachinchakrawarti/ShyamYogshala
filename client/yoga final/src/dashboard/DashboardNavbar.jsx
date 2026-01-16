import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { useState } from 'react';
import { theme } from '../config/theme';

export default function DashboardNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { to: "/dashboard", text: "Dashboard" },
    { to: "/dashboard/yogaposes-crud", text: "Yoga Poses" },
    { to: "/dashboard/blogpost-crud", text: "Blog Posts" },
    { to: "/dashboard/user-crud", text: "Users" }
  ];

  const handleLogout = () => {
    // Clear authentication state
    localStorage.removeItem('authToken');
    // Close mobile menu if open
    setMobileMenuOpen(false);
    // Redirect to login page
    navigate('/dashboard');
    // Refresh to reset the app state
    window.location.reload();
  };

  const navItemClasses = (isActive = false) => `
    inline-flex items-center px-3 py-2 text-sm font-medium rounded-md
    ${isActive ? 
      `${theme.textColors.primary} ${theme.background.bookCoverSide}` : 
      `${theme.textColors.secondary} hover:${theme.background.bookCoverSide}`
    }
    transition-colors duration-200
  `;

  const mobileNavItemClasses = (isActive = false) => `
    block px-3 py-2 rounded-md text-base font-medium
    ${isActive ? 
      `${theme.textColors.primary} ${theme.background.bookCoverSide}` : 
      `${theme.textColors.secondary} hover:${theme.background.bookCoverSide}`
    }
    transition-colors duration-200
  `;

  return (
    <nav className={`${theme.shadow.container} ${theme.background.navigationDots || 'bg-white'}`}>
      <div className={`${theme.layout.containerWidth} mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="flex justify-between h-16">
          {/* Left side - Logo and Desktop Nav */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="" className="flex items-center">
                <span className={`text-xl font-bold ${theme.textColors.primary}`}>
                  Yoga Admin
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={navItemClasses(window.location.pathname === link.to)}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Desktop Actions */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              onClick={handleLogout}
              className={`${theme.buttonColors.secondaryButton.background} 
                         ${theme.buttonColors.secondaryButton.hoverBackground}
                         ${theme.buttonColors.secondaryButton.textColor}
                         px-4 py-2 rounded-md text-sm font-medium flex items-center`}
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${theme.textColors.secondary} hover:${theme.textColors.primary} focus:outline-none`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={`sm:hidden ${theme.background.bookCoverSide} shadow-lg`}>
          <div className="pt-2 pb-3 space-y-1 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={mobileNavItemClasses(window.location.pathname === link.to)}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-purple-200 px-4">
            <button 
              onClick={handleLogout}
              className={`w-full flex items-center justify-center px-4 py-2 rounded-md
                        ${theme.buttonColors.secondaryButton.background} 
                        ${theme.buttonColors.secondaryButton.hoverBackground}
                        ${theme.buttonColors.secondaryButton.textColor}
                        text-sm font-medium`}
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}