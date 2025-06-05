// --- Projects Page Component ---
import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader"; // <--- Add this import

const Projects = ({ setCurrentPage, currentPage }) => {
  // Re-using the projects data from Home component for consistency
  const projectsData = [
    {
      title: "stuff",
      description:
        "Random media I've collected since the early 2000s, restored from an old hard drive. I've added some new stuff, too.",
    },
    {
      title: "Mr. ICT",
      description:
        "Portable, self contained llvm tools & libs with cross-compilation capability",
    },
    { title: "SwapWing", description: "Virtual computer" },
    {
      title: "Smart Election Ledger System (SELS)",
      description:
        'Demonstrates loading high-resolution photos into WebGL with compressed textures vs "naive" uncompressed textures from JPEG images',
    },
    {
      title: "Shazamio",
      description: "Keynote talk at Handmade Seattle 2021",
    },
    {
      title: "Alumni App",
      description:
        "Tests how different web browsers round geometry to pixels, dp, etc.",
    },
    {
      title: "Weekend Chef",
      description: "Light-weight runner for the esbuild compiler",
    },
    {
      title: "Messibo",
      description:
        "Explore web browser input pointer latency and try predictive tracking",
    },
  ];

  useEffect(() => {
    // Scroll to the top of the page when the Projects component is rendered or currentPage changes to 'projects'
    if (currentPage === "projects") {
      window.scrollTo(0, 0);
    }
  }, [currentPage]); // Dependency array: run this effect when currentPage changes

  return (
    <div className="min-h-screen bg-pink-100 text-gray-900 font-sans antialiased">
      {" "}
      {/* Light pink background */}
      <PageHeader setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <div className="w-full max-w-screen-xl mx-auto py-10 px-4 sm:px-6 md:px-8 flex flex-col">
        {/* Main Title - Removed from here as PageHeader now handles it */}
        <h1 className="sr-only">
          Passion projects and fun little experiments
        </h1>{" "}
        {/* Hidden visually, but still present for accessibility */}
        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {projectsData.map((project, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-xl font-medium mb-2 text-gray-900">
                {project.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                {project.description}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
export default Projects;
