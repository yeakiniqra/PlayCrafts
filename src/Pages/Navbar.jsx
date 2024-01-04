import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = (event) => {
    event.stopPropagation(); // Prevent event propagation
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  useEffect(() => {
    if (isNavbarOpen) {
      document.body.addEventListener("click", closeNavbar);
    }

    return () => {
      document.body.removeEventListener("click", closeNavbar);
    };
  }, [isNavbarOpen]);


  const navigation = [
    { title: "Home", path: "/" },
    { title: "Genres", path: "/genres" },
    { title: "Popular Games", path: "/popular" },
    { title: "Stores", path: "/stores" },
    { title: "Platforms", path: "/platforms" },
  ];

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white">
              <img
                className="w-auto h-6 sm:h-7"
                src="https://i.postimg.cc/44b3hwR0/playcraft-logo-2.png"
                alt=""
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            {navigation.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-gray-300 hover:bg-gray-700 px-2 py-1 rounded-md focus:outline-none focus:bg-gray-700"
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
                  d={
                    isNavbarOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isNavbarOpen && (
        <div className="fixed inset-0 mt-12 z-50 bg-opacity-40 backdrop-filter backdrop-blur-lg bg-gray-900">
          <div className="px-4 pt-4 pb-8 sm:px-6">
            <div className="max-w-2xl mx-auto">
              <div className="rounded-md shadow-lg bg-opacity-80 bg-gray-200 divide-y-2 divide-gray-400 backdrop-filter backdrop-blur-sm">
                <div className="py-5 space-y-6">
                  {/* Navigation Links */}
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block text-center text-base font-medium text-gray-700 hover:text-gray-900"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
