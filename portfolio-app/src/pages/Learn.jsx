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
  const [showPayment, setShowPayment] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reference = `${formData.studentName
      .toLowerCase()
      .replace(/\s/g, "")}_${formData.classType}`;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/registrations/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, reference }),
      }
    );
    if (response.ok) {
      setShowPayment(true);
    } else {
      setMessage("Oops! Something went wrong. Please try again.");
    }
  };

  const PaymentPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-yellow-600 mb-4">
          Payment Instructions
        </h2>
        <p className="mb-2 text-lg">
          Please send <span className="font-semibold">1000 GHC</span> to{" "}
          <span className="font-semibold">0555964195</span>.
        </p>
        <p className="mb-2 text-lg">
          Use this reference:{" "}
          <span className="font-semibold">{`${formData.studentName
            .toLowerCase()
            .replace(/\s/g, "")}_${formData.classType}`}</span>
        </p>
        <p className="mb-4 text-md text-gray-600">
          We’ll confirm your payment within 24-48 hours. Check your email for
          class details after confirmation!
        </p>
        <button
          onClick={() => setShowPayment(false)}
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-full">
      <PageHeader setCurrentPage={setCurrentPage} currentPage={currentPage} />
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
                <p className="text-green-400 text-center">{message}</p>
              )}
              {showPayment && <PaymentPopup />}
            </form>
            <p className="text-sm text-gray-400 mt-4">
              Note: Payment instructions will be sent via email after
              registration...
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Learn;
