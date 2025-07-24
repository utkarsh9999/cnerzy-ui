import React from "react";

export default function Item({ icon, number, subtitle }) {
  return (
    <div
      className="item-card d-flex flex-column align-items-start p-3 border border-1 shadow-sm  rounded-3 text-dark"
      style={{
        backgroundImage: "url('/images/background.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: 160,
        height: 140
      }}
    >
      <img src={icon} alt="icon" className="mb-3" width={28} height={28} />
      <div className="fs-3 fw-bold">{number}</div>
      <div style={{color:"gray"}}>{subtitle}</div>
    </div>
  );
}
