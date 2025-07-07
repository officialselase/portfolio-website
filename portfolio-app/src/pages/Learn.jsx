import React, { useState, useEffect, useCallback, useMemo } from "react";
import PageHeader from "../components/PageHeader";
import "../styles/Learn.css";
import GameCanvas from "../components/GameCanvas";

const VideoPlayer = React.memo(({ videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <img
        src={`https://img.youtube.com/vi/${videoUrl.split("v=")[1]}/0.jpg`} // Corrected YouTube thumbnail URL format
        alt="Mr. ICT Demo Thumbnail"
        className="video-thumbnail"
        onClick={handleClick}
        loading="lazy"
      />
      {isOpen && (
        <div
          className="video-modal"
          role="dialog"
          aria-label="Mr. ICT Demo Video"
        >
          <iframe
            src={`https://www.youtube.com/embed/${
              videoUrl.split("v=")[1]
            }?autoplay=1`} // Corrected YouTube embed URL format
            title="Mr. ICT Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64"
          />
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </>
  );
});

const FormSection = React.memo(
  ({ onSubmit, formData, handleChange, isPopupOpen, setIsPopupOpen }) => (
    <section className="form-section" aria-label="Join Community Form">
      <h2 className="text-xl font-semibold mb-4">
        Ready to Join Our Coding Community?
      </h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          placeholder="Student's Full Name"
          className="w-full p-2 border rounded"
          required
          aria-label="Student's Full Name"
        />
        <input
          name="parentContact"
          value={formData.parentContact}
          onChange={handleChange}
          placeholder="Parent/Guardian's Contact Number"
          className="w-full p-2 border rounded"
          required
          aria-label="Parent/Guardian's Contact Number"
        />
        <input
          name="parentEmail"
          value={formData.parentEmail}
          onChange={handleChange}
          placeholder="Parent/Guardian's Email"
          type="email"
          className="w-full p-2 border rounded"
          required
          aria-label="Parent/Guardian's Email"
        />
        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Student's Age"
          type="number"
          className="w-full p-2 border rounded"
          required
          aria-label="Student's Age"
        />
        <select
          name="classType"
          value={formData.classType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
          aria-label="Class Type"
        >
          <option value="">Select Class Type</option>
          <option value="web">
            Web Development & Block-Based Programming (JHS-SHS) - GHS800
          </option>
          <option value="react">
            React Frontend Development (Tertiary-graduates) - GHS1500
          </option>{" "}
          {/* Changed 'app' to 'react' for clarity */}
          <option value="django">
            Python Django Backend Development (Tertiary-graduates) - GHS1500
          </option>{" "}
          {/* Changed 'app' to 'django' for clarity */}
          <option value="flutter">
            Flutter Mobile App Development (Tertiary-graduates) - GHS1500
          </option>{" "}
          {/* Changed 'app' to 'flutter' for clarity */}
        </select>
        <select
          name="classOption"
          value={formData.classOption}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
          aria-label="Class Option"
        >
          <option value="">Select Class Option</option>
          <option value="morning">Morning Session 10am - 12pm</option>
          <option value="afternoon">Afternoon Session 12:30pm - 2:30pm</option>
          <option value="evening">Evening Session 3pm - 5pm</option>
        </select>
        <button type="submit" className="block mx-auto">
          Join Now
        </button>
      </form>
      {isPopupOpen && (
        <div
          className="popup"
          role="alertdialog"
          aria-label="Registration Success"
        >
          <div className="popup-content">
            <h3>Congratulations!</h3>
            <p>
              You’re well on your way to registering for the course and joining
              our community of coders. Payment instructions are as follows:{" "}
              <br /> Send payment via Mobile Money to: **0555964195** <br />
              Use this reference format: **YourName_Course** <br /> Example:
              `selase_react`, `kwame_flutter`, `ama_django` <br />
              <br />
              After payment, you will receive: <br />
              - Class schedule via email and WhatsApp within 24 hours. <br />
              - Your exclusive WhatsApp community group link. <br />- Course
              materials and setup instructions will all be provided. <br />
              <br />
              We’ll confirm your payment and send details via email/WhatsApp.
              <br /> Thank You!
            </p>
            <button onClick={() => setIsPopupOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
);

const Learn = ({ setCurrentPage, currentPage }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentContact: "",
    parentEmail: "",
    age: "",
    classType: "",
    classOption: "",
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const reference = `${formData.studentName
        .toLowerCase()
        .replace(/\s/g, "")}_${formData.classType}`;
      console.log("Submitting:", { ...formData, reference });
      // Simulate local success (no backend)
      const response = { status: 201 }; // Simulating a successful creation response
      // No need for 'await response;' if response is a plain object, only if it's a Promise from fetch
      console.log("Response Status:", response.status);
      if (response.status === 201) {
        setIsPopupOpen(true);
        setFormData({
          studentName: "",
          parentContact: "",
          parentEmail: "",
          age: "",
          classType: "",
          classOption: "",
        });
      } else {
        // You can add logic here to handle simulated errors, e.g., show a different popup
        console.error("Form submission failed.");
        // setIsPopupOpen(true); // Or a specific error popup
      }
    },
    [formData]
  );

  const sections = useMemo(
    () => [
      {
        id: "welcome",
        content: (
          <section className="welcome-section" aria-label="Welcome Section">
            <img
              src="/src/assets/under-construction.gif" // Placeholder for recommended image
              alt="Welcome to our Coders Community"
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg mb-6" // Added some styling for the image
            />
            <h1 className="text-3xl font-bold text-blue-700">
              Welcome to Our Coders Community!
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700 mt-2">
              From JHS to University, Start Your Coding Journey!
            </h2>
          </section>
        ),
      },
      {
        id: "mission",
        content: (
          <section className="section" aria-label="Mission Section">
            <h2 className="text-2xl font-semibold text-blue-700">
              Our Mission: Empowering the Next Generation of Tech Leaders
            </h2>
            <p className="text-gray-700 mt-4">
              At the heart of our community is a singular, powerful mission:{" "}
              <strong className="text-blue-600">
                to cultivate a thriving ecosystem where young coders can grow,
                connect, and build the future.
              </strong>{" "}
              We're not just offering classes; we're forging a lifelong bond
              among aspiring innovators. We believe in empowering every student
              to unlock their potential, transforming curiosity into code and
              dreams into digital realities. Join us as we shape the tech
              leaders of tomorrow, together.
            </p>
          </section>
        ),
      },
      {
        id: "mr-ict",
        content: (
          <section className="section" aria-label="Mr. ICT Section">
            <h2 className="text-2xl font-semibold text-blue-700">
              Meet Mr. ICT: Your Interactive Coding Companion
            </h2>
            <p className="text-gray-700 mt-4">
              Get ready to revolutionize the way you learn to code! Introducing{" "}
              <strong className="text-blue-600">
                Mr. ICT, our groundbreaking Interactive Coding Platform,
                launching soon!
              </strong>{" "}
              Imagine a learning environment where you can pause, edit, and
              understand code in real-time. Mr. ICT is designed to make complex
              concepts intuitive and engaging, providing a truly hands-on
              experience.
            </p>
            <p className="text-gray-600 italic mt-2">
              Watch the demo and see how Mr. ICT brings coding to life!
            </p>
            {/* Note: I've updated the YouTube URL format in VideoPlayer component directly based on common practices */}
            <VideoPlayer videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />{" "}
            {/* Replaced generic '2' with a sample YouTube video ID for valid URL structure */}
          </section>
        ),
      },
      {
        id: "inspiration",
        content: (
          <section className="section" aria-label="Inspiration Section">
            <h2 className="text-2xl font-semibold text-blue-700">
              Why Code? Unlock a World of Possibilities
            </h2>
            <p className="text-gray-700 mt-4">
              In today's rapidly evolving world, coding isn't just a skill—it's
              a superpower. It opens doors to boundless creativity, critical
              thinking, and unparalleled career opportunities. From building the
              next viral app to designing immersive games, coding empowers you
              to bring your ideas to life and solve real-world problems.
            </p>
            <p className="text-gray-700 mt-2">
              With the exciting emergence of "vibe coding" and new technological
              trends, understanding the fundamentals has become more crucial
              than ever. Master the basics with us, and you'll be perfectly
              positioned to ride the wave of innovation!
            </p>
            <p className="text-gray-600 italic mt-2">
              Did you know coders build the games and apps you love? Imagine
              creating your own!
            </p>
          </section>
        ),
      },
      {
        id: "form",
        content: (
          <section className="section" aria-label="Join Community Form">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Ready to Join Our Coding Community?
            </h2>
            <p className="text-gray-700 mb-6">
              Your journey into the exciting world of coding starts here.
              Whether you're a JHS student taking your first steps, an SHS
              student looking to deepen your skills, or a tertiary graduate
              aiming for specialized development, our community offers a pathway
              for everyone.
            </p>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Choose Your Path:
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>
                <strong className="text-blue-500">
                  Web Development & Block-Based Programming (JHS-SHS):
                </strong>{" "}
                Build interactive websites and learn foundational programming
                concepts through engaging, visual tools.
              </li>
              <li>
                <strong className="text-blue-500">
                  React Frontend Development (Tertiary-Graduates):
                </strong>{" "}
                Master the art of crafting dynamic and responsive user
                interfaces with one of the industry's most in-demand frameworks.
              </li>
              <li>
                <strong className="text-blue-500">
                  Python Django Backend Development (Tertiary-Graduates):
                </strong>{" "}
                Dive into the powerful world of server-side programming,
                database management, and API creation.
              </li>
              <li>
                <strong className="text-blue-500">
                  Flutter Mobile App Development (Tertiary-Graduates):
                </strong>{" "}
                Learn to build beautiful, natively compiled applications for
                mobile, web, and desktop from a single codebase.
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Flexible Class Options:
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
              <li>Morning Session 10am - 12pm</li>
              <li>Afternoon Session 12:30pm - 2:30pm</li>
              <li>Evening Session 3pm - 5pm</li>
            </ul>
            <p className="text-blue-700 font-bold text-lg mb-4">
              Join Now and become part of a community that codes, innovates, and
              grows together!
            </p>
            <FormSection
              onSubmit={handleSubmit}
              formData={formData}
              handleChange={handleChange}
              isPopupOpen={isPopupOpen}
              setIsPopupOpen={setIsPopupOpen}
            />
          </section>
        ),
      },
      {
        id: "game",
        content: (
          <section className="section" aria-label="Interactive Game Section">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Challenge Your Mind!
            </h2>
            <p className="text-gray-700 mb-6">
              Take a break from reading and put your problem-solving skills to
              the test with our fun coding-inspired game!
            </p>
            <GameCanvas />
          </section>
        ),
      },
    ],
    [handleSubmit, formData, handleChange, isPopupOpen, setIsPopupOpen]
  );

  return (
    <div className="learn-container">
      <PageHeader
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        cartCount={0}
      />
      {sections.map((section) => (
        <div key={section.id}>{section.content}</div>
      ))}
    </div>
  );
};

export default Learn;
