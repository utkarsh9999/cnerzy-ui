import React, { useState, useRef } from "react";

export default function SetNewPassword({ data, setData, onSubmit }) {
  const [error, setError] = useState("");
  const [newTouched, setNewTouched] = useState(false);
  const [confirmTouched, setConfirmTouched] = useState(false);
  const confirmRef = useRef(null);

  const isPasswordValid = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  };

  const handleNewPasswordChange = (e) => {
    const value = e.target.value;
    setData({ ...data, password: value });
    setNewTouched(true);

    if (!isPasswordValid(value)) {
      setError("Password must be at least 8 characters and include a letter, a number, and a special character.");
    } else if (data.confirmPassword && value !== data.confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setData({ ...data, confirmPassword: value });
    setConfirmTouched(true);

    if (!isPasswordValid(data.password)) {
      setError("Password must be at least 8 characters and include a letter, a number, and a special character.");
    } else if (data.password && value !== data.password) {
      setError("Passwords do not match.");
    } else {
      setError("");
    }
  };

  const handleNewPasswordKeyDown = (e) => {
    if (e.key === "Enter") {
      confirmRef.current.focus();
    }
  };

  const handleConfirmPasswordKeyDown = (e) => {
    if (e.key === "Enter" && !error && data.password && data.confirmPassword) {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.password || !data.confirmPassword) {
      setError("Both fields are required.");
      return;
    }

    if (!isPasswordValid(data.password)) {
      setError("Password must be at least 8 characters and include a letter, a number, and a special character.");
      return;
    }

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    onSubmit();
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh", maxWidth: "400px", width: "100%", padding: "0 1rem" }}>
      <div className="w-100">
        <div className="mb-4 text-center">
          <img src="/images/Logo.png" alt="Logo" style={{ height: "60px" }} />
        </div>

        <h3 className="fw-bold text-center">Set New Password</h3>
        <p className="text-center text-muted mb-4" style={{ fontSize: "14px" }}>
          Your new password must be different from previously used passwords
        </p>

        <form onSubmit={handleSubmit} className="w-100">
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label fw-semibold mb-2">
              New Password
            </label>
            <div className="input-icon-wrapper">
              <input
                type="password"
                className={`form-control border-2 custom-focus ${error && newTouched ? "input-error" : ""}`}
                id="newPassword"
                placeholder="Enter new password"
                value={data.password}
                onChange={handleNewPasswordChange}
                onKeyDown={handleNewPasswordKeyDown}
              />
              {error && newTouched && (
                <img src="/images/Icon Set.svg" alt="Error" className="input-error-icon" />
              )}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-semibold mb-2">
              Confirm Password
            </label>
            <div className="input-icon-wrapper">
              <input
                type="password"
                ref={confirmRef}
                className={`form-control border-2 custom-focus ${error && confirmTouched ? "input-error" : ""}`}
                id="confirmPassword"
                placeholder="Re-enter new password"
                value={data.confirmPassword}
                onChange={handleConfirmPasswordChange}
                onKeyDown={handleConfirmPasswordKeyDown}
              />
              {error && confirmTouched && (
                <img src="/images/Icon Set.svg" alt="Error" className="input-error-icon" />
              )}
            </div>
          </div>

          {error && (newTouched || confirmTouched) && (
            <div className="alert-box">
              <img src="/images/security.svg" alt="Info" width={20} height={20} />
              <div className="flex-grow-1">
                <div className="fw-bold text-dark">Error</div>
                <div>{error}</div>
              </div>
              <span className="close-icon" onClick={() => setError("")}>❌</span>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary w-100 mt-3"
            style={{ backgroundColor: "#1A1A52", height: "40px" }}
          >
            Reset Password
          </button>
        </form>
      </div>

      <style>{`
        .input-icon-wrapper {
          position: relative;
        }

        .input-error-icon {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          height: 20px;
          width: 20px;
          pointer-events: none;
        }

        .input-error {
          padding-right: 2.5rem;
          border-color: #dc3545 !important;
          background-image: none !important;
        }

        .alert-box {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
          padding: 8px 12px;
          background-color: #f8d7da;
          color: #842029;
          border: 1px solid #f5c2c7;
          border-radius: 4px;
          font-size: 13px;
        }

        .close-icon {
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
