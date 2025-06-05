// --- Work Page Component ---
import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader"; // <--- Add this import

const Work = ({ setCurrentPage, currentPage }) => {
  useEffect(() => {
    // Scroll to the top of the page when the Work component is rendered or currentPage changes to 'work'
    if (currentPage === "work") {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Section - Brown Background and White Text */}
      <section className="bg-brown-500 text-white pt-4 pb-10">
        <PageHeader setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Work Experience
          </h1>
        </div>
      </section>

      {/* Bottom Section - Dark Background and Light Text */}
      <section className="bg-gray-900 text-gray-100 py-10 px-4 sm:px-6 md:px-8 flex-grow">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="flex flex-col space-y-8">
            {[1, 2, 3, 4, 5].map(
              (
                i // Dummy entries
              ) => (
                <div
                  key={i}
                  className="pb-4 border-b border-gray-600 last:border-b-0"
                >
                  <h3 className="text-xl font-medium text-yellow-300">
                    Position Title {i}
                  </h3>
                  <p className="text-base text-gray-400">
                    Company Name, Duration
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Brief description of responsibilities and achievements in
                    this role. This could be a longer paragraph detailing
                    specific projects or responsibilities.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Work;
