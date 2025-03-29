import React from "react";
import { useNavigate } from "react-router-dom";
import wet from "/src/assets/wet.avif";

function LandingPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard"); // Navigate to the dashboard
  };

  return (
    <div
      className="bg-cover h-screen"
      style={{ backgroundImage: `url(${wet})` }}
    >
      <div className="flex flex-col items-center justify-center h-screen p-auto m-auto">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Bugaan West Waterworks & Sanitation Association Inc.
        </h1>
        <p className="text-lg mb-6 text-white">
          Data and Billing management system
        </p>
        <button
          onClick={handleNavigate}
          className="px-6 py-3 bg-sky-800 text-white rounded-lg hover:bg-sky-900 font-semibold shadow-md"
        >
          Let's Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
