import React, { useEffect } from "react";

export default function EmailVerification({ data, setData, onNext }) {
  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const updated = [...(data.otp || ["", "", "", ""])];
      updated[index] = value;
      setData((prev) => ({ ...prev, otp: updated }));

      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = (data.otp || []).join("");
    if (otp.length === 4) {
      onNext(); 
    } else {
      alert("Please enter a valid 4-digit OTP.");
    }
  };

  useEffect(() => {
    if (!data.otp || !Array.isArray(data.otp) || data.otp.length !== 4) {
      setData((prev) => ({ ...prev, otp: ["", "", "", ""] }));
    }
  }, [data.otp, setData]);

  return (
    <div className="container-fluid px-3">
      <div className="row vh-100">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center position-relative">
          <div className="w-100 text-center" style={{ maxWidth: "420px" }}>
            <img src="/images/Logo.png" alt="Logo" style={{ height: "50px" }} className="mb-4" />

            <h4 className="fw-bold mb-2">Email Verification Code</h4>
            <p className="text-muted" style={{ fontSize: "14px" }}>
              We've sent a code to{" "}
              <span className="fw-semibold" style={{ color: "#1A1A52" }}>
                {data.email || "your email"}
              </span>
            </p>

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="d-flex justify-content-center mb-3 gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    className="form-control text-center otp-input"
                    placeholder="-"
                    value={data.otp?.[i] || ""}
                    onChange={(e) => handleChange(i, e.target.value)}
                    required
                  />
                ))}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-sm mt-2"
                style={{
                  backgroundColor: "#1A1A52",
                  border: "none",
                  height: "40px",
                  width: "100px",
                  fontWeight: "500",
                }}
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
      </div>

      <style>{`
        .otp-input {
          width: 60px;
          height: 45px;
          border-radius: 6px;
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
