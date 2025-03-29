import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaWater,
  FaFileInvoiceDollar,
  FaTools,
  FaChartBar,
  FaCog,
} from "react-icons/fa";
import React from "react";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-500 text-white h-screen p-5 fixed">
      <h2 className="text-2xl font-bold mb-4 text-center">
        <nav>
          <Link to="/">Waterworks </Link>
        </nav>
      </h2>
      <nav>
        <ul>
          <li className="mb-2 bg-gray-600 p-4 rounded-lg shadow-md mt-4 text-white text-left hover:bg-gray-700">
            <FaTachometerAlt className="inline-flex pr-0.5" />
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="mb-2 bg-gray-600 p-4 rounded-lg shadow-md mt-4 text-white text-left hover:bg-gray-700">
            <FaWater className="inline-flex pr-0.5 mr-1" />
            <Link to="/dataManagement">Data Management</Link>
          </li>
          <li className="mb-2 bg-gray-600 p-4 rounded-lg shadow-md mt-4 text-white text-left hover:bg-gray-700">
            <FaFileInvoiceDollar className="inline-flex pr-0.5" />
            <Link to="/billing">Billing</Link>
          </li>
          <li className="mb-2 bg-gray-600 p-4 rounded-lg shadow-md mt-4 text-white text-left hover:bg-gray-700">
            <FaTools className="inline-flex pr-0.5" />
            <Link to="/maintenance">Maintenance</Link>
          </li>
          <li className="mb-2 bg-gray-600 p-4 rounded-lg shadow-md mt-4 text-white text-left hover:bg-gray-700">
            <FaChartBar className="inline-flex pr-0.5" />
            <Link to="/reports">Reports</Link>
          </li>
          <li className="mb-2 bg-gray-600 p-4 rounded-lg shadow-md mt-4 text-white text-left hover:bg-gray-700">
            <FaCog className="inline-flex pr-0.5" />
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
