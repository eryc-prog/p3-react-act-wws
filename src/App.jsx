import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Home";
import DataManagementPage from "./pages/DataManagementPage";
import BillingPage from "./pages/BillingPage";
import MaintenancePage from "./pages/MaintenancePage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";

function App() {
  const location = useLocation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // State to track sidebar collapse

  const showSidebar = [
    "/home",
    "/dashboard",
    "/dataManagement",
    "/billing",
    "/maintenance",
    "/reports",
    "/settings",
  ].includes(location.pathname);

  return (
    <div className="flex bg-blue-50 h-screen">
      {showSidebar && (
        <div
          className={`${
            isSidebarCollapsed ? "w-20" : "w-64"
          } transition-all duration-300`}
        >
          <Sidebar
            isCollapsed={isSidebarCollapsed}
            onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          />
        </div>
      )}

      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarCollapsed ? "ml-auto" : "ml-auto"
        }`}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dataManagement" element={<DataManagementPage />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
