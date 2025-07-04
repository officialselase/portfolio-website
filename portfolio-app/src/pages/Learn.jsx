import React, { useState, useEffect, useCallback, useMemo } from "react";
import PageHeader from "../components/PageHeader";
import "../styles/Learn.css";

const VideoPlayer = React.memo(({ videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <img
        src={`https://img.youtube.com/vi/${videoUrl.split("v=")[1]}/0.jpg`}
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
            }?autoplay=1`}
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
          <option value="web">Web Development</option>
          <option value="app">Block-Based Programming</option>
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
          <option value="jhs_leavers">JHS Leavers (July 8th)</option>
          <option value="jhs_weekend">JHS Weekend (Soon)</option>
          <option value="shs_vacation">SHS Vacation (Soon)</option>
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
              You’ve registered for the course. Please send GHS 800 to
              0555964195 with reference{" "}
              {formData.studentName.toLowerCase().replace(/\s/g, "")}_
              {formData.classType}. We’ll confirm manually and send details via
              email/WhatsApp.
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
      const response = { status: 201 };
      const data = await response;
      console.log("Response:", response.status, data);
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
        setIsPopupOpen(true); // Show error popup later if needed
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
              src="/assets/under-construction.gif"
              alt="Young Coders Community Under Construction"
              loading="lazy"
            />
            <h1 className="text-3xl font-bold text-blue-700">
              Welcome to the Young Coders Community!
            </h1>
            <p className="text-lg mt-2 text-gray-600">
              From JHS to University, Start Your Coding Journey!
            </p>
          </section>
        ),
      },
      {
        id: "mission",
        content: (
          <section className="section" aria-label="Mission Section">
            <h2 className="text-2xl font-semibold text-blue-700">
              Our Mission
            </h2>
            <p className="text-gray-700 mt-4">
              We’re creating a space for young coders to grow, connect, and
              build—empowering the next generation of tech leaders!
            </p>
          </section>
        ),
      },
      {
        id: "mr-ict",
        content: (
          <section className="section" aria-label="Mr. ICT Section">
            <h2 className="text-2xl font-semibold text-blue-700">
              Meet Mr. ICT
            </h2>
            <p className="text-gray-700 mt-4">
              Our Interactive Coding Platform Launching Soon! Pause, edit, and
              learn coding in real-time. Watch the demo!
            </p>
            <VideoPlayer videoUrl="https://www.youtube.com/watch?v=yourDemoID" />
          </section>
        ),
      },
      {
        id: "inspiration",
        content: (
          <section className="section" aria-label="Inspiration Section">
            <h2 className="text-2xl font-semibold text-blue-700">Why Code?</h2>
            <p className="text-gray-700 mt-4">
              Coding opens doors to jobs, creativity, and problem-solving. Start
              your journey today! With the emergence of vibe coding,
              understanding the fundamentals has become even more crucial—master
              the basics to ride the trend!
            </p>
            <p className="text-gray-600 italic mt-2">
              Did you know coders build games and apps you love?
            </p>
          </section>
        ),
      },
      {
        id: "form",
        content: (
          <FormSection
            onSubmit={handleSubmit}
            formData={formData}
            handleChange={handleChange}
            isPopupOpen={isPopupOpen}
            setIsPopupOpen={setIsPopupOpen}
          />
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
      <footer className="footer" aria-label="Contact Footer">
        <p className="text-gray-700">
          Contact Us: Call/WhatsApp 0555964195 or email{" "}
          <a
            href="mailto:officialselase@gmail.com"
            className="text-blue-500 underline"
          >
            officialselase@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Learn;
