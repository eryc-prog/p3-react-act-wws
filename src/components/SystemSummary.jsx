import React from "react";

function SystemSummary() {
  return (
    <div className="bg-gray-300 p-4 rounded-lg shadow-md mt-4 ml-4 mr-4">
      <h2 className="text-xl font-bold pb-2 text-center lg:text-left">
        System Overview
      </h2>
      <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 items-center lg:items-center justify-center lg:justify-center rounded-lg shadow-md bg-blue-50 pt-4 pb-4 ml-auto mr-auto">
        <p className="bg-green-500 p-4 rounded-lg shadow-md w-full lg:w-auto text-center lg:text-left">
          Active Meters: <br />
          <span className="text-xl font-semibold">845</span>
        </p>
        <p className="bg-red-200 p-4 rounded-lg shadow-md w-full lg:w-auto text-center lg:text-left">
          Pending Alerts: <br />
          <span className="text-xl font-semibold">12</span>
        </p>
        <p className="bg-green-200 p-4 rounded-lg shadow-md w-full lg:w-auto text-center lg:text-left">
          Water Quality:
          <br /> <span className="text-xl font-semibold">Good</span>
        </p>
        <p className="bg-blue-500 p-4 rounded-lg shadow-md w-full lg:w-auto text-center lg:text-left">
          System Status: <br />
          <span className="text-xl font-semibold">Operational</span>
        </p>
      </div>
    </div>
  );
}

export default SystemSummary;
