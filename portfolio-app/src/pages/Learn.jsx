import React, { useState } from "react";
import PageHeader from "../components/PageHeader";

const Learn = ({ setCurrentPage, currentPage }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    parentContact: "",
    parentEmail: "",
    age: "",
    classType: "",
    classOption: "",
    paymentDetails: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/registrations/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    if (response.ok)
      setMessage("Registration successful! We’ll contact you soon.");
    else setMessage("Oops! Something went wrong. Please try again.");
  };

  return (
    <div className="flex flex-col min-h-full">
      <PageHeader setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-gray-100 mt-4">
          {/* Welcome Column */}
          <div className="col-span-1">
            <button
              onClick={() => setCurrentPage("learn")}
              className="text-xl font-bold mb-6 text-yellow-300 p-0 bg-transparent border-none cursor-pointer outline-none text-left hover:underline"
            >
              Welcome to Coding Adventures
            </button>
            <p className="text-lg leading-relaxed text-gray-300 mt-4">
              Step into a magical world where young minds soar! Our coding
              classes are designed to spark creativity and build skills for
              Junior High School (JHS) students, JHS leavers, and soon, Senior
              High School (SHS) students. With every line of code, you’ll craft
              your own digital dreams—online, safe, and full of fun!
            </p>
          </div>

          <div className="col-span-1">
            <button
              onClick={() => setCurrentPage("learn")}
              className="text-xl font-bold mb-6 text-yellow-300 p-0 bg-transparent border-none cursor-pointer outline-none text-left hover:underline"
            >
              Class Schedule
            </button>
            <ul className="list-none m-0 p-0 flex flex-col space-y-6">
              <li>
                <div className="block text-inherit no-underline relative transition-all duration-200 text-left">
                  <h3 className="text-lg font-medium mb-1 text-yellow-300">
                    JHS Leavers
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400 mt-1">
                    Starting July 8th, ongoing—perfect for those awaiting SHS!
                  </p>
                </div>
              </li>
              <li>
                <div className="block text-inherit no-underline relative transition-all duration-200 text-left">
                  <h3 className="text-lg font-medium mb-1 text-yellow-300">
                    JHS Weekend Classes
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400 mt-1">
                    Coming soon—weekend fun during school terms!
                  </p>
                </div>
              </li>
              <li>
                <div className="block text-inherit no-underline relative transition-all duration-200 text-left">
                  <h3 className="text-lg font-medium mb-1 text-yellow-300">
                    SHS Vacation Classes
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400 mt-1">
                    Coming soon—exciting summer coding adventures!
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Registration Form Column */}
          <div className="col-span-1 flex flex-col space-y-10">
            <p className="text-lg leading-relaxed font-normal text-gray-300">
              Join our online coding journey via Google Meet! Classes are
              strictly virtual, filled with laughter and learning. Register
              below to secure your spot.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Student's Full Name"
                className="w-full p-2 bg-gray-800 text-gray-100 rounded-full"
                required
              />
              <input
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Parent/Guardian's Full Name"
                className="w-full p-2 bg-gray-800 text-gray-100 rounded-full"
                required
              />
              <input
                name="parentContact"
                value={formData.parentContact}
                onChange={handleChange}
                placeholder="Parent/Guardian's Contact Number"
                className="w-full p-2 bg-gray-800 text-gray-100 rounded-full"
                required
              />
              <input
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleChange}
                placeholder="Parent/Guardian's Email"
                type="email"
                className="w-full p-2 bg-gray-800 text-gray-100 rounded-full"
                required
              />
              <input
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Student's Age"
                type="number"
                className="w-full p-2 bg-gray-800 text-gray-100 rounded-full"
                required
              />
              <select
                name="classType"
                value={formData.classType}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 text-gray-100 rounded-full"
                required
              >
                <option value="">Select Class Type</option>
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
              </select>
              <select
                name="classOption"
                value={formData.classOption}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 text-gray-100 rounded-full"
                required
              >
                <option value="">Select Class Option</option>
                <option value="jhs_leavers">JHS Leavers (July 8th)</option>
                <option value="jhs_weekend">JHS Weekend (Soon)</option>
                <option value="shs_vacation">SHS Vacation (Soon)</option>
              </select>
              <input
                name="paymentDetails"
                value={formData.paymentDetails}
                onChange={handleChange}
                placeholder="Payment Details (e.g., Transaction ID)"
                className="w-full p-2 bg-gray-800 text-gray-100 rounded-full"
                required
              />
              <button
                type="submit"
                className="w-full bg-yellow-300 text-gray-900 font-medium py-2 rounded-full hover:bg-yellow-400 transition duration-200"
              >
                Register for Coding Magic!
              </button>
              {message && (
                <p className="text-green-400 text-center">{message}</p>
              )}
            </form>
            <p className="text-sm text-gray-400 mt-4">
              Note: Payment instructions will be sent via email after
              registration. Classes are held online via Google Meet—get ready to
              shine!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Learn;
