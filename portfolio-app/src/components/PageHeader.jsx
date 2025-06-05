import React, { useState, useEffect } from "react";

// --- Reusable Navigation Header Component ---
export const PageHeader = ({ setCurrentPage, currentPage }) => {
  // Determine the main title text based on the current page
  const mainTitleText = () => {
    switch (currentPage) {
      case "home":
        return "Hello, I'm Selase";
      case "about":
        return "Woezor";
      case "projects":
        return "Passion projects and fun little experiments";
      case "work":
        return "Work";
      case "thoughts": // Updated for Thoughts & Ideas page
        return "Thoughts & Ideas";
      case "shop": // Title for Shop page
        return "Nice things from me to you";
      default:
        return "Hello, I'm Selase"; // Fallback for other pages
    }
  };

  // Determine the main title color based on the current page's background
  const mainTitleColorClass = () => {
    // Pages with light background where header title should be black
    if (
      currentPage === "about" ||
      currentPage === "projects" ||
      currentPage === "shop"
    ) {
      // Added shop here
      return "text-gray-900";
    }
    // Pages with dark/brown background where header title should be light
    return "text-gray-100";
  };

  return (
    <header className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      {/* Left side: Dynamic Main Title with conditional color */}
      <div
        className={`text-2xl sm:text-3xl font-medium ${mainTitleColorClass()} mb-4 sm:mb-0`}
      >
        <button
          onClick={() => setCurrentPage("home")}
          className="flex items-center p-0 bg-transparent border-none text-inherit font-inherit cursor-pointer outline-none"
        >
          {mainTitleText()} {/* Dynamically render the title text */}
        </button>
      </div>

      {/* Right side: Vertical Navigation - Layout maintained as vertical and right-aligned */}
      <nav className="w-full sm:w-auto">
        <ul className="list-none m-0 p-0 flex flex-col items-end space-y-1 text-base font-medium">
          <li>
            <button
              onClick={() => setCurrentPage("home")}
              className={`p-0 bg-transparent border-none text-inherit font-inherit cursor-pointer outline-none relative inline-flex items-center group ${
                currentPage === "home" ? "font-semibold" : ""
              }`}
            >
              {/* Ghana flag triangle for Home menu item */}
              <svg
                className="w-3 h-3 mr-2 align-middle inline-block"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="ghanaFlagGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#CE1126" /> {/* Red */}
                    <stop offset="50%" stopColor="#FCD116" /> {/* Gold */}
                    <stop offset="100%" stopColor="#006B3D" /> {/* Green */}
                  </linearGradient>
                </defs>
                <path d="M5 0L10 10H0L5 0Z" fill="url(#ghanaFlagGradient)" />
              </svg>
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage("about")}
              className={`p-0 bg-transparent border-none text-inherit font-inherit cursor-pointer outline-none relative inline-block hover:underline ${
                currentPage === "about" ? "font-semibold" : ""
              }`}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage("projects")}
              className={`p-0 bg-transparent border-none text-inherit font-inherit cursor-pointer outline-none relative inline-block hover:underline ${
                currentPage === "projects" ? "font-semibold" : ""
              }`}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage("work")}
              className={`p-0 bg-transparent border-none text-inherit font-inherit cursor-pointer outline-none relative inline-block hover:underline ${
                currentPage === "work" ? "font-semibold" : ""
              }`}
            >
              Work
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage("thoughts")}
              className={`p-0 bg-transparent border-none text-inherit font-inherit cursor-pointer outline-none relative inline-block hover:underline ${
                currentPage === "thoughts" ? "font-semibold" : ""
              }`}
            >
              Thoughts
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage("shop")}
              className={`p-0 bg-transparent border-none text-inherit font-inherit cursor-pointer outline-none relative inline-block hover:underline ${
                currentPage === "shop" ? "font-semibold" : ""
              }`}
            >
              Shop
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default PageHeader;
