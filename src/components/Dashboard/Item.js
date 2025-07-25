import React from "react";

export default function Item({ icon, number, subtitle }) {
  return (
    <div
      className="item-card d-flex flex-column align-items-start p-3 border border-1 shadow-sm rounded-3 text-dark flex-shrink-0"
      style={{
        backgroundImage: "url('/images/background.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        maxWidth: 160,
        height: 140,
        minWidth: 120
      }}
    >
      <img src={icon} alt="icon" className="mb-3" width={28} height={28} />
      <div className="fs-5 fw-bold text-truncate w-100">{number}</div>
      <div className="text-muted text-truncate w-100" style={{ fontSize: "14px" }}>{subtitle}</div>
    </div>
  );
}
