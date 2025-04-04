import WeatherWidget from "../components/WeatherWidget";
import SystemSummary from "../components/SystemSummary";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";
import { FaRegUser } from "react-icons/fa";
import React from "react";

function Home({ isSidebarCollapsed }) {
  return (
    <div
      className={`transition-all duration-300 ${
        isSidebarCollapsed ? "ml-auto" : "ml-auto"
      }`}
    >
      <section className="text-white-600 body-font bg-indigo-300 shadow-md mb-2 mt-0 pl-4 pb-8 pr-4 text-xl font-bold">
        <div className="pt-4 pb-4">
          <header className="float-left">
            Bugaan West Waterworks & Sanitation Association Inc.
          </header>
          <FaRegUser className="float-right" />
        </div>
      </section>
      <WeatherWidget />
      <SystemSummary />
      <QuickActions />
      <RecentActivity />
    </div>
  );
}

export default Home;
