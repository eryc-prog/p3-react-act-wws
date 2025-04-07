import { Link } from "react-router-dom";
import {
  FaHandHoldingWater,
  FaBars,
  FaTachometerAlt,
  FaWater,
  FaFileInvoiceDollar,
  FaTools,
  FaChartBar,
  FaCog,
} from "react-icons/fa";
import React from "react";
import { useState } from "react";

function Sidebar({ isCollapsed, onToggle }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen); // For mobile sidebar toggle
  };

  return (
    <div>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMobileSidebar}
        className="lg:hidden fixed top-5 left-5 bg-gray-700 p-2 rounded text-white hover:bg-gray-600 z-50"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 ${
          isCollapsed ? "w-20" : "w-64"
        } bg-gray-500 text-white h-screen p-5 fixed top-0 left-0 transition-transform duration-300 z-40`}
      >
        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className="mb-4 bg-gray-700 p-2 rounded text-white hover:bg-gray-600"
        >
          <FaBars />
        </button>

        {/* Sidebar Header */}
        <h2
          className={`text-2xl font-bold mb-4 text-center ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <nav>
            <Link to="/">
              <FaHandHoldingWater className="inline-flex pr-2" />
            </Link>
            {!isCollapsed && (
              <span>
                <Link to="/">Waterworks</Link>
              </span>
            )}
          </nav>
        </h2>

        {/* Navigation Links */}
        <nav>
          <ul>
            <li className="mb-2 bg-gray-600 p-4 rounded-lg shadow-md mt-4 text-white hover:bg-gray-700 flex items-center gap-2">
              <Link to="/dashboard">
                <FaTachometerAlt className="inline-flex pr-0.5" />
              </Link>
              {!isCollapsed && <Link to="/dashboard">Dashboard</Link>}
            </li>
            <li className="mb-2 bg-gray-600 p-4 rounded-lg shadow-md mt-4 text-white hover:bg-gray-700 flex items-center gap-2">
              <Link to="/dataManagement">
                <FaWater className="inline-flex pr-0.5 mr-1" />
              </Link>
              {!isCollapsed && (
                <Link to="/dataManagement">Data Management</Link>
              )}
            </li>
            <li className="mb-2 bg-gray-600 p-4 rounded-lg shadow-md mt-4 text-white hover:bg-gray-700 flex items-center gap-2">
              <Link to="/billing">
                <FaFileInvoiceDollar className="inline-flex pr-0.5" />
              </Link>
              {!isCollapsed && <Link to="/billing">Billing</Link>}
            </li>
            <li className="mb-2 bg-gray-600 p-4 rounded-lg shadow-md mt-4 text-white hover:bg-gray-700 flex items-center gap-2">
              <Link to="/maintenance">
                <FaTools className="inline-flex pr-0.5" />
              </Link>
              {!isCollapsed && <Link to="/maintenance">Maintenance</Link>}
            </li>
            <li className="mb-2 bg-gray-600 p-4 rounded-lg shadow-md mt-4 text-white hover:bg-gray-700 flex items-center gap-2">
              <Link to="/reports">
                <FaChartBar className="inline-flex pr-0.5" />
              </Link>
              {!isCollapsed && <Link to="/reports">Reports</Link>}
            </li>
            <hr />
            <li className="mb-2 bg-gray-600 p-4 rounded-lg shadow-md mt-4 text-white hover:bg-gray-700 flex items-center gap-2">
              <Link to="/settings">
                <FaCog className="inline-flex pr-0.5" />
              </Link>
              {!isCollapsed && <Link to="/settings">Settings</Link>}
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isMobileOpen && (
        <div
          onClick={toggleMobileSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </div>
  );
}

export default Sidebar;
