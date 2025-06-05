// src/Work.js
import React, { useState, useEffect } from "react";
// Corrected import path for PageHeader.
// Assuming PageHeader is defined and exported within App.jsx,
// and Work.js is in a 'pages' folder, the path to go up one level
// and then import from App.jsx is '../App'.
import PageHeader from "../components/PageHeader"; // <--- Add this import

const Work = ({ setCurrentPage, currentPage }) => {
  // Define your work experience data as an array of objects
  const workExperience = [
    {
      title: "Senior Developer",
      company: "Fiberwave Ltd",
      duration: "February 2025 – Present",
      description:
        "As a Senior Developer at Fiberwave Ltd, I am responsible for leading the development of scalable web applications, designing and implementing robust backend services, and mentoring junior developers. My role involves collaborating with cross-functional teams to define project requirements, conducting code reviews and ensuring best practices, and troubleshooting complex technical issues.",
    },
    {
      title: "Co-Founder/COO",
      company: "Weekend Chef",
      duration: "December 2024",
      description:
        "At Weekend Chef, I've been instrumental in shaping the user experience and business model. My responsibilities included UI/UX design using Figma to prototype mobile app flows, prioritizing simplicity for ordering and chef management. I also designed and developed the web landing page using HTML, CSS, JavaScript, and React, creating an engaging platform introduction. Key contributions also involved developing marketing strategies, designing the business model, implementing dynamic pricing logic, and optimizing chef, delivery, and customer workflows.",
    },
    {
      title: "Production Officer",
      company: "KATECHNOLOGIES",
      duration: "June 2024 – September 2024",
      description:
        "During my time at KATECHNOLOGIES, I performed complete knockdown (CKD) and semi-knockdown (SKD) assembly of laptops and tablets, ensuring precision and quality control. I conducted rework on defective units to meet performance standards and managed the activation and initial setup of devices for end-users. Additionally, I provided general IT support, troubleshooting hardware and software issues to maintain smooth operations.",
    },
    {
      title: "Co-Founder/CEO",
      company: "SamaLTE",
      duration: "September 2022 – Present",
      description:
        "As a Full Stack Developer at SamaLTE, I've led both front-end and back-end web application development using HTML, CSS, JavaScript, and the Django framework. A significant part of my role involves spearheading game development, overseeing scriptwriting and story development using Unity. I've successfully managed end-to-end project lifecycles, ensuring timely delivery, resource optimization, and strategic alignment. My work also includes rigorous software application testing to identify and report bugs, collaborating closely with design teams to ensure quality standards are met, and using Figma for mobile app flow prototyping.",
    },
    {
      title: "Service Desk Technician",
      company: "Ghana Revenue Authority (GRA)",
      duration: "August 2019 – August 2020",
      description:
        "At GRA, I provided frontline support to staff and clients, addressing technical issues, inquiries, and complaints. I utilized the 'Manage Engine' app to log and track user-reported incidents and requests, and managed password resets for staff using the 'Trips' app, adhering to security protocols. I maintained high customer service standards through clear communication regarding issue resolutions and ticket status. My role also involved using the 'Trips' app to assign new businesses to tax offices and collaborating with third-party vendors like GCNET for support and issue resolution across various applications.",
    },
    {
      title: "Teaching Assistant",
      company: "St Francis College of Education",
      duration: "May 2018 – August 2018",
      description:
        "As a Teaching Assistant, I conducted IT practical tutorials in the lab, providing hands-on guidance and assistance to students. I supported the assessment officer in filling out student assessments and uploading them to the UCC portal, ensuring accurate and timely submissions. I also conducted invigilation during exams, maintaining a secure and fair testing environment, and supported the head of IT with diverse tasks including new initiative implementation, technical assistance, and general troubleshooting.",
    },
  ];

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
            {workExperience.map((entry, index) => (
              <div
                key={index} // Using index as key is acceptable here since the list is static and not reordered
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
            ))}
          </div>
        </div>
      </section>
    </div> // Added missing closing div tag for the main container
  );
};
export default Work;
