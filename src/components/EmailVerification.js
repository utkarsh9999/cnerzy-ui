import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EmailVerification() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(["", "", "", ""]);

    const handleChange = (index, value) => {
        if (/^\d?$/.test(value)) {
            const updated = [...otp];
            updated[index] = value;
            setOtp(updated);
            if (value && index < 3) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (otp.join("").length === 4) {

            navigate("/otp-process");
        } else {
            alert("Please enter a valid 4-digit OTP.");
        }
    };

    return (
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center position-relative">
                    <div className="text-center" style={{ maxWidth: "400px" }}>
                        <img src="/images/Logo.png" alt="Logo" style={{ height: "50px" }} className="mb-4" />
                        <h5 className="fw-bold" style={{ fontFamily: "Satoshi" }}>
                            Email Verification Code
                        </h5>
                        <p className="text-muted mt-2" style={{ fontSize: "14px" }}>
                            We've sent a code to{" "}
                            <span className="fw-semibold" style={{ color: "#1A1A52" }}>
                                hello@cnergy.com
                            </span>
                        </p>
                        <form onSubmit={handleSubmit} >


                            <div className="d-flex justify-content-between mt-4 mb-4">



                                {[0, 1, 2, 3].map((i) => (
                                    <input
                                        key={i}
                                        id={`otp-${i}`}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength="1"
                                        className="form-control text-center mx-2 otp-input"
                                        placeholder="-"
                                        value={otp[i]}
                                        onChange={(e) => handleChange(i, e.target.value)}
                                        required
                                    />
                                ))}
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-md w-100 mt-3"
                                style={{ backgroundColor: "#1A1A52", height: "40px" }}

                            >
                                Verify
                            </button>
                        </form>


                    </div>

                    <div className="position-absolute bottom-0 start-0 end-0 text-center mb-3">
                        <p className="text-muted" style={{ fontSize: "14px" }}>
                            Didn’t get a code?{" "}
                            <span
                                style={{ cursor: "pointer", color: "#1A1A52", fontWeight: "500" }}
                                onClick={() => alert("Resend code triggered")}
                            >
                                Click to resend
                            </span>
                        </p>
                    </div>
                </div>

                <div className="col-md-6 d-none d-md-block d-flex align-items-center justify-content-center p-4">
                    <div
                        style={{
                            backgroundImage: "url('/images/BG.png')",
                            backgroundSize: "cover",
                            borderRadius: "40px",
                            width: "80%",
                            height: "100%"
                        }}
                    ></div>
                </div>
            </div>

            <style>{`
        .otp-input {
          width: 65px;
          height: 45px;
          border-radius: 4px;
          border: 1px solid #ced4da;
          font-size: 20px;
        }
        .otp-input:focus {
          border-color: #1A1A52;
          outline: none;
          box-shadow: 0 0 0 0.2rem rgba(26,26,82,0.2);
        }
      `}</style>
        </div>
    );
}
