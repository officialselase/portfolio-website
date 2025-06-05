// --- Shop Page Component (Dummy) ---
import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader"; // <--- Add this import

const Shop = ({ setCurrentPage, currentPage }) => {
  useEffect(() => {
    // Scroll to the top when the shop page loads
    if (currentPage === "shop") {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  // Placeholder images for potential shop items, if you decide to add them later
  const shopItemPlaceholders = [
    "https://placehold.co/400x300/F0F0F0/888888?text=React+Product+1",
    "https://placehold.co/400x300/F0F0F0/888888?text=React+Product+2",
    "https://placehold.co/400x300/F0F0F0/888888?text=React+Product+3",
  ];

  return (
    <div className="flex flex-col min-h-full bg-white text-gray-900 font-sans antialiased">
      {/* PageHeader will handle its own background/text color based on currentPage */}
      <PageHeader setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {/* Support me directly - CTA block (adapted for white background) */}
      <a
        href="#" // Replace with actual support link
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 bg-gray-100 rounded-md text-inherit no-underline transition-colors duration-200 hover:bg-gray-200"
      >
        <p className="text-lg font-medium text-gray-900 flex items-center flex end">
          Support me directly
          <span className="ml-2">&rarr;</span>
        </p>
      </a>
      <a
        href="#" // Replace with actual support link
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 mt-4 bg-gray-100 rounded-md text-inherit no-underline transition-colors duration-200 hover:bg-gray-200"
      >
        <p className="text-lg font-medium text-gray-900 flex items-center flex end">
          Register for a course
          <span className="ml-2">&rarr;</span>
        </p>
      </a>
      {/* Optional: Add a section for product images if desired, adapting the background */}
      <div className="mt-16 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shopItemPlaceholders.map((src, index) => (
            <div key={index} className="bg-white p-4 rounded-md">
              <img
                src={src}
                alt={`Shop Item ${index + 1}`}
                className="w-full h-auto object-cover mb-4 rounded-sm"
              />
              <h3 className="text-xl font-medium text-gray-900">
                Product Title {index + 1}
              </h3>
              <p className="text-sm text-gray-700 mt-1">
                Short description of the product.
              </p>
              <p className="text-lg font-semibold text-gray-800 mt-2">$XX.XX</p>
              <button className="mt-4 px-4 py-4 bg-gray-900 text-white text-sm rounded-md border-none cursor-pointer transition-colors duration-200 hover:bg-gray-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
