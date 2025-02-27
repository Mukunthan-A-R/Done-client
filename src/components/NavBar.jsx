import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or Brand */}
        <div className="text-xl font-semibold">
          <a href="/">Done</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/dashboard" className="hover:text-gray-400">
            Dashboard
          </a>
          <a href="/login" className="hover:text-gray-400">
            Login
          </a>
          <a href="/signup" className="hover:text-gray-400">
            Sign up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <a
            href="/"
            className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded"
          >
            Home
          </a>
          <a
            href="/about"
            className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded"
          >
            About
          </a>
          <a
            href="/dashboard"
            className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded"
          >
            Dashboard
          </a>
          <a
            href="/login"
            className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded"
          >
            Login
          </a>
          <a
            href="/signup"
            className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded"
          >
            Sign up
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
