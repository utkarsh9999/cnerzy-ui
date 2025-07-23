import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [accountName, setAccountName] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const passwordRef = useRef(null);
    const accountNameRef = useRef(null);
    const fullNameRef = useRef(null);
    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        if (value.length < 8) {
            setPasswordError("Password must be at least 8 characters.");
        } else {
            setPasswordError("");
        }
    };

    const handleContinue = (e) => {
        e.preventDefault();
        if (password.length >= 8) {
            navigate("/industrySelection");
        } else {
            setPasswordError("Password must be at least 8 characters.");
        }
    };

    const handleKeyDown = (e, nextRef) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (nextRef && nextRef.current) {
                nextRef.current.focus();
            } else {
                handleContinue(e);
            }
        }
    };

    return (
        <div className="container-fluid">
            <div className="row vh-100">
                {/* Left Panel */}
                <div className="col-md-6 d-flex flex-column justify-content-between align-items-center px-4 py-5 position-relative">
                    <div className="w-100 d-flex flex-column align-items-center" style={{ maxWidth: "400px" }}>
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
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-3">
                                <label htmlFor="password" className={`form-label fw-semibold mb-2 ${passwordError ? "text-danger" : ""}`}>
                                    Enter password
                                </label>
                                <div className="input-icon-wrapper">
                                    <input
                                        type="password"
                                        ref={passwordRef}
                                        className={`form-control border-2 custom-focus ${passwordError ? "input-error" : ""}`}
                                        id="password"
                                        placeholder="Enter at least 8 characters"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        onKeyDown={(e) => handleKeyDown(e, accountNameRef)}
                                    />
                                    {passwordError && <img src="/images/Icon Set.svg" alt="Error" className="input-error-icon" />}
                                </div>
                                {passwordError && (
                                    <div className="alert-box mt-2">
                                        <img src="/images/security.svg" alt="Info" width={20} height={20} />
                                        <div className="flex-grow-1">
                                            <div className="fw-bold text-dark">Error</div>
                                            <div>{passwordError}</div>
                                        </div>
                                        <span className="close-icon" onClick={() => setPasswordError("")}>❌</span>
                                    </div>
                                )}
                            </div>

                            {/* Account Name */}
                            <div className="mb-3">
                                <label htmlFor="accountName" className="form-label fw-semibold mb-2">Account name</label>
                                <input
                                    type="text"
                                    ref={accountNameRef}
                                    className="form-control border-2 custom-focus"
                                    id="accountName"
                                    placeholder="For example: Company or Department name"
                                    value={accountName}
                                    onChange={(e) => setAccountName(e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(e, null)}
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="btn btn-primary btn-md w-100 mt-3"
                                style={{ backgroundColor: "#1A1A52", height: "40px" }}
                            >
                                Continue
                            </button>
                        </form>
                    </div>

                    {/* Bottom link */}
                    <p className="position-absolute start-0 bottom-0 w-100 text-center mb-3" style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                        <span className="text-muted">Already have an account? </span>
                        <Link to="/login" className="text-dark text-decoration-underline">
                            Log in
                        </Link>
                    </p>
                </div>

                {/* Right Panel */}
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

            {/* Inline styling */}
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
