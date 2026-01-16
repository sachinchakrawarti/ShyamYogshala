import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { theme } from "../../config/theme";

const SearchBar = ({ isMobile = false, onSearch, autoFocus = false }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  // Auto-focus when needed (especially for mobile)
  useEffect(() => {
    if (autoFocus && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [autoFocus]);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
      setQuery("");
      if (onSearch) onSearch();
      if (isMobile && searchInputRef.current) {
        searchInputRef.current.blur(); // Remove focus to close mobile keyboard
      }
    }
  };

  // Base classes from theme with fallbacks
  const baseInputClasses = `
    w-full py-2 px-4 pr-10 rounded-full border
    ${theme?.ringEffect || "ring-1 ring-inset ring-purple-200"}
    focus:outline-none focus:ring-2 focus:ring-purple-500
    ${theme?.textColors?.primary || "text-purple-900"}
    text-sm sm:text-base
    ${theme?.border?.button || "rounded-lg"}
  `;

  const mobileInputClasses = `
    ${baseInputClasses}
    py-3 px-4 text-base
    ${theme?.background?.bookCoverSide || "bg-white"}
  `;

  const desktopInputClasses = `
    ${baseInputClasses}
    ${theme?.background?.bookCoverSide || "bg-white"}
  `;

  const buttonClasses = `
    absolute right-3 top-1/2 transform -translate-y-1/2
    ${theme?.textColors?.highlight || "text-purple-600"}
    hover:${theme?.textColors?.primary || "text-purple-800"}
    transition-colors
  `;

  // Mobile Search Bar
  if (isMobile) {
    return (
      <form onSubmit={handleSearch} className="w-full">
        <div className="relative">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search yoga classes, poses, blogs..."
            className={mobileInputClasses}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search"
          />
          <button 
            type="submit" 
            className={buttonClasses}
            aria-label="Submit search"
          >
            <FaSearch size={16} />
          </button>
        </div>
      </form>
    );
  }

  // Desktop Search Bar
  return (
    <form onSubmit={handleSearch} className="flex-1 mx-3 lg:mx-6 max-w-xl">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search yoga classes, poses, blogs..."
          className={desktopInputClasses}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search"
        />
        <button 
          type="submit" 
          className={buttonClasses}
          aria-label="Submit search"
        >
          <FaSearch size={16} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;