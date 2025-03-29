import React from "react";

function SystemSummary() {
  return (
    <div className="bg-gray-300 p-4 rounded-lg shadow-md mt-4 ml-15 mr-15">
      <h2 className="text-xl font-bold pb-2">System Overview</h2>
      <div className="flex space-x-4 items-center justify-center">
        <p className="bg-green-500 p-4 rounded-lg shadow-md">
          Active Meters: <br />
          <span className="text-xl font-semibold">845</span>
        </p>
        <p className="bg-red-200 p-4 rounded-lg shadow-md">
          Pending Alerts: <br />
          <span className="text-xl font-semibold">12</span>
        </p>
        <p className="bg-green-200 p-4 rounded-lg shadow-md">
          Water Quality:
          <br /> <span className="text-xl font-semibold">Good</span>
        </p>
        <p className="bg-blue-500 p-4 rounded-lg shadow-md">
          System Status: <br />
          <span className="text-xl font-semibold">Operational</span>
        </p>
      </div>
    </div>
  );
}

export default SystemSummary;
