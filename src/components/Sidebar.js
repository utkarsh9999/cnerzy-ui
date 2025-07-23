import React from "react";

export default function Sidebar({ collapsed, activeItem, setActiveItem, toggleSidebar, isMobile }) {
  const handleClickWithToggle = (item) => {
    setActiveItem(item);
    if (isMobile) toggleSidebar();
  };

  const handleClickNoToggle = (item) => {
    setActiveItem(item);
  };

  const sidebarClass = `
    sidebar d-flex flex-column px-2 border-end
    ${collapsed ? (isMobile ? "" : "collapsed") : (isMobile ? "mobile-open" : "")}
  `;

  return (
    <div className={sidebarClass}>
      <div className="sidebar-header d-flex justify-content-between align-items-center p-3">
        {!collapsed && <img src="/images/Logo.svg" alt="Logo" height="36" />}
        <button className="btn btn-sm toggle-btn p-0 border-0 bg-transparent" onClick={toggleSidebar}>
          {isMobile ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <img src="/images/toggle.svg" alt="Menu" width="24" height="24" />
          )}
        </button>
      </div>

      <div className="px-3 mb-2 text-muted small menu-label">Menu</div>
      <ul className="nav flex-column sidebar-menu">
        <li
          className={`nav-item ${activeItem === "dashboard" ? "active" : ""}`}
          onClick={() => handleClickWithToggle("dashboard")}
        >
          <img src="/images/dashboard.svg" alt="dashboard" />
          {!collapsed && <span>Dashboard</span>}
        </li>

        <li
          className={`nav-item ${["projects", "robo", "my", "sell"].includes(activeItem) ? "active" : ""}`}
          onClick={() => handleClickNoToggle("projects")}
        >
          <img src="/images/projects.svg" alt="projects" />
          {!collapsed && (
            <span className="d-flex justify-content-between w-100">
              Projects <img src="/images/plus.svg" alt="plus" />
            </span>
          )}
        </li>

        {!collapsed && activeItem === "projects" && (
          <div className="submenu ps-4">
            <div className="submenu-item mb-1 bg-light" onClick={() => handleClickWithToggle("robo")}>
              RoboProjects
            </div>
            <div className="submenu-item mb-1  bg-light" onClick={() => handleClickWithToggle("my")}>
              MyProject
            </div>
            <div className="submenu-item bg-light" onClick={() => handleClickWithToggle("sell")}>
              Sell
            </div>
          </div>
        )}

        <li
          className={`nav-item ${activeItem === "users" ? "active" : ""}`}
          onClick={() => handleClickWithToggle("users")}
        >
          <img src="/images/users.svg" alt="users" />
          {!collapsed && <span>Users</span>}
        </li>

        <li
          className={`nav-item ${activeItem === "settings" ? "active" : ""}`}
          onClick={() => handleClickWithToggle("settings")}
        >
          <img src="/images/setting.svg" alt="settings" />
          {!collapsed && <span>Settings</span>}
        </li>
      </ul>
    </div>
  );
}
