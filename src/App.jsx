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
import React from "react";
import "./App.css";

function App() {
  const location = useLocation();

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
    <div className="flex bg-blue-50">
      {showSidebar && (
        <div className="w-64">
          <Sidebar />
        </div>
      )}

      <div className="flex-1">
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
