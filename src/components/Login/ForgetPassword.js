import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword({ data, setData, onNext }) {
  const handleForgetPassword = (e) => {
    e.preventDefault();
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) return;
    onNext();
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center w-100 position-relative"
      style={{ minHeight: "100vh", maxWidth: "400px", margin: "0 auto" }}
    >
      <div className="w-100 px-3">
        <div className="text-center mb-4">
          <img src="/images/Logo.png" alt="Logo" style={{ height: "60px" }} />
        </div>

        <h3 className="fw-bold text-center">Forgot Password</h3>
        <p className="text-center text-muted mb-4" style={{ fontSize: "14px" }}>
          No worries, we'll send you reset instructions
        </p>

        <form onSubmit={handleForgetPassword} className="w-100">
          <div className="mb-4">
            <label htmlFor="email" className="form-label fw-semibold mb-2">
              Your email address
            </label>
            <input
              type="email"
              className="form-control border-2 custom-focus"
              id="email"
              placeholder="Enter your email address"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ backgroundColor: "#1A1A52", height: "40px" }}
          >
            Continue
          </button>
        </form>
      </div>

      <div className="position-absolute bottom-0 mb-3 d-flex justify-content-center">
        <span className="text-muted me-1">Remember your password?</span>
        <Link to="/login" className="text-dark text-decoration-underline">
          Back to log in
        </Link>
      </div>
    </div>
  );
}
