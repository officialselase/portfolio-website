// --- About Page Component ---
import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader"; // <--- Add this import

const About = ({ setCurrentPage, currentPage }) => {
  const dummyImageUrl = "src/assets/react.svg"; // Original dummy image URL
  return (
    <div className="min-h-screen bg-green-100 text-gray-900 font-sans antialiased">
      {/* PageHeader for consistent navigation */}
      <PageHeader setCurrentPage={setCurrentPage} currentPage={currentPage} />

      <div className="w-full max-w-screen-xl mx-auto py-10 px-4 sm:px-6 md:px-8 flex flex-col ">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-16 md:space-x-6">
          {/* Left Side */}
          <div className="flex-1 text-lg space-y-6 pl-4 pr-4 text-center md:text-left">
            <p>
              My name is Selase k. Agbai. I'm a Ghanaian male living in Accra.
              i'm a builder of digital worlds.
            </p>
            <p>
              You can call me a Software Developer if you want. Interested in
              learning more about my work?{" "}
              <button
                onClick={() => setCurrentPage("work")}
                className="text-yellow-600 hover:underline cursor-pointer"
              >
                Read about my work →
              </button>
            </p>
            <p>
              These are my main projects. Some are super important software
              projects that are business worthy. A few, on the other hand, are
              just fun projects that i tried in my spare time. I enjoy tinkering
              with software engineering projects, AI, and games. I like building
              some pretty random stuff too that no one will ever use, ha ha.{" "}
              <button
                onClick={() => setCurrentPage("projects")}
                className="text-yellow-600 hover:underline cursor-pointer"
              >
                List of projects →
              </button>
            </p>
            <p>
              I'm an avid sports enthusiast and try to spend time
              watching/playing various sports. I play football, basketball,
              tennis. i don't play any american football but i watch a lot of
              it.
            </p>
            <p>
              Gaming is a big part of my life, but has lately taken a back seat
              as a past time hobby. My Gaming has had to take the backseat to
              other stuff. But at least now i i am considering making African
              themed games.
            </p>
          </div>

          {/* Right Side - Now only contains Portrait and Social Links */}
          <div className="flex-1 flex flex-col items-center">
            {/* Portrait and Social Links */}
            <div className="flex flex-col items-center">
              <img
                src={`src/assets/react.svg`}
                alt="Placeholder Portrait"
                className="w-48 h-auto mb-6"
              />
              <div className="text-right md:text-center text-base font-medium space-y-3 text-gray-700">
                <p>
                  <a
                    href="https://x.com/Sels_Officialgh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-600 hover:underline"
                  >
                    Twitter @Sels_Officialgh
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/officialselase"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-600 hover:underline"
                  >
                    GitHub /officialselase
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.figma.com/@selaseagbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-600 hover:underline"
                  >
                    Figma @selaseagbai
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.instagram.com/official_sels/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-600 hover:underline"
                  >
                    Instagram @official_sels...
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.facebook.com/officialselase"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-600 hover:underline"
                  >
                    Facebook @officialselase
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:rasmus@rsms.me"
                    className="hover:text-yellow-600 hover:underline"
                  >
                    Email officialselase@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Now with 3 columns on medium and larger screens */}
        <div className="mt-16 pt-8 border-t border-gray-300 grid grid-cols-1 md:grid-cols-3 gap-12 text-lg">
          {/* This website */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Developer/Teacher</h2>
            <p>
              <p className="mt-4">
                Things I enjoy developing: Web apps, Mobile apps, <br />{" "}
                Development Tools: Pen & Paper, Flutter, FlutterFlow, VScode,
                PyCharm, Android Studio, Git, Docker, Vite{" "}
              </p>
            </p>
            <p className="mt-4">
              Languages I Speak: Html, CSS, JavaScript, Python,
              Node.js(JavaScript runtime), Dart, SQL{" "}
            </p>
            <p className="mt-4">
              Frameworks & Libraries: React, Django, Flutter{" "}
            </p>
            <p className="mt-4">
              I am a believer in collaborative exchange of ideas, driven by deep
              passion for teaching. Sharing knowledge and best practices
              strengthens our collective capabilities. It's about building
              supportive communities where everyone feels empowered to learn and
              contribute. I am committed to helping the next generation of tech
              talent.{" "}
            </p>
          </div>

          {/* Programming - First two paragraphs */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Programming</h2>
            <p>
              There are so many great programming languages. It would be hard to
              pick a favorite. Really, the craft of programming is 99% “the
              fuzzy parts”—concepts, data structures, best practices, people,
              culture and many other aspects that are agnostic to a particular
              programming language.
            </p>
            <p className="mt-4">
              Python – a language I genuinely find 'cool' for its incredible
              versatility. It's not just about writing clean, readable code;
              it's about the sheer breadth of what you can achieve. From
              architecting robust backends with Django that power dynamic
              applications, to delving into the fascinating world of AI and
              machine learning, Python acts as a powerful backbone. The ability
              to seamlessly connect a React frontend or a Flutter mobile app to
              a Python-driven backend creates a truly full-stack experience that
              I find incredibly rewarding. It’s this synergy between powerful
              frontend frameworks and robust backend logic that allows me to
              tackle diverse challenges and contribute meaningfully to
              innovative projects.
            </p>
          </div>

          {/* Programming - Third and Fourth paragraphs (new column) */}
          <div>
            {/* No heading here, as it's a continuation of the "Programming" section */}
            <p>
              Flutter's ability to build beautiful, natively compiled
              applications for mobile, web, and desktop from a single codebase
              is incredibly exciting, allowing for rapid iteration and stunning
              visuals. React's component-based architecture and efficient
              rendering make it a joy to build dynamic and responsive web
              interfaces. It makes both intuitive to work with.
            </p>
            <p className="mt-4">
              I am always amazed by the sheer power and elegance of Flutter and
              React. There's a unique satisfaction in seeing an idea come to
              life, whether it's through Flutter's pixel-perfect UI and
              blazing-fast hot reload, enabling me to iterate on mobile and
              cross-platform designs with incredible speed, or React's
              declarative approach, which makes building complex, interactive
              web experiences feel intuitive and manageable. The vast ecosystems
              surrounding both of these technologies mean there's always a
              solution or a library to explore, pushing the boundaries of what's
              possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
