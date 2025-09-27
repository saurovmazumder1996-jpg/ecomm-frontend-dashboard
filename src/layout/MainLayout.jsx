import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function MainLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="bg-[#0e0e10] text-[#c2f5c2] w-full min-h-screen">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      {/* Main Content Area */}
      <div className="ml-0 lg:ml-[260px] pt-[95px] px-4 pb-8 transition-all">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
