import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader";

const Learn = ({ setCurrentPage, currentPage }) => {
  useEffect(() => {
    const userResponse = window.prompt(
      "Page Under Construction! Choose an option:\n1. Register Now\n2. Go to Home"
    );
    if (userResponse) {
      if (
        userResponse.toLowerCase().includes("1") ||
        userResponse.toLowerCase().includes("register")
      ) {
        window.location.href = "https://forms.gle/5Z4rmQqYw8mRN36S6";
      } else if (
        userResponse.toLowerCase().includes("2") ||
        userResponse.toLowerCase().includes("home")
      ) {
        window.location.href = "/";
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-full">
      <PageHeader setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        <section className="text-gray-100 text-center">
          <div className="flex justify-center items-center mb-8">
            <img
              src="src/assets/under-construction.gif"
              alt="Under Construction"
              className="w-32 h-32 mr-4"
            />
            <h1 className="text-2xl font-bold">Page Under Construction</h1>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              ~WEB DEVELOPMENT and BLOCK-BASED PROGRAMMING~
            </h2>
            <p>
              <strong>Dates:</strong> 8th July, 2025 - 5th August, 2025 (4 weeks
              intensive)
            </p>
            <p>
              <strong>Schedule:</strong> Mondays - Thursdays
            </p>
            <p>
              <strong>Sessions:</strong> Morning: 10am - 12noon | Afternoon: 2pm
              - 4pm each day
            </p>
            <p>
              <strong>Rate:</strong> GHS 800
            </p>
            <p>
              <strong>Event Address:</strong> Strictly online. Link and schedule
              will be sent via email and WhatsApp as well.
            </p>
            <p>
              <strong>Certificate:</strong> Participation certificate awarded
              after completion of course.
            </p>
            <p>
              <strong>Payment Instructions:</strong> Please send GHS 800 to
              0555964195 with your full name as the reference. Once payment is
              confirmed manually, we will update the status and send the
              schedule via email or WhatsApp.
            </p>
            <p>
              <strong>Contact Us:</strong> Call/WhatsApp 0555964195 or email
              officialselase@gmail.com
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Learn;
