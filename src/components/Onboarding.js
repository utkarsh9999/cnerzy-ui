import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Login.css";
import { Link, useNavigate } from "react-router-dom";

export default function Onboarding() {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null);
  const boxes = [
    { id: 1, label: "Buy", svg: "/images/buy.svg" },
    { id: 2, label: "Sell", svg: "/images/sell.svg" },
    { id: 3, label: "Manage", svg: "/images/manage.svg" },
  ];

  const handleBoxClick = (id) => {
    setSelectedBox(id);
  };
  const handleSubmit = (e) => {
        e.preventDefault();
       
        navigate("/signup")
    };

  return (
    <div className="container-fluid ">
      <div className="row vh-100">
        <div className="col-md-6 d-flex flex-column justify-content-between align-items-center px-4 py-5 position-relative">
          <div className="w-100 d-flex flex-column align-items-center">
            <div className="mb-4 text-center">
              <img src="/images/Logo.png" alt="Logo" style={{ height: "60px" }} />
            </div>

            <h3 className="fw-bold text-center">Welcome to Cnergy</h3>
            <p className="text-center text-muted mb-4">
              Get started — it's free. No credit card needed.
            </p>

            <div className="d-flex justify-content-between gap-3 mb-4 flex-wrap w-100" style={{ maxWidth: "400px" }}>
              {boxes.map((box) => (
                <div
                  key={box.id}
                  className={`position-relative p-3 rounded  text-center shadow-sm flex-fill box-item ${
                    selectedBox === box.id ? "box-selected" : "box-unselected"
                  }`}
                  onClick={() => handleBoxClick(box.id)}
                >
                  <img src={box.svg} alt={box.label} className="mt-3" style={{ height: "40px" }} />
                  <div className="mt-2 fw-medium">{box.label}</div>
                  <div
                    className="custom-checkbox"
                    style={{ backgroundColor: selectedBox === box.id ? "red" : "#ccc" }}
                  >
                    {selectedBox === box.id && <span className="tick">✓</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-100" style={{ maxWidth: "400px" }}>
             <form onSubmit={handleSubmit} >
                  <input
                type="email"
                className="form-control mb-3 border-2 no-focus-border"
                placeholder="name@company.com"
              />
              <button className="btn btn-dark w-100 mb-3" type="submit" >Continue</button>
              </form>
            
              <p className="text-muted text-center small">
                By proceeding, you agree to the{' '}
                <br/>
                <span className="text-dark text-decoration-underline">Terms of Privacy</span>{' '}
                and{' '}
                <span className="text-dark text-decoration-underline">Policy</span>.
              </p>
            </div>
          </div>

          <p
            className="position-absolute start-0 bottom-0 w-100 text-center mb-3"
            style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
          >
            <span className="text-muted">Already have an account? </span>
            <Link to="/login" className="text-dark text-decoration-underline">
              Log in
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

        <style>{`
          .box-item {
            min-width: 120px;
            height: 130px;
            cursor: pointer;
            position: relative;
            flex: 1;
          }

          .box-selected {
            border: 2px solid black;
            background-color: #fff;
          }

          .box-unselected {
            border: 2px solid #ccc;
        
          }

          .custom-checkbox {
            position: absolute;
            top: 8px;
            right: 8px;
            width: 20px;
            height: 20px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 14px;
          }

          .tick {
            display: block;
          }

          .no-focus-border:focus {
            box-shadow: none;
            border-color: #ced4da;
          }
        `}</style>
      </div>
    </div>
  );
}
