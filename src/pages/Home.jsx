import WeatherWidget from "../components/WeatherWidget";
import SystemSummary from "../components/SystemSummary";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";
import { FaRegUser } from "react-icons/fa";
import React from "react";

function Home() {
  return (
    <div>
      <section className="text-white-600 body-font bg-indigo-300 shadow-md mb-4 mt-0 pl-4 pb-8 pr-4 text-xl font-bold">
        <div className="pt-4 pb-4 ml-3bg">
          <header className="float-left">
            Bugaan West Waterworks & Sanitation Association Inc.
          </header>
          <FaRegUser className="float-right" />
          {/* <h2 className="float-right">Admin</h2> */}
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
