import React from "react";
import { useNavigate } from "react-router-dom";

export default function PasswordSuccess() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/login");
  };

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div className="text-center px-4">
        <div className="success-icon-svg mb-4 mx-auto">
          <img src="/images/Icon Set copy.svg" alt="check_icon" />
        </div>

        <h4 className="fw-bold" style={{ fontFamily: "Satoshi", lineHeight: "1.4" }}>
          Password Reset <br /> Successfully
        </h4>

        <p className="text-muted mt-2 mb-4" style={{ fontSize: "14px" }}>
          You can now login with your new password.
        </p>

        <button
          onClick={handleContinue}
          className="btn btn-primary"
          style={{
            backgroundColor: "#1A1A52",
            fontSize: "16px",
            fontWeight: "600",
            minWidth: "200px"
          }}
        >
          Continue
        </button>
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
        }
      `}</style>
    </div>
  );
}
