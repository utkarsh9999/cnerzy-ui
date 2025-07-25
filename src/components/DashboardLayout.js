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

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setCollapsed(mobile);
    };
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
      if (activeItem === "robo") return "Projects > RoboProject";
      if (activeItem === "my") return "Projects > MyProject";
      if (activeItem === "sell") return "Projects > Sells";
    }
    return activeItem.charAt(0).toUpperCase() + activeItem.slice(1);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar
        collapsed={collapsed}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        toggleSidebar={toggleSidebar}
        isMobile={isMobile}
      />
      <div className={`main-content-area  ${collapsed ? "collapsed" : ""}`}>
        <div className="main-header d-flex justify-content-between align-items-center px-3 py-2 shadow-sm flex-wrap w-100 gap-2">
          <div className="d-flex align-items-center flex-shrink-1">
            {isMobile && (
              <button className="btn btn-sm p-0 border-0 bg-transparent" onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            )}
            <div className="breadcrumb-text ms-2 d-flex align-items-center gap-2 flex-nowrap" style={{ minWidth: 0 }}>
              <img src="/images/home.svg" alt="home" />
              <span className="text-truncate d-inline-block" style={{ maxWidth: "calc(100vw - 150px)" }}>
                {getBreadcrumb()}
              </span>
            </div>
          </div>
       <div className="header-right d-flex align-items-center gap-3 flex-shrink-0">
  <img src="/images/search.svg" alt="search" className="d-inline-block" style={{ width: isMobile ? "18px" : "24px", height: isMobile ? "18px" : "24px" }} />
  <img src="/images/notification.svg" alt="notif" className="d-inline-block" style={{ width: isMobile ? "18px" : "24px", height: isMobile ? "18px" : "24px" }} />
  <img src="/images/profile.svg" alt="profile" className="d-inline-block" style={{ width: isMobile ? "22px" : "28px", height: isMobile ? "22px" : "28px" }} />
</div>

        </div>
        <div className="main-content px-4 py-2">{renderContent()}</div>
      </div>
      {!collapsed && isMobile && (
        <div
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 998
          }}
        />
      )}
    </div>
  );
}
