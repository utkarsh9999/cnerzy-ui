import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OtpProcess() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
    navigate("/verification-success");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (


 <div className="d-flex vh-100">
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
       <div className="container-fluid px-3">
      <div className="row vh-100">
        <div className="col-12">
          <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100 text-center">
            <div className="blended-spinner mb-4"></div>
            <h5 className="fw-bold" style={{ fontFamily: "Satoshi" }}>
              Verification
            </h5>
            <p className="text-muted mt-2" style={{ fontSize: "14px" }}>
              Wait for successful Verification
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .blended-spinner {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          position: relative;
          background: conic-gradient(
            #d6d6db 0deg,
            #d6d6db 120deg,
            #f43505 240deg,
            #d6d6db 360deg
          );
          -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 4px), black 0);
          mask: radial-gradient(farthest-side, transparent calc(100% - 4px), black 0);
          animation: spin 1s linear infinite;
        }

        .blended-spinner::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: conic-gradient(
            #d6d6db 0deg,
            #d6d6db 120deg,
            #f43505 240deg,
            #d6d6db 360deg
          );
          filter: blur(8px);
          z-index: -1;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
      </div>
      <div
        className="d-none d-md-flex align-items-center justify-content-center"
        style={{ width: "50%", backgroundColor: "#f8f9fa" }}
      >
        <img
          src="/images/BG.png"
          alt="Side"
          className="img-fluid"
          style={{ maxHeight: "90%", maxWidth: "90%", objectFit: "contain" }}
        />
      </div>
    </div>


  );
}
