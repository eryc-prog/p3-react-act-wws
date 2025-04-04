import React from "react";
import { useNavigate } from "react-router-dom";
import waateere from "/src/assets/waateere.jpg";

function LandingPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard"); // Navigate to the dashboard
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${waateere})` }}
    >
      <div className="flex flex-col items-center justify-center h-screen p-auto m-auto text-center">
        <h1 className="font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Bugaan West Waterworks & Sanitation Association Inc.
        </h1>
        <p className="mb-6 text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl">
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
