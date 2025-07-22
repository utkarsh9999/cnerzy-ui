/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PasswordSuccess() {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate("/login");
    };

    return (
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <div className="text-center">
                        <div className="success-icon-svg mb-4">
                          <img src="/images/Icon Set copy.svg"/>

                        </div>

                        <h4 className="fw-bold" style={{ fontFamily: "Satoshi", lineHeight: "1.4" }}>
                            Password Reset <br /> Successfully
                        </h4>

                        <p className="text-muted mt-2 mb-4" style={{ fontSize: "14px" }}>
                            You can now login with your new password.
                        </p>

                        <div className="d-grid gap-2">
                            <button
                                onClick={handleContinue}
                                className="btn btn-primary w-100"
                                style={{
                                    backgroundColor: "#1A1A52",
                                    fontSize: "16px",
                                    fontWeight: "600"
                                }}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
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
                .success-icon-svg {
                    width: 64px;
                    height: 64px;
                    margin: 0 auto;
                    background-color: #ffffff;
                  
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </div>
    );
}
