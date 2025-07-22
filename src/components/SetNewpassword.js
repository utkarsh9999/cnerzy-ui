import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SetNewPassword() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [newTouched, setNewTouched] = useState(false);
    const [confirmTouched, setConfirmTouched] = useState(false);
    const navigate = useNavigate();
    const confirmRef = useRef(null);

    const handleNewPasswordChange = (e) => {
        const value = e.target.value;
        setNewPassword(value);
        setNewTouched(true);

        if (confirmPassword && value !== confirmPassword) {
            setError("Passwords do not match.");
        } else {
            setError("");
        }
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setConfirmTouched(true);

        if (newPassword && value !== newPassword) {
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
        if (e.key === "Enter" && !error && newPassword && confirmPassword) {
            handleSubmit(e);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newPassword || !confirmPassword) {
            setError("Both fields are required.");
            return;
        }
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setError("");
        navigate("/password-reset");
    };

    return (
        <div className="container-fluid ">
            <div className="row vh-100 ">
                <div className="col-md-6 d-flex flex-column justify-content-between align-items-center px-4 py-5 position-relative">
                    <div className="w-100 d-flex flex-column align-items-center" style={{ maxWidth: "400px" }}>
                        <div className="mb-4 mt-5 text-center">
                            <img src="/images/Logo.png" alt="Logo" style={{ height: "60px" }} />
                        </div>

                        <h3 className="fw-bold text-center" style={{ color: "#000" }}>Set New Password</h3>
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
                                        value={newPassword}
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
                                        value={confirmPassword}
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
                                className="btn btn-primary btn-md w-100 mt-3"
                                style={{ backgroundColor: "#1A1A52", height: "40px" }}
                            >
                                Reset Password
                            </button>
                        </form>
                    </div>

                    <p className="position-absolute start-0 bottom-0 w-100 text-center mb-3" style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                        <span className="text-muted">Go back to </span>
                        <a href="/login" className="text-dark text-decoration-underline">Log in</a>
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
