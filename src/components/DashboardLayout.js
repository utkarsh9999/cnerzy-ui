import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Projects from "./Projects";
import User from "./User";
import Setting from "./Setting";
import Dashboard from "./Dashboard";
import "./css/Dashboard.css";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    setCollapsed(mobile); // hide sidebar on mobile by default
  };

  useEffect(() => {
    handleResize(); // initialize on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setCollapsed(prev => !prev);

  const renderContent = () => {
    switch (activeItem) {
      case "projects":
      case "robo":
      case "my":
      case "sell":
        return <Projects />;
      case "users":
        return <User />;
      case "settings":
        return <Setting />;
      default:
        return <Dashboard />;
    }
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
      <div className="flex-grow-1 main-area">
        <div className="main-header  d-flex justify-content-between align-items-center px-3 py-2 shadow-sm">
          <div className="d-flex p-2 align-items-center">
            {isMobile && (
              <button className="btn btn-link" onClick={toggleSidebar}>
                ☰
              </button>
            )}
            <div className="breadcrumb-text ms-2">
              <img src="/images/home.svg" alt="home" className="me-2" />
             
              {activeItem.charAt(0).toUpperCase() + activeItem.slice(1)}
            </div>
          </div>
          <div className="header-icons d-flex align-items-center gap-3">
            <img src="/images/search.svg" alt="notif" />
            <img src="/images/notification.svg" alt="message" />
            <img src="/images/profile.svg" alt="profile" />
          </div>
        </div>
        <div className="content-header d-flex justify-content-between align-items-center px-4 py-3">
          <h4 className="mb-0 text-capitalize">
            {activeItem === "dashboard" ? "Dashboard" : activeItem}
          </h4>
          <div className="date-box d-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-light border">
            <img src="/images/calender.svg" alt="calendar" />
            <span>{new Date().toLocaleDateString("en-GB")}</span>
          </div>
        </div>
        <div className="main-content p-4">{renderContent()}</div>
      </div>
    </div>
  );
}
