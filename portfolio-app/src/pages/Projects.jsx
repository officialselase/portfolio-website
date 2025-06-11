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
        "An interactive coding tutorial platform that lets learners pause a video and experiment with the code being taught—right in the same interface. Built to make digital skills education more accessible, especially in low-resource settings. Simple, fast, and browser-native. No installations. Just watch, edit, run, and learn",
    },
    {
      title: "SwapWing",
      description:
        "A sharing economy app for bartering goods and services—no money involved. Users list what they have and what they need, then match with others to swap directly.Built to explore alternative economies and reduce waste through trust-based exchange.",
    },
    {
      title: "Smart Election Ledger System (SELS)",
      description:
        "An election reporting app that collects real-time data directly from the field. An election reporting app that collects real-time data directly from the field. Equipped with live analytics, trends, and breakdowns for newsrooms, observers, and electoral commissions. Designed to be fast, tamper-resistant, and easy to deploy under pressure.",
    },
    {
      title: "Shazamio",
      description:
        "An app that helps artists get paid fairly when their music is played on radio or TV. It listens, tracks airtime, and calculates royalties based on actual usage—no guesswork. Built to support transparency between media houses and creatives.",
    },
    {
      title: "Alumni App",
      description:
        "A simple app to help former students stay connected—across years, programs, and campuses. Supports messaging, events, job sharing, and mentorship. Designed to feel like a quiet network: useful, but never noisy.",
    },
    {
      title: "Weekend Chef",
      description:
        "A sharing economy platform for home kitchens. Local cooks can onboard, prepare soups and stews in bulk, and serve nearby households. Built to lower food costs, reduce waste, and support small-scale culinary entrepreneurs.",
    },
    {
      title: "Messibo",
      description:
        "Testing a VoIP API framework. Designed during undergrad to explore the future of voice communication beyond traditional telcos. Built in Android Studio, with a focus on modularity, latency, and real-time call management.",
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
