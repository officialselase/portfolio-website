import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader"; // <--- Add this import

// --- Home Page Component ---
const Home = ({ setCurrentPage, currentPage }) => {
  const projects = [
    {
      title: "stuff",
      description:
        "Random media I've collected since the early 2000s, restored from an old hard drive. I've added some new stuff, too.",
    },
    {
      title: "Mr. ICT",
      description:
        "An interactive coding tutorial platform that lets learners pause a video and experiment with the code being taught—right in the same interface.",
    },
    {
      title: "SwapWing",
      description:
        "A sharing economy app for bartering goods and services—no money involved.",
    },
    {
      title: "Smart ELection Ledger System (SELS)",
      description:
        "An election reporting app that collects real-time data directly from the field.",
    },
    {
      title: "Shazamio",
      description:
        "An app that helps artists get paid fairly when their music is played on radio or TV.",
    },
    {
      title: "Alumni App",
      description:
        "A simple app to help former students stay connected—across years, programs, and campuses.",
    },
    {
      title: "Weekend Chef",
      description: "A sharing economy platform for home kitchens.",
    },
    {
      title: "Messibo",
      description: "Testing a VoIP API framework.",
    },
  ];

  const thoughts = [
    {
      title: "CareSpot",
      date: "Dec 2024",
      snippet:
        'CareSpot is a burgeoning movement dedicated to revolutionizing healthcare access in low-income environments through innovative meditech solutions. Founded on the principle of "tech meets medicine," our mission is to leverage cutting-edge technology to deliver essential medical services where they are most needed, with a primary focus on pediatric care. We envision a future where geographical and economic barriers no longer dictate a child\'s access to quality healthcare. CareSpot aims to develop and deploy a range of user-friendly, cost-effective digital tools and platforms committed to empowering families and local healthcare providers, fostering healthier futures for the next generation',
    },
    {
      title: "Wearable neonatal seizure detection system",
      date: "May 2025",
      snippet:
        "Gotalk exists to make it easy for programs to talk with one another over the internet, like a web app coordinating with a web server, or a bunch of programs dividing work amongst eachother.",
    },
    {
      title: "AI has finally come to stay",
      date: "Nov 2024",
      snippet:
        "The rapid ascent of Artificial Intelligence from a niche technological pursuit to a pervasive force in daily life is undeniable. What was once the stuff of science fiction movies is now woven into the fabric of our very existence. I won't talk about the trend i noticed where movies used to predict their existence to predicting them gaining consciousness, wink",
    },
    {
      title:
        "Game of thrones - How a song of ice and fire applies to life as we know it",
      date: "Dec 2020",
      snippet:
        "George R.R. Martin's A Song of Ice and Fire is not merely a fantasy saga; it is a brutal, unflinching deconstruction of power, morality, and the devastating consequences of human ambition. Within its sprawling, meticulously crafted tapestry of warring houses, ancient magic, and existential threats, the series resonates most profoundly through its relentless subversion of traditional heroic narratives. It is a world where virtue is often punished, and the most honorable intentions can pave the road to ruin.",
    },
    {
      title:
        "The future of communication is data (the impetus for my undergraduate project)",
      date: "May 2019",
      snippet:
        "In Ghana, the landscape of communication is undergoing a profound transformation, with data rapidly supplanting traditional airtime as the primary medium for connection",
    },
    {
      title: "Techtalk(GTUC)",
      date: "Oct 2018",
      snippet: "Theo and I organized GTUC Techtalk",
    },
    {
      title: "GTUC Radio",
      date: "Oct 2018",
      snippet:
        "I developed the first interface for GTUC campus radio. we successfully piloted and broadcasted online",
    },
  ];

  return (
    <div className="flex flex-col min-h-full">
      <PageHeader setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-gray-100 mt-4">
          {/* Projects Column */}
          <div className="col-span-1">
            {/* Made the Projects heading a clickable button */}
            <button
              onClick={() => setCurrentPage("projects")}
              className="text-xl font-bold mb-6 text-yellow-300 p-0 bg-transparent border-none cursor-pointer outline-none text-left hover:underline"
            >
              Projects
            </button>
            <ul className="list-none m-0 p-0 flex flex-col space-y-6">
              {projects.map((item, index) => (
                <li key={index}>
                  {/* Individual project items are now just divs, not links */}
                  <div className="block text-inherit no-underline relative transition-all duration-200 text-left">
                    <h3 className="text-lg font-medium mb-1 text-yellow-300">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400 mt-1">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
              <li>
                {/* This button still navigates to projects page */}
                <button
                  onClick={() => setCurrentPage("projects")}
                  className="text-sm font-medium mt-4 bg-transparent border-none text-inherit cursor-pointer p-0 outline-none hover:underline transition-all duration-200"
                >
                  See all {projects.length} projects &rarr;
                </button>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            {/* Made the Thoughts & ideas heading a clickable button */}
            <button
              onClick={() => setCurrentPage("thoughts")}
              className="text-xl font-bold mb-6 text-yellow-300 p-0 bg-transparent border-none cursor-pointer outline-none text-left hover:underline"
            >
              Thoughts & ideas
            </button>

            <ul className="list-none m-0 p-0 flex flex-col space-y-6">
              {thoughts.map((item, index) => (
                <li key={index}>
                  {/* Replaced <a> with <div> and kept original styling for appearance */}
                  <div className="block text-inherit no-underline relative transition-all duration-200">
                    <h3 className="text-lg font-medium mb-1 text-yellow-300">
                      {item.title}
                    </h3>
                    {item.snippet && (
                      <p className="text-sm leading-relaxed text-gray-400 mt-1">
                        {item.snippet}
                      </p>
                    )}
                    {item.date && (
                      <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                    )}
                  </div>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setCurrentPage("thoughts")}
                  className="text-sm font-medium mt-4 bg-transparent border-none text-inherit cursor-pointer p-0 outline-none hover:underline transition-all duration-200"
                >
                  Browse all {thoughts.length} articles &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column: Bio and CTA boxes */}
          <div className="col-span-1 flex flex-col space-y-10">
            {/* Bio */}
            <p className="text-lg leading-relaxed font-normal">
              I’m a Ghanaian he/him living in Accra. I like to think of myself
              as a builder of worlds, <worlds className="s"></worlds> Software
              is the medium through which I express myself.
            </p>

            {/* CTA 1: The Inter typeface family */}
            <a
              onClick={() => setCurrentPage("shop")}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-800 rounded-md text-inherit no-underline transition-colors duration-200 hover:bg-gray-700"
            >
              <p className="text-base font-normal text-gray-300">
                Learn React/Flutter
              </p>
              <p className="text-lg font-medium text-yellow-300 flex items-center justify-between mt-1">
                Register Now!
                <span className="ml-2">&rarr;</span>
              </p>
            </a>

            {/* CTA 2: Buy a nice poster */}
            <a
              onClick={() => setCurrentPage("shop")}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-800 rounded-md text-inherit no-underline transition-colors duration-200 hover:bg-gray-700"
            >
              <p className="text-lg font-medium text-yellow-300 flex items-center justify-between">
                Buy a nice poster
                <span className="ml-2">&rarr;</span>
              </p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Home;
