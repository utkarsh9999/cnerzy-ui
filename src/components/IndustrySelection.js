import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const industries = [
  "Electronics",
  "Aerospace",
  "Healthcare",
  "Finance & Banking",
  "Information Technology",
  "Education",
  "Manufacturing",
  "Transportation & Logistics",
  "Media & Entertainment",
  "Retail & Ecommerce",
];

export default function IndustrySelection() {
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const navigate = useNavigate();

  const toggleIndustry = (industry) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((i) => i !== industry)
        : [...prev, industry]
    );
  };

  return (
    <div className="ps-5  container-fluid">
      <div className="row vh-100">

        <div className="col-md-6 d-flex flex-column px-4 py-5 position-relative">

          <div className="mb-4">
            <img src="/images/Logo.png" alt="Logo" style={{ height: "60px" }} />
          </div>

          <div className="mt-3" style={{maxWidth: "500px" }}>
            <h3 className="fw-bold">Select what you'd like to 
                <br/>
                focus on first</h3>
            <p className="text-muted" style={{ fontSize: "14px" }}>
              Help us tailor the best experience for you
            </p>
          </div>

          {/* Capsule Buttons */}
          <div className="mt-4" style={{ maxWidth: "600px" }}>
            <div className="d-flex flex-wrap gap-2">
              {industries.map((industry, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`capsule-btn ${
                    selectedIndustries.includes(industry) ? "selected" : ""
                  }`}
                  onClick={() => toggleIndustry(industry)}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>


          <div className="position-absolute start-0 bottom-0 w-100 d-flex justify-content-start px-4 py-3 gap-3">
            <button
              className="btn btn-outline-dark btn-sm"
              onClick={() => navigate(-1)}
              style={{ height: "38px", width: "100px", fontWeight: "500" }}
            >
              Back
            </button>
            <button
              className="btn btn-primary btn-sm"
              style={{
                backgroundColor: "#1A1A52",
                border: "none",
                height: "38px",
                width: "100px",
                fontWeight: "500",
              }}
              onClick={() => {
                console.log("Selected:", selectedIndustries);
                navigate("/teamMembers"); 
              }}
            >
              Continue
            </button>
          </div>
        </div>

        {/* Right Panel with BG */}
        <div className="col-md-6 d-none d-md-block d-flex align-items-center justify-content-center p-4">
          <div
            style={{
              backgroundImage: "url('/images/BG.png')",
              backgroundSize: "cover",
              borderRadius: "40px",
              width: "80%",
              height: "100%",
            }}
          ></div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .capsule-btn {
          padding: 8px 16px;
          border-radius: 999px;
          border: 1px solid #ccc;
          background-color: white;
          color: #333;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        .capsule-btn.selected {
          background-color: #dc3545;
          color: white;
          border-color: #dc3545;
        }

       
      `}</style>
    </div>
  );
}
