import React, { useState } from "react";
import { Auth } from "aws-amplify";

export default function SetNewPassword({ data, setData, onNext }) {
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(true);
  const [loading, setLoading] = useState(false);

  const isValidPassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setShowError(true);

    if (!data.otp || !data.password || !data.confirmPassword) {
      setError("Please fill all fields.");
      return;
    }

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!isValidPassword(data.password)) {
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    try {
      setLoading(true);
      await Auth.forgotPasswordSubmit(data.email, data.otp, data.password);
      setLoading(false);
      setError("");
      onNext(); // Navigate to success step
    } catch (err) {
      setLoading(false);
      setError(err.message || "Something went wrong.");
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center w-100"
      style={{ minHeight: "100vh", maxWidth: "400px", margin: "0 auto" }}
    >
      <div className="w-100 px-3">
        <div className="text-center mb-4">
          <img src="/images/Logo.png" alt="Logo" style={{ height: "60px" }} />
        </div>

        <h3 className="fw-bold text-center mb-3">Set New Password</h3>

        <form onSubmit={handleResetPassword}>
          <div className="mb-3">
            <label className="form-label fw-semibold mb-2">OTP Code</label>
            <input
              type="text"
              className="form-control border-2 custom-focus"
              value={data.otp}
              onChange={(e) => setData({ ...data, otp: e.target.value })}
              placeholder="Enter OTP sent to your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold mb-2">New Password</label>
            <input
              type="password"
              className="form-control border-2 custom-focus"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="Enter new password"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control border-2 custom-focus"
              value={data.confirmPassword}
              onChange={(e) =>
                setData({ ...data, confirmPassword: e.target.value })
              }
              placeholder="Re-enter new password"
            />
          </div>

          {error && showError && (
            <div
              className="alert alert-danger d-flex align-items-start justify-content-between p-2 px-3 gap-2"
              style={{ fontSize: "14px", borderRadius: "8px" }}
            >
              <div className="d-flex align-items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-1"
                >
                  <path d="M1 21h22L12 2 1 21zM12 16h-1v-1h2v1h-1zm0-2h-1v-4h2v4h-1z" />
                </svg>
                <span>{error}</span>
              </div>
              <svg
                onClick={() => setShowError(false)}
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ cursor: "pointer", marginTop: "4px" }}
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ backgroundColor: "#1A1A52", height: "40px" }}
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
