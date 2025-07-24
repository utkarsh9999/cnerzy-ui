import React from "react";

export default function Header({ title, subtitle, breadcrumb }) {
  return (
    <div className="content-header d-flex justify-content-between align-items-center px-2 py-3">
      <div>
        
        <h4 className="mb-0 text-capitalize">{
        breadcrumb ?breadcrumb :title}</h4>
     
        {subtitle && <div className="text-muted small mt-2">{subtitle}</div>}
      </div>
   
    </div>
  );
}
