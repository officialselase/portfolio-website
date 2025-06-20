import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader"; // <--- Add this import

const Work = ({ setCurrentPage, currentPage }) => {
  const [workExperience, setWorkExperience] = useState([]);

  useEffect(() => {
    // Fetch data when component mounts or currentPage changes
    const fetchWork = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/workexperience/");
        const data = await response.json();
        setWorkExperience(data);
      } catch (error) {
        console.error("Error fetching work experience:", error);
      }
    };
    if (currentPage === "work") {
      fetchWork();
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  return (
    <div className="flex flex-col min-h-screen">
      <section
        className="bg-custom-brown text-white pt-4 pb-10"
        style={{ backgroundColor: "#c78f8b" }}
      >
        <PageHeader setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Work Experience
          </h1>
        </div>
      </section>
      <section className="bg-gray-900 text-gray-100 py-10 px-4 sm:px-6 md:px-8 flex-grow">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="flex flex-col space-y-8">
            {workExperience.length === 0 ? (
              <p className="text-center">No work experience available.</p>
            ) : (
              workExperience.map((entry, index) => (
                <div
                  key={index}
                  className="pb-4 border-b border-gray-600 last:border-b-0"
                >
                  <h3 className="text-xl font-medium text-yellow-300">
                    {entry.title}
                  </h3>
                  <p className="text-base text-gray-400">
                    {entry.company}, {entry.duration}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    {entry.description}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Work;
