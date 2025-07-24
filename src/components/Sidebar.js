import React, { useState } from "react";

export default function Sidebar({ collapsed, activeItem, setActiveItem, toggleSidebar, isMobile }) {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleClickWithToggle = (item) => {
    setActiveItem(item);
    if (isMobile) toggleSidebar();
    if (!["projects", "robo", "my", "sell"].includes(item)) setShowSubmenu(false);
  };

  const handleProjectsClick = () => {
    if (activeItem !== "projects") {
      setActiveItem("robo");
    }
    setShowSubmenu((prev) => !prev);
  };

  const sidebarClass = `
    sidebar d-flex flex-column px-2 border-end  position-fixed h-100
    ${collapsed ? (isMobile ? "" : "collapsed") : (isMobile ? "mobile-open" : "")}
  `;

  return (
    <div className={sidebarClass} style={!collapsed ? { minWidth: 260 } : {}}>
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
        <li className={`nav-item ${activeItem === "dashboard" ? "active" : ""}`} onClick={() => handleClickWithToggle("dashboard")}>
          <img src="/images/dashboard.svg" alt="dashboard" />
          {!collapsed && <span>Dashboard</span>}
        </li>

        <li className={`nav-item ${activeItem === "rfqs" ? "active" : ""}`} onClick={() => handleClickWithToggle("rfqs")}>
          <img src="/images/ref.svg" alt="rfqs" />
          {!collapsed && <span>RFQs</span>}
        </li>

        <li className={`nav-item ${activeItem === "requirements" ? "active" : ""}`} onClick={() => handleClickWithToggle("requirements")}>
          <img src="/images/requirement.svg" alt="requirements" />
          {!collapsed && <span>Requirements</span>}
        </li>

        <li className={`nav-item ${["robo", "my", "sell"].includes(activeItem) ? "active" : ""}`} onClick={handleProjectsClick}>
          <img src="/images/projects.svg" alt="projects" />
          {!collapsed && (
            <span className="d-flex justify-content-between w-100">
              Projects
              <img src={`/images/${showSubmenu ? "minus" : "plus"}.svg`} alt="toggle" />
            </span>
          )}
        </li>

        {!collapsed && showSubmenu && (
          <div className="submenu ps-4">
            <div className={`submenu-item mb-1 bg-light ${activeItem === "robo" ? "active" : ""}`} onClick={() => handleClickWithToggle("robo")}>RoboProject</div>
            <div className={`submenu-item mb-1 bg-light ${activeItem === "my" ? "active" : ""}`} onClick={() => handleClickWithToggle("my")}>MyProject</div>
            <div className={`submenu-item mb-1 bg-light ${activeItem === "sell" ? "active" : ""}`} onClick={() => handleClickWithToggle("sell")}>Sells</div>
          </div>
        )}
      </ul>

      <div className={`px-3 mt-4 mb-2 text-muted small menu-label ${collapsed ? "d-none" : ""}`}>
        Pages
      </div>
      <ul className="nav flex-column sidebar-menu">
        <li className={`nav-item ${activeItem === "marketplace" ? "active" : ""}`} onClick={() => handleClickWithToggle("marketplace")}>
          <img src="/images/market.svg" alt="marketplace" />
          {!collapsed && (
            <span className="d-flex justify-content-between w-100">
              Marketplace
              <img src="/images/plus.svg" alt="plus" />
            </span>
          )}
        </li>

        <li className={`nav-item ${activeItem === "social" ? "active" : ""}`} onClick={() => handleClickWithToggle("social")}>
          <img src="/images/social.svg" alt="social" />
          {!collapsed && (
            <span className="d-flex justify-content-between w-100">
              Social
              <img src="/images/plus.svg" alt="plus" />
            </span>
          )}
        </li>

        <li className={`nav-item ${activeItem === "company" ? "active" : ""}`} onClick={() => handleClickWithToggle("company")}>
          <img src="/images/compony.svg" alt="company" />
          {!collapsed && <span>Company</span>}
        </li>

        <li className={`nav-item ${activeItem === "blog" ? "active" : ""}`} onClick={() => handleClickWithToggle("blog")}>
          <img src="/images/blog.svg" alt="blog" />
          {!collapsed && <span>Blog</span>}
        </li>
      </ul>
    </div>
  );
}
