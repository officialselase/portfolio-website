import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";

const Work = ({ setCurrentPage, currentPage, cartCount }) => {
  const [workExperiences, setWorkExperiences] = useState([]);
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "https://sels-app.vercel.app/api";

  useEffect(() => {
    const fetchWorkExperiences = async () => {
      try {
        const response = await fetch(`${API_URL}/workexperience/`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response:", data);
        setWorkExperiences(data || []);
      } catch (error) {
        console.error("Error fetching work experiences:", error);
        setWorkExperiences([]);
      }
    };
    if (currentPage === "work") {
      fetchWorkExperiences();
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-100 text-gray-900 py-10 px-4 sm:px-6 md:px-8 flex-grow">
        <PageHeader
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          cartCount={cartCount}
        />
        <div className="w-full max-w-screen-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Work Experience
          </h1>
          {workExperiences.length === 0 ? (
            <p className="text-center">No work experience available.</p>
          ) : (
            <div className="space-y-6">
              {workExperiences.map((experience) => (
                <div
                  key={experience.id}
                  className="border border-gray-300 p-4 rounded"
                >
                  <h3 className="text-xl font-medium">
                    {experience.role} at {experience.company}
                  </h3>
                  <p className="text-gray-600">
                    {experience.start_date} - {experience.end_date || "Present"}
                  </p>
                  <p className="text-gray-700 mt-2">{experience.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Work;
