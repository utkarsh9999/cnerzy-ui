import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./css/Dashboard.css";
import Projects from "../Pages/Projects";
import User from "../Pages/User";
import Setting from "../Pages/Setting";
import Dashboard from "../Pages/Dashboard";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    setCollapsed(mobile);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setCollapsed(prev => !prev);

  const renderContent = () => {
    if (["projects", "robo", "my", "sell"].includes(activeItem)) return <Projects selected={activeItem} />;
    if (activeItem === "users") return <User />;
    if (activeItem === "settings") return <Setting />;
    return <Dashboard />;
  };

  const getBreadcrumb = () => {
    if (["robo", "my", "sell"].includes(activeItem)) {
      let label = "";
      if (activeItem === "robo") label = "RoboProject";
      if (activeItem === "my") label = "MyProject";
      if (activeItem === "sell") label = "Sells";
      return `Projects > ${label}`;
    }
    return activeItem.charAt(0).toUpperCase() + activeItem.slice(1);
  };

  return (
    <div className="d-flex">
      <Sidebar
        collapsed={collapsed}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        toggleSidebar={toggleSidebar}
        isMobile={isMobile}
      />
      <div className="flex-grow-1 main-area w-calculate(100vw - 260px)" style={{ marginLeft: collapsed ? 0 : 260 }}>
        <div className="main-header d-flex justify-content-between align-items-center px-3 py-2 shadow-sm flex-wrap">
          <div className="d-flex p-2 align-items-center flex-shrink-1">
            {isMobile && (
              <button className="btn btn-sm p-0 border-0 bg-transparent" onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            )}
            <div className="breadcrumb-text ms-2 d-flex align-items-center gap-2 flex-nowrap">
              <img src="/images/home.svg" alt="home" />
              <span className="text-truncate" style={{ maxWidth: "calc(100vw - 200px)" }}>{getBreadcrumb()}</span>
            </div>
          </div>
          <div className="header-right d-flex align-items-center gap-3 flex-shrink-0 mt-2 mt-md-0">
            <img src="/images/search.svg" alt="search" />
            <img src="/images/notification.svg" alt="notif" />
            <img src="/images/profile.svg" alt="profile" />
          </div>
        </div>
        
        <div className="main-content px-4 py-2">{renderContent()}</div>
      </div>
    </div>
  );
}
