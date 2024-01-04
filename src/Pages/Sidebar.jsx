import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="relative">
      {/* Hamburger menu icon for mobile */}
      <div className="lg:hidden">
        <button
          onClick={toggleSidebar}
          className="px-4 py-2 text-gray-700 focus:outline-none focus:bg-gray-300"
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      
      <aside
        className={`absolute lg:relative top-10 z-10 bg-gray-900 bg-opacity-65 rounded-xl lg:flex lg:flex-col lg:w-64 lg:h-screen lg:px-4 lg:py-8 lg:overflow-y-auto lg:border-r lg:rtl:border-r-0 lg:rtl:border-l lg:bg-gray-900 lg:border-gray-700 ${
          isSidebarVisible ? "block" : "hidden"
        }`}
      >
        <Link to="/">
          <img
            className="w-auto h-6 sm:h-7"
            src="https://i.postimg.cc/44b3hwR0/playcraft-logo-2.png"
            alt=""
          />
        </Link>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <Link
              to="/"
              className="flex items-center mb-4 px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-slate-500"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>

              <span className="mx-4 font-medium">Home</span>
            </Link>

            <Link
              to="/genres"
              className="flex items-center  mb-4 px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-slate-500 dark:bg-gray-800 dark:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "rgba(255, 255, 255, 1)" }}
              >
                <path d="M20.937 7.53C19.227 4.119 15.803 2 12 2 6.486 2 2 6.486 2 12s4.486 10 10 10c3.803 0 7.227-2.119 8.937-5.53a1 1 0 0 0-.397-1.316L15.017 12l5.522-3.153c.461-.264.636-.842.398-1.317zm-8.433 3.602a.999.999 0 0 0 0 1.736l6.173 3.525A7.949 7.949 0 0 1 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8a7.95 7.95 0 0 1 6.677 3.606l-6.173 3.526z"></path>
                <circle cx="11.5" cy="7.5" r="1.5"></circle>
              </svg>

              <span className="mx-4 font-medium">Genres</span>
            </Link>
            <Link
              to="/popular"
              className="flex items-center  mb-4 px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-slate-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "rgba(255, 255, 255, 1)" }}
              >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z"></path>
              </svg>

              <span className="mx-4 font-medium">Popular Games</span>
            </Link>

            <Link
              to="/stores"
              className="flex items-center  mb-4 px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-slate-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "rgba(255, 255, 255, 1)" }}
              >
                <path d="m12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z"></path>
              </svg>

              <span className="mx-4 font-medium">Stores</span>
            </Link>

            <Link
              to="/platforms"
              className="flex items-center  mb-4 px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-slate-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "rgba(255, 255, 255, 1)" }}
              >
                <path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z" />
                <circle cx="10.5" cy="19.5" r="1.5" />
                <circle cx="16.5" cy="19.5" r="1.5" />
              </svg>

              <span className="mx-4 font-medium">Platforms</span>
            </Link>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
