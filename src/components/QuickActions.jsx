import React from "react";
import { Link } from "react-router-dom";

function QuickActions() {
  return (
    <div className="body-font bg-gray-300 shadow-md pb-3 mt-6 pt-3 ml-4 mr-4 mb-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold pl-2 pt-2 pb-2 ml-4bg text-left">
        Quick Actions
      </h3>
      <div className="mt-4 space-x-3 max-w-7xl text-center place-items-center text-white-600 rounded-lg shadow-md bg-blue-50 pt-4 pb-4 ml-4 mr-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <Link to="/dataManagement">Data Management</Link>
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          <Link to="/billing">Billing Calculator</Link>
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          <Link to="/maintenance">Maintenance Request</Link>
        </button>
      </div>
    </div>
  );
}

export default QuickActions;
