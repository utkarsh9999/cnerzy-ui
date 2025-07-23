/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleForgetPassword = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        navigate("/set-new-password");
    };

    return (
        <div className="container-fluid ">
            <div className="row vh-100">
                <div className="col-md-6 d-flex flex-column justify-content-between align-items-center px-4 py-5 position-relative">
                    <div className="w-100 d-flex flex-column align-items-center" style={{ maxWidth: "400px" }}>
                        <div className="mb-4 mt-5 text-center">
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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

                    <p className="position-absolute start-0 bottom-0 w-100 text-center mb-3" style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                        <span className="text-muted">Remember your password? </span>
                        <Link to="/login" className="text-dark text-decoration-underline">
                            Back to log in
                        </Link>
                       
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
        </div>
    );
}
