import React, { useState, useEffect } from "react";

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
  "Retail & Ecommerce"
];

export default function IndustrySelection({ data, setData, onNext, onBack }) {
  const [selectedIndustries, setSelectedIndustries] = useState(data.industry || []);

  const toggleIndustry = (industry) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((i) => i !== industry)
        : [...prev, industry]
    );
  };

  useEffect(() => {
    setData((prev) => ({ ...prev, industry: selectedIndustries }));
  }, [selectedIndustries]);

  return (
    <div
      className="container-fluid d-flex flex-column"
      style={{
        minHeight: "100vh",
        paddingLeft: "60px",
        paddingRight: "30px",
        maxWidth: "600px"
      }}
    >
      <div className="mb-4 pt-5">
        <img src="/images/Logo.png" alt="Logo" style={{ height: "60px" }} />
      </div>

      <div>
        <h3 className="fw-bold">
          Select what you'd like to <br /> focus on first
        </h3>
        <p className="text-muted" style={{ fontSize: "14px" }}>
          Help us tailor the best experience for you
        </p>
      </div>

      <div className="mt-4">
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

      <div className="mt-auto d-flex gap-3 py-4">
        <button
          className="btn btn-outline-dark btn-sm"
          onClick={onBack}
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
            fontWeight: "500"
          }}
          onClick={onNext}
        >
          Continue
        </button>
      </div>

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
