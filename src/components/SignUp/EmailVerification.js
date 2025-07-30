import React, { useEffect, useState, } from "react";
import { Auth } from "aws-amplify";

import { useOnboarding } from "../../context/OnboardingContext";
import { useNavigate } from "react-router-dom";

export default function EmailVerification() {
  const { cognitoData } = useOnboarding();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [cooldown, setCooldown] = useState(0);
const navigate = useNavigate();
  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const updated = [...otp];
      updated[index] = value;
      setOtp(updated);

      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = otp.join("");

    if (code.length !== 6 || isNaN(code)) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      await Auth.confirmSignUp(cognitoData.email, code);
      setError("");
      setMessage("Email verified successfully.");
      navigate("/otp-process");
    } catch (err) {
      console.error("Verification error:", err);
      setError(err.message || "Verification failed");
    }
  };

  const handleResendCode = async () => {
    setError("");
    setMessage("");
    try {
      await Auth.resendSignUp(cognitoData.email);
      setMessage("Verification code resent.");
      setCooldown(60);
    } catch (err) {
      console.error("Resend error:", err);
      setError(err.message || "Failed to resend code.");
    }
  };

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  return (
    <div className="d-flex vh-100">
      <div className="flex-grow-1 d-flex justify-content-center align-items-center  position-relative">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
          <div className="w-100 text-center" style={{ maxWidth: "420px" }}>
            <img src="/images/Logo.png" alt="Logo" style={{ height: "50px" }} className="mb-4" />

            <h4 className="fw-bold mb-2">Email Verification Code</h4>
            <p className="text-muted" style={{ fontSize: "14px" }}>
              We've sent a code to{" "}
              <span className="fw-semibold" style={{ color: "#1A1A52" }}>
                {cognitoData.email || "your email"}
              </span>
            </p>

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="d-flex justify-content-center mb-3 gap-2">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    className="form-control text-center otp-input"
                    placeholder="-"
                    value={otp[i] || ""}
                    onChange={(e) => handleChange(i, e.target.value)}
                    required
                  />
                ))}
              </div>

              {error && (
                <div className="text-danger mb-2" style={{ fontSize: "14px" }}>
                  {error}
                </div>
              )}

              {message && (
                <div className="text-success mb-2" style={{ fontSize: "14px" }}>
                  {message}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary btn-sm mt-2"
                style={{
                  backgroundColor: "#1A1A52",
                  border: "none",
                  height: "40px",
                  width: "100px",
                  fontWeight: "500",
                }}
              >
                Verify
              </button>
            </form>
          </div>

          <div className="position-absolute bottom-0 start-0 end-0 text-center mb-3">
            <p className="text-muted" style={{ fontSize: "14px" }}>
              Didn’t get a code?{" "}
              <span
                style={{
                  cursor: cooldown > 0 ? "not-allowed" : "pointer",
                  color: cooldown > 0 ? "#ccc" : "#1A1A52",
                  fontWeight: "500",
                }}
                onClick={cooldown > 0 ? undefined : handleResendCode}
              >
                {cooldown > 0 ? `Resend in ${cooldown}s` : "Click to resend"}
              </span>
            </p>
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
        .otp-input {
          width: 45px;
          height: 45px;
          border-radius: 6px;
          border: 1px solid #ced4da;
          font-size: 20px;
        }
        .otp-input:focus {
          border-color: #1A1A52;
          outline: none;
          box-shadow: 0 0 0 0.2rem rgba(26,26,82,0.2);
        }
      `}</style>
    </div>
  );
}
