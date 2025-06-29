import React, { useState, useEffect } from "react";
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
  });
  const [message, setMessage] = useState("");
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    const userResponse = window.prompt(
      "Page Under Construction! This site is still being built. Click OK to continue exploring or Cancel to leave."
    );
    if (userResponse === null) {
      window.location.href = "home"; // Redirect to home if Cancel is clicked    } else {
      setShowGif(true);
    }
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reference = `${formData.studentName
      .toLowerCase()
      .replace(/\s/g, "")}_${formData.classType}`;
    console.log(
      "Submitting to:",
      `http://127.0.0.1:8000/api/registrations/`,
      "Data:",
      { ...formData, reference }
    );
    const response = await fetch(`http://127.0.0.1:8000/api/registrations/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        student_name: formData.studentName,
        parent_name: formData.parentName,
        parent_contact: formData.parentContact,
        parent_email: formData.parentEmail,
        age: formData.age,
        class_type: formData.classType,
        class_option: formData.classOption,
        reference: reference,
      }),
    });
    let data;
    try {
      data = await response.json();
    } catch (error) {
      console.error("Failed to parse response:", error);
      data = { error: "Invalid response from server" };
    }
    console.log("Response Status:", response.status, "Data:", data);
    if (response.status === 201) {
      setFormData({
        studentName: "",
        parentName: "",
        parentContact: "",
        parentEmail: "",
        age: "",
        classType: "",
        classOption: "",
      });
      setMessage(
        `Thank you for registering for the course! Please send GHC 1000 to 0555964195 with reference ${reference}. Once payment is confirmed manually by me, we will update the backend from pending to paid and send an email manually with the schedule.`
      );
    } else {
      setMessage(
        `Oops! ${data.error || "Something went wrong. Please try again."}`
      );
    }
  };

  return (
    <div className="flex flex-col min-h-full">
      <PageHeader setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {showGif && (
        <div className="text-center py-4">
          <img
            src="/under-construction.gif"
            alt="Under Construction"
            className="mx-auto"
          />
          <p className="text-gray-300 mt-2">
            Stay tuned—more exciting features coming soon!
          </p>
        </div>
      )}
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-gray-100 mt-4">
          <div className="col-span-1">
            <button
              onClick={() => setCurrentPage("learn")}
              className="text-xl font-bold mb-6 text-yellow-300 p-0 bg-transparent border-none cursor-pointer outline-none text-left hover:underline"
            >
              Welcome to Coding Adventures
            </button>
            <p className="text-lg leading-relaxed text-gray-300 mt-4">
              Step into a magical world where young minds soar!...
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
                <div className="block text-inherit...">JHS Leavers...</div>
              </li>
              <li>
                <div className="block text-inherit...">JHS Weekend...</div>
              </li>
              <li>
                <div className="block text-inherit...">SHS Vacation...</div>
              </li>
            </ul>
          </div>
          <div className="col-span-1 flex flex-col space-y-10">
            <p className="text-lg leading-relaxed font-normal text-gray-300">
              Join our online coding journey via Google Meet!...
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
              <button
                type="submit"
                className="w-full bg-yellow-300 text-gray-900 font-medium py-2 rounded-full hover:bg-yellow-400 transition duration-200"
              >
                Register for Coding Magic!
              </button>
              {message && (
                <p className="text-green-400 text-center p-4 bg-gray-800 rounded-lg mt-4">
                  {message}
                </p>
              )}
            </form>
            <p className="text-sm text-gray-400 mt-4">
              Note: Payment instructions will be provided after registration...
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Learn;
