// --- Thoughts Page Component ---
import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader"; // <--- Add this import

const ThoughtsPage = ({ setCurrentPage, currentPage }) => {
  useEffect(() => {
    if (currentPage === "thoughts") {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  const placeholderImages = [
    "https://placehold.co/400x300/3D3D3D/A0A0A0?text=Landscape",
    "https://placehold.co/400x300/3D3D3D/A0A0A0?text=Still+Life",
    "https://placehold.co/400x300/3D3D3D/A0A0A0?text=Portrait",
    "https://placehold.co/400x300/3D3D3D/A0A0A0?text=B%26W",
    "https://placehold.co/400x300/3D3D3D/A0A0A0?text=Car",
    "https://placehold.co/400x300/3D3D3D/A0A0A0?text=People",
  ];

  return (
    <div className="flex flex-col min-h-full bg-gray-900 text-gray-100 font-sans antialiased">
      <PageHeader setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        {/* Main content for Thoughts & Ideas */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 mb-16">
          {" "}
          {/* mb-16 for spacing before gallery */}
          {/* Left Column Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-100">
              My relationship with photography
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              When I was 4 years old my grandfather gave me my first camera. He
              was an avid hobby photographer and collector of quirky Soviet-era
              cameras. The camera he gave me was a Kodak Pocket Instamatic which
              used this really funky cartridge-loaded 110 film. I took a lot of
              really bad photos.
            </p>
            <h2 className="text-3xl font-bold mb-6 text-gray-100 mt-8">
              Looking around
            </h2>
            <p className="text-lg leading-relaxed">
              Although I indeed took some terrible photos at first, I think
              having my own camera so early in life had a big impact on me. It
              made me conscious about my surroundings and perhaps even fed my
              life-long curiosity for the world around me. Looking up is fun and
              can reveal a whole new world, even in a place where you've been
              walking a hundred times.
            </p>
          </div>
          {/* Right Column Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-100">
              People & time
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Really, at the core of what intrigues me about photography are
              people and time. Photography is the closest thing we've got to
              time travel I think. Not only can photography capture a moment in
              time, later to be recalled, but photography has this magical way
              of allowing the recorder—the photographer—to create a picture that
              paints a moment in time in the way you experienced it, the way you
              felt about that moment.
            </p>
            <p className="text-lg leading-relaxed">
              Good photography to me tells some sort of story. It could be very
              obvious as in showing someone doing something or an important
              event, but often the "story" part is hidden and faint, the sort of
              story that you don't yet have words for in your mind but you know
              so well. A feeling or a state of mind.
            </p>
          </div>
          {/* Right Column Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-100">
              People & time
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Really, at the core of what intrigues me about photography are
              people and time. Photography is the closest thing we've got to
              time travel I think. Not only can photography capture a moment in
              time, later to be recalled, but photography has this magical way
              of allowing the recorder—the photographer—to create a picture that
              paints a moment in time in the way you experienced it, the way you
              felt about that moment.
            </p>
            <p className="text-lg leading-relaxed">
              Good photography to me tells some sort of story. It could be very
              obvious as in showing someone doing something or an important
              event, but often the "story" part is hidden and faint, the sort of
              story that you don't yet have words for in your mind but you know
              so well. A feeling or a state of mind.
            </p>
          </div>
        </section>

        {/* Photography Section */}
        <section className="mt-16 pt-8 border-t border-gray-700">
          {" "}
          {/* Added top border for separation */}
          <h2 className="text-3xl font-bold mb-2 text-gray-100 flex start">
            Gallery
          </h2>
          <p className="text-base text-gray-400 mb-8">
            Under construction!
            <img
              src="src/assets/under-construction.gif" // Dummy GIF URL (replace with your actual GIF URL)
              alt="Under Construction GIF"
              className="ml-2 w-6 h-6 inline-block" // Added margin-left, set width/height and inline-block for proper alignment
            />
          </p>{" "}
          {/* Changed arrow and added margin-bottom */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
            {placeholderImages.map((src, index) => (
              <div key={index} className="bg-gray-800">
                {" "}
                {/* Added padding and rounded corners */}
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover rounded-sm"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
export default ThoughtsPage;
