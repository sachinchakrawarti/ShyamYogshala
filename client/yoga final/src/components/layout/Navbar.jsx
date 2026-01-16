import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaSearch, 
  FaUser, 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaInfoCircle,
  FaBookOpen,
  FaLeaf,
  FaUtensils,
  FaBlog,
  FaPhone,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();
  const mobileMenuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setShowMobileSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowMobileSearch(false);
  };

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMainItemClick = (item, e) => {
    if (e.target.closest('.dropdown-arrow')) return;
    
    if (item.path) {
      navigate(item.path);
      setIsMobileMenuOpen(false);
      setShowMobileSearch(false);
    }
  };

  const navItems = [
    { name: "Home", icon: <FaHome className="mr-2" />, path: "/" },
    {
      name: "Yoga Classes",
      path: "/yogaclassesinfo",
      icon: <FaLeaf className="mr-2" />,
      dropdown: [
        { name: "Online Yoga Classes", path: "/online-yoga" },
        { name: "Corporate Yoga Sessions", path: "/corporate-yoga" },
        { name: "Pregnancy Yoga Classes", path: "/pregnancy-yoga" },
        { name: "Yoga Teacher at Home", path: "/yoga-home" },
        { name: "Our Yoga Studio", path: "/yoga-studio" },
      ],
    },
    {
      name: "Learn Yoga",
      path: "/learn-yoga",
      icon: <FaBookOpen className="mr-2" />,
      dropdown: [
        { name: "Types of Yoga", path: "/types-of-yoga" },
        { name: "Yoga Poses", path: "/yoga-poses" },
      ],
    },
    {
      name: "Diet & Nutrition",
      path: "/diet-nutrition",
      icon: <FaUtensils className="mr-2" />, 
    },
    {
      name: "Blogs",
      path: "/blogs",
      icon: <FaBlog className="mr-2" />,
    },
    {
      name: "About Us",
      path: "/about",
      icon: <FaInfoCircle className="mr-2" />,
    },
    {
      name: "Contact Us",
      path: "/contact",
      icon: <FaPhone className="mr-2" />,
    },
  ];

  return (
    <nav className="bg-purple-100 shadow-md w-full sticky top-0 z-50">
      {/* Top Row - Logo, Search, User Actions */}
      <div className="w-full px-4 py-3 flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Logo */}
        <div className="flex flex-col min-w-[120px] md:min-w-[150px]">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://res.cloudinary.com/duhcdtmo7/image/upload/v1752904374/yogalogo_tjlun6.png" 
              alt="Shyam Yogshala Logo"
              className="h-10 w-auto"
            />
            <span className="font-bold text-lg sm:text-xl md:text-2xl text-purple-800 whitespace-nowrap">Shyam Yogshala</span>
          </Link>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden sm:block flex-1 mx-4 max-w-xl">
          <SearchBar />
        </div>

        {/* User Actions */}
        <div className="hidden sm:flex items-center space-x-3 md:space-x-4">
          <Link 
            to="/profile" 
            className="p-1.5 sm:p-2 text-purple-600 hover:text-purple-800 rounded-full hover:bg-purple-50 transition-colors"
            aria-label="User Profile"
          >
            <FaUser className="text-lg md:text-xl" />
          </Link>
          
          <Link
            to="/register"
            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full hover:from-purple-600 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base whitespace-nowrap"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center space-x-3">
          {!showMobileSearch && (
            <>
              <Link
                to="/profile"
                className="p-2 text-purple-600 hover:text-purple-800 rounded-full hover:bg-purple-50"
                aria-label="Profile"
              >
                <FaUser size={18} />
              </Link>
              
              <button 
                onClick={toggleMobileSearch}
                className="p-2 text-purple-600 hover:text-purple-800 rounded-full hover:bg-purple-50"
                aria-label="Search"
              >
                <FaSearch size={18} />
              </button>
            </>
          )}

          <button
            onClick={toggleMobileMenu}
            className="p-2 text-purple-600 hover:text-purple-800 rounded-full hover:bg-purple-50 focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar - Shows when search icon is clicked */}
      {showMobileSearch && (
        <div className="sm:hidden px-4 py-3 bg-white border-t border-purple-200">
          <SearchBar 
            isMobile={true} 
            onSearch={() => setShowMobileSearch(false)}
            autoFocus={true}
          />
        </div>
      )}

      {/* Navigation Links - Desktop */}
      <div className="hidden sm:block bg-purple-50 border-t border-purple-100">
        <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 py-1 sm:py-2 flex flex-wrap justify-center gap-x-2 sm:gap-x-4 lg:gap-x-6 gap-y-1 sm:gap-y-2 relative">
          {navItems.map((item, index) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <>
                  <div
                    onClick={(e) => handleMainItemClick(item, e)}
                    className="py-1.5 sm:py-2 px-2 sm:px-3 text-purple-700 hover:text-purple-900 flex items-center transition-colors duration-200 text-xs sm:text-sm md:text-base whitespace-nowrap hover:bg-purple-100 rounded-md cursor-pointer"
                  >
                    <span className="hidden sm:inline-block mr-1.5">{item.icon}</span>
                    {item.name}
                    <span 
                      className="ml-1 dropdown-arrow"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(index);
                      }}
                    >
                      {activeDropdown === index ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </span>
                  </div>
                  {(activeDropdown === index) && (
                    <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 py-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-purple-700 hover:bg-purple-50"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="py-1.5 sm:py-2 px-2 sm:px-3 text-purple-700 hover:text-purple-900 flex items-center transition-colors duration-200 text-xs sm:text-sm md:text-base whitespace-nowrap hover:bg-purple-100 rounded-md"
                >
                  <span className="hidden sm:inline-block mr-1.5">{item.icon}</span>
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="sm:hidden bg-white w-full border-t border-purple-100 shadow-lg fixed inset-x-0 top-[70px] bottom-0 overflow-y-auto z-40"
        >
          <div className="px-4 py-3 space-y-2">
            {/* Mobile Nav Items */}
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div
                        onClick={(e) => handleMainItemClick(item, e)}
                        className="w-full py-3 px-4 text-purple-700 hover:bg-purple-50 rounded-lg flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center">
                          <span className="mr-3">{item.icon}</span>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <span 
                          className="dropdown-arrow"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDropdown(index);
                          }}
                        >
                          {activeDropdown === index ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                        </span>
                      </div>
                      {activeDropdown === index && (
                        <div className="pl-8 pr-4 py-1 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block py-2 px-4 text-purple-600 hover:bg-purple-50 rounded-lg"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="py-3 px-4 text-purple-700 hover:bg-purple-50 rounded-lg flex items-center"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="pt-4 pb-2 space-y-3">
              <Link
                to="/login"
                className="block w-full py-3 text-center border-2 border-purple-400 text-purple-600 rounded-lg hover:bg-purple-50 font-medium transition-all duration-200"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setActiveDropdown(null);
                }}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block w-full py-3 text-center bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 font-medium transition-all duration-200"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setActiveDropdown(null);
                }}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;