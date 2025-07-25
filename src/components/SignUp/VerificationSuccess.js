import React from "react";
import { useNavigate } from "react-router-dom";

export default function VerificationSuccess() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/preloader");
  };

  return (
    <div className="container-fluid px-3">
      <div className="row vh-100">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="text-center" style={{ maxWidth: "420px", width: "100%" }}>
            <div className="success-icon-svg mb-4 mx-auto">
              <img src="/images/Icon Set copy.svg" alt="check_icon" />
            </div>

            <h4 className="fw-bold" style={{ fontFamily: "Satoshi", lineHeight: "1.4" }}>
              Verified
            </h4>

            <p className="text-muted mt-2 mb-4" style={{ fontSize: "14px" }}>
              You have been successfully verified.
            </p>

            <button
              onClick={handleContinue}
              className="btn btn-primary w-100"
              style={{
                backgroundColor: "#1A1A52",
                fontSize: "16px",
                fontWeight: "600",
                height: "40px",
                border: "none"
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .success-icon-svg {
          width: 64px;
          height: 64px;
          background-color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 10px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
}
