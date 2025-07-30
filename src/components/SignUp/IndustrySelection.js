import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboarding } from "../../context/OnboardingContext";

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

export default function IndustrySelection() {
  const { cognitoData, setCognitoData } = useOnboarding();
  const [selectedIndustries, setSelectedIndustries] = useState(cognitoData.industry || []);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleIndustry = (industry) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((i) => i !== industry)
        : [...prev, industry]
    );
  };

  const handleContinue = () => {
    if (selectedIndustries.length === 0) {
      setError("Please select at least one industry.");
      return;
    }
    setError("");
    setCognitoData((prev) => ({ ...prev, industry: selectedIndustries }));
    navigate("/team-members");
  };

  const handleBack = () => {
    navigate("/signup");
  };
      
  return (





       <div className="d-flex vh-100">
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
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
            <h3 className="fw-bold mt-4">
              Select what you'd like to <br /> focus on first
            </h3>
            <p className="text-muted" style={{ fontSize: "14px" }}>
              Help us tailor the best experience for you
            </p>

            <div className="d-flex flex-wrap gap-2 mt-3">
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

            {error && (
              <div className="error-box mt-3">
                <p className="mb-0 text-danger">{error}</p>
              </div>
            )}
          </div>
      <div className="mt-auto d-flex gap-3 py-4">
            <button
              className="btn btn-outline-dark btn-sm"
              onClick={handleBack}
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
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>

        
        </div>
      </div>
      <div
        className="d-none d-md-flex align-items-center justify-content-center"
        style={{ width: "50%", backgroundColor: "#f8f9fa" }}
      >
        <img
          src="/images/BG.png"
          alt="Side"
          className="img-fluid"
          style={{ maxHeight: "90%", maxWidth: "90%", objectFit: "contain" }}
        />
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

        .error-box {
          border-left: 3px solid red;
          padding-left: 10px;
        }
    //   `}</style>
    </div>
    // <div className="container-fluid">
    //   <div className="row vh-100">
    //     {/* Left side */}


    //     {/* Right side image */}
    //     <div className="d-none d-md-block col-md-6 p-0">
    //       <img
    //         src="/images/sideImage.png"
    //         alt="Onboarding visual"
    //         className="img-fluid h-100 w-100"
    //         style={{ objectFit: "cover" }}
    //       />
    //     </div>
    //   </div>

    //  
    // </div>
  );
}
