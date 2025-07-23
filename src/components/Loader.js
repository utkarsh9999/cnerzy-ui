import React, { useEffect } from "react";
import "./css/Loader.css";
import { useNavigate } from "react-router-dom";

export default function Loader() {
     const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="position-relative">
            <div className="blended-spinner"></div>
            <img
              src="/images/Logo.svg"
              alt="Company Logo"
              className="position-absolute top-50 start-50 translate-middle"
              style={{ width: "80%", height: "80%" }}
            />
          </div>
        </div>
      </div>

      
    </div>
  );
}
