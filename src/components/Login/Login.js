import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import "../css/Login.css";


export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "", general: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitted, setSubmitted] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "", general: "" };

    if (!formData.email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));

    if (submitted) {
      const newErrors = { ...errors };
      if (name === "email") {
        if (!value) newErrors.email = "Email is required.";
        else if (!validateEmail(value)) newErrors.email = "Please enter a valid email address.";
        else newErrors.email = "";
      }
      if (name === "password") {
        if (!value) newErrors.password = "Password is required.";
        else newErrors.password = "";
      }
      setErrors(newErrors);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (e.target.name === "email" && validateEmail(formData.email)) {
        passwordRef.current.focus();
      } else if (e.target.name === "password") {
        handleSubmit(e);
      }
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitted(true);

  if (!validate()) return;

  setErrors({ email: "", password: "", general: "" });

  console.log("🚀 Attempting sign-in with:", formData); // Show login credentials

  // Optionally import config and log it
  try {
    const { COGNITO_CONFIG } = await import("../config/cognitoConfig");
    console.log("⚙️ Cognito Config:", COGNITO_CONFIG);
  } catch (configErr) {
    console.error("❌ Error loading Cognito config:", configErr);
  }

  try {
    const user = await Auth.signIn(formData.email, formData.password);
    console.log("✅ Login success:", user);
    navigate("/");
  } catch (error) {
 

    let general = "Login failed.";
    if (error.code === "UserNotFoundException") general = "This email is not registered.";
    else if (error.code === "NotAuthorizedException") general = "Incorrect password.";
    else if (error.code === "UserNotConfirmedException") general = "Please verify your email first.";

    setErrors((prev) => ({ ...prev, general }));
  }
};


  return (
    <div className="d-flex flex-column justify-content-between align-items-center px-4 py-5 position-relative w-100 h-100" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <div className="w-100 d-flex flex-column align-items-center">
        <div className="mb-4 mt-5 text-center">
          <img src="/images/Logo.png" alt="Logo" style={{ height: "60px" }} />
        </div>

        <h3 className="fw-bold text-center">Log in to your account</h3>
        <p className="text-center text-muted mb-4" style={{ fontSize: "14px" }}>
          Enter your details to proceed further
        </p>

        <form onSubmit={handleSubmit} className="w-100">
          <div className="mb-3">
            <label htmlFor="email" className={`form-label fw-semibold mb-2 ${errors.email ? "text-danger" : ""}`}>
              Your email address
            </label>
            <div className="input-icon-wrapper">
              <input
                id="email"
                type="email"
                name="email"
                ref={emailRef}
                className={`form-control border-2 custom-focus ${errors.email ? "input-error" : ""}`}
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              {errors.email && submitted && <img src="/images/Icon Set.svg" alt="Error" className="input-error-icon" />}
            </div>
            {submitted && touched.email && errors.email && (
              <div className="alert-box">
                <img src="/images/security.svg" alt="Info" width={20} height={20} />
                <div className="flex-grow-1">
                  <div className="fw-bold text-dark">Error</div>
                  <div>{errors.email}</div>
                </div>
                <span className="close-icon" onClick={() => setErrors((prev) => ({ ...prev, email: "" }))}>❌</span>
              </div>
            )}
          </div>

          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <label htmlFor="password" className={`form-label fw-semibold mb-2 ${errors.password ? "text-danger" : ""}`}>
                Enter password
              </label>
              <Link to="/forget-password" className="small text-muted">
                Forgot password?
              </Link>
            </div>
            <div className="input-icon-wrapper">
              <input
                id="password"
                type="password"
                name="password"
                ref={passwordRef}
                className={`form-control border-2 custom-focus ${errors.password ? "input-error" : ""}`}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              {errors.password && submitted && <img src="/images/Icon Set.svg" alt="Error" className="input-error-icon" />}
            </div>
            {submitted && touched.password && errors.password && (
              <div className="alert-box">
                <img src="/images/security.svg" alt="Info" width={20} height={20} />
                <div className="flex-grow-1">
                  <div className="fw-bold text-dark">Error</div>
                  <div>{errors.password}</div>
                </div>
                <span className="close-icon" onClick={() => setErrors((prev) => ({ ...prev, password: "" }))}>❌</span>
              </div>
            )}
          </div>

          {errors.general && (
            <div className="alert-box">
              <img src="/images/security.svg" alt="Info" width={20} height={20} />
              <div className="flex-grow-1">
                <div className="fw-bold text-dark">Error</div>
                <div>{errors.general}</div>
              </div>
              <span className="close-icon" onClick={() => setErrors((prev) => ({ ...prev, general: "" }))}>❌</span>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary btn-md w-100 mt-3"
            style={{ backgroundColor: "#1A1A52", height: "40px" }}
          >
            Log in
          </button>
        </form>
      </div>

      <p className="w-100 text-center mb-3">
        <span className="text-muted">Don’t have an account? </span>
        <Link to="/onboarding" className="text-dark text-decoration-underline">
          Sign up
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
