import React from "react";

function DataManagementPage() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4 text-black">
        Bugaan West Waterworks & Sanitation Association Inc.
      </h1>
      <h2 className="text-lg mb-6 text-black">Member's data management</h2>
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          // value={searchQuery}
          onChange={(e) => e.target.value}
          placeholder="Search..."
          className="w-auto p-2 border rounded clear-left"
        />
      </div>
      <div className="bg-gray-300 p-4 rounded-lg shadow-md mt-4 ml-4 mr-4">
        <h2 className="text-xl font-bold text-left">All Members</h2>
        <div className="bg-white p-4 rounded-lg shadow-md mt-4 ml-4 mr-4">
          <table className="text-center w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-400">
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Previous Reading</th>
                <th className="border border-gray-300 p-2">Present Readings</th>
                <th className="border border-gray-300 p-2">
                  Water Consumption
                </th>
                <th className="border border-gray-300 p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">
                  Eric H. Encarnacion
                </td>
                <td className="border border-gray-300 p-2">3312</td>
                <td className="border border-gray-300 p-2">3345</td>
                <td className="border border-gray-300 p-2">33 m³</td>
                <td className="border border-gray-300 p-2 text-green-300 font-semibold">
                  660
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataManagementPage;
