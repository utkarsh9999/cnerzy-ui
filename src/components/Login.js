import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const emailRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const navigate = useNavigate();

    const dummyEmail = "neeraj@gmail.com";
    const dummyPassword = "5683";

    const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const validateFields = () => {
        let valid = true;
        if (!email) {
            setEmailError("Email is required.");
            valid = false;
        } else if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            valid = false;
        } else if (email !== dummyEmail) {
            setEmailError("This email is not registered.");
            valid = false;
        } else {
            setEmailError("");
        }

        if (!password) {
            setPasswordError("Password is required.");
            valid = false;
        } else if (password !== dummyPassword) {
            setPasswordError("Incorrect password.");
            valid = false;
        } else {
            setPasswordError("");
        }

        return valid;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const valid = validateFields();
        if (valid) navigate("/");
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailTouched(true);

        if (!value) {
            setEmailError("Email is required.");
        } else if (!validateEmail(value)) {
            setEmailError("Please enter a valid email address.");
        } else if (value !== dummyEmail) {
            setEmailError("This email is not registered.");
        } else {
            setEmailError("");
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordTouched(true);

        if (!value) {
            setPasswordError("Password is required.");
        } else if (value !== dummyPassword) {
            setPasswordError("Incorrect password.");
        } else {
            setPasswordError("");
        }
    };

    const handleEmailKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (!emailError) passwordRef.current.focus();
        }
    };

    const handlePasswordKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleLogin(e);
        }
    };

    return (
        <div className="container-fluid ">
            <div className="row  vh-100">
                <div className="col-md-6  d-flex flex-column justify-content-between align-items-center px-4 py-5 position-relative">
                    <div className="w-100   d-flex flex-column align-items-center" style={{ maxWidth: "400px" }}>
                        <div className="mb-4 mt-5 text-center">
                            <img src="/images/Logo.png" alt="Logo" style={{ height: "60px" }} />
                        </div>

                        <h3 className="fw-bold text-center">Log in to your account</h3>
                        <p className="text-center text-muted mb-4" style={{ fontSize: "14px" }}>
                            Enter your details to proceed further
                        </p>

                        <form onSubmit={handleLogin} className="w-100">
                            <div className="mb-3">
                                <label htmlFor="email" className={`form-label fw-semibold mb-2 ${emailError ? "text-danger" : ""}`}>
                                    Your email address
                                </label>
                                <div className="input-icon-wrapper">
                                    <input
                                        type="email"
                                        ref={emailRef}
                                        className={`form-control border-2 custom-focus ${emailError ? "input-error" : ""}`}
                                        id="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={handleEmailChange}
                                        onKeyDown={handleEmailKeyDown}
                                    />
                                    {emailError && <img src="/images/Icon Set.svg" alt="Error" className="input-error-icon" />}
                                </div>
                                {emailTouched && emailError && (
                                    <div className="alert-box">
                                        <img src="/images/security.svg" alt="Info" width={20} height={20} />
                                        <div className="flex-grow-1">
                                            <div className="fw-bold text-dark">Error</div>
                                            <div>{emailError}</div>
                                        </div>
                                        <span className="close-icon" onClick={() => setEmailError("")}>❌</span>
                                    </div>
                                )}
                            </div>

                            <div className="mb-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor="password" className={`form-label fw-semibold mb-2 ${passwordError ? "text-danger" : ""}`}>
                                        Enter password
                                    </label>
                                    <a href="/forget-password" className="small text-muted">Forgot password..?</a>
                                </div>
                                <div className="input-icon-wrapper">
                                    <input
                                        type="password"
                                        ref={passwordRef}
                                        className={`form-control border-2 custom-focus ${passwordError ? "input-error" : ""}`}
                                        id="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        onKeyDown={handlePasswordKeyDown}
                                    />
                                    {passwordError && <img src="/images/Icon Set.svg" alt="Error" className="input-error-icon" />}
                                </div>
                                {passwordTouched && passwordError && (
                                    <div className="alert-box">
                                        <img src="/images/security.svg" alt="Info" width={20} height={20} />
                                        <div className="flex-grow-1">
                                            <div className="fw-bold text-dark">Error</div>
                                            <div>{passwordError}</div>
                                        </div>
                                        <span className="close-icon" onClick={() => setPasswordError("")}>❌</span>
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-md w-100 mt-3"
                                style={{ backgroundColor: "#1A1A52", height: "40px" }}
                            >
                                Log in
                            </button>
                        </form>
                    </div>

                    <p className="position-absolute start-0 bottom-0 w-100 text-center mb-3" style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                        <span className="text-muted">Don’t have an account? </span>
                        <a href="/onboarding" className="text-dark text-decoration-underline">Sign up</a>
                    </p>
                </div>
<div className="col-md-6 d-none d-md-block d-flex align-items-center justify-content-center p-4">
          <div
            
            style={{
              backgroundImage: "url('/images/BG.png')",
        
              backgroundSize: "cover",
              borderRadius: "40px",
              width: "80%",
              height: "100%",
            }}
          ></div>
        </div>
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
