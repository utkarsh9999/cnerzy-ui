import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function SignUp({ data, setData, onNext }) {
  const passwordRef = useRef(null);
  const accountNameRef = useRef(null);
  const fullNameRef = useRef(null);

  const isPasswordValid = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    const error = !isPasswordValid(value)
      ? "Password must be at least 8 characters and include a letter, a number, and a special character."
      : "";

    setData((prev) => ({
      ...prev,
      password: value,
      passwordError: error
    }));
  };

  const handleContinue = (e) => {
    e.preventDefault();

    if (!data.password || !isPasswordValid(data.password)) {
      setData((prev) => ({
        ...prev,
        passwordError: "Password must be at least 8 characters and include a letter, a number, and a special character."
      }));
      return;
    }

    onNext();
  };

  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (nextRef?.current) {
        nextRef.current.focus();
      } else {
        handleContinue(e);
      }
    }
  };

  return (
    <div className="d-flex flex-column justify-content-between align-items-center px-4 py-5 position-relative w-100 h-100" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <div className="w-100 d-flex flex-column align-items-center">
        <div className="mb-4 mt-5 text-center">
          <img src="/images/Logo.png" alt="Logo" style={{ height: "60px" }} />
        </div>

        <h3 className="fw-bold text-center">Create your account</h3>

        <form onSubmit={handleContinue} className="w-100">
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label fw-semibold mb-2">Full name</label>
            <input
              ref={fullNameRef}
              type="text"
              className="form-control border-2 custom-focus"
              id="fullName"
              placeholder="Enter your full name"
              value={data.fullName}
              onChange={(e) => setData((prev) => ({ ...prev, fullName: e.target.value }))}
              onKeyDown={(e) => handleKeyDown(e, passwordRef)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className={`form-label fw-semibold mb-2 ${data.passwordError ? "text-danger" : ""}`}>
              Enter password
            </label>
            <div className="input-icon-wrapper">
              <input
                type="password"
                ref={passwordRef}
                className={`form-control border-2 custom-focus ${data.passwordError ? "input-error" : ""}`}
                id="password"
                placeholder="At least 8 characters with letter, number, special char"
                value={data.password}
                onChange={handlePasswordChange}
                onKeyDown={(e) => handleKeyDown(e, accountNameRef)}
              />
              {data.passwordError && (
                <img src="/images/Icon Set.svg" alt="Error" className="input-error-icon" />
              )}
            </div>
            {data.passwordError && (
              <div className="alert-box mt-2">
                <img src="/images/security.svg" alt="Info" width={20} height={20} />
                <div className="flex-grow-1">
                  <div className="fw-bold text-dark">Error</div>
                  <div>{data.passwordError}</div>
                </div>
                <span className="close-icon" onClick={() => setData((prev) => ({ ...prev, passwordError: "" }))}>❌</span>
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="accountName" className="form-label fw-semibold mb-2">Account name</label>
            <input
              type="text"
              ref={accountNameRef}
              className="form-control border-2 custom-focus"
              id="accountName"
              placeholder="For example: Company or Department name"
              value={data.accountName}
              onChange={(e) => setData((prev) => ({ ...prev, accountName: e.target.value }))}
              onKeyDown={(e) => handleKeyDown(e, null)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-md w-100 mt-3"
            style={{ backgroundColor: "#1A1A52", height: "40px" }}
          >
            Continue
          </button>
        </form>
      </div>

      <p className="w-100 text-center mb-3">
        <span className="text-muted">Already have an account? </span>
        <Link to="/login" className="text-dark text-decoration-underline">
          Log in
        </Link>
      </p>

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
          padding: 10px 12px;
          background-color: #f8d7da;
          color: #842029;
          border: 1px solid #f5c2c7;
          border-radius: 6px;
          font-size: 13px;
          animation: fadeIn 0.3s ease-in-out;
        }
        .alert-box img {
          flex-shrink: 0;
        }
        .close-icon {
          margin-left: auto;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
