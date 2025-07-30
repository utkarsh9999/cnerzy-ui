import React, { useState, } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useOnboarding } from "../../context/OnboardingContext";


export default function OnboardingStart() {
  const [roleBox, setRoleBox] = useState(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

const { setCognitoData,  } = useOnboarding();


  const boxes = [
    { id: 1, label: "Buyer", text: "Buy", svg: "/images/buy.svg" },
    { id: 2, label: "Seller", text: "Sell", svg: "/images/sell.svg" },
    { id: 3, label: "Manager", text: "Manage", svg: "/images/manage.svg" }
  ];

  const handleBoxClick = (id) => {
    setRoleBox(id);
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (!email || roleBox === null) {
    setError("Please select a role and enter your email.");
    return;
  }

 const selectedRole = boxes.find((box) => box.id === roleBox);
const roleLabel = selectedRole?.label || "";

setCognitoData({ email, role: roleLabel });   

  navigate("/signup");
};

  

  return (


    <div className="d-flex vh-100">
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
            <div className="col-md-12 d-flex flex-column justify-content-between align-items-center px-4 py-5 position-relative">
        <div className="w-100 d-flex flex-column align-items-center" style={{ maxWidth: "420px" }}>
          <div className="mb-4 text-center">
            <img src="/images/Logo.png" alt="Logo" style={{ height: "60px" }} />
          </div>

          <h3 className="fw-bold text-center">Welcome to Cnergy</h3>
          <p className="text-center text-muted mb-4">
            Get started — it's free. No credit card needed.
          </p>

          <div className="d-flex justify-content-between gap-3 mb-4 flex-wrap w-100">
            {boxes.map((box) => (
              <div
                key={box.id}
                className={`position-relative p-3 rounded text-center shadow-sm flex-fill box-item ${
                  roleBox === box.id ? "box-selected" : "box-unselected"
                }`}
                onClick={() => handleBoxClick(box.id)}
              >
                <img src={box.svg} alt={box.label} className="mt-3" style={{ height: "40px" }} />
                <div className="mt-2 fw-medium">{box.text}</div>
                <div
                  className="custom-checkbox"
                  style={{ backgroundColor: roleBox === box.id ? "red" : "#ccc" }}
                >
                  {roleBox === box.id && <span className="tick">✓</span>}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="w-100">
            <input
              type="email"
              className="form-control mb-3 border-2 no-focus-border"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <div className="text-danger mb-2">{error}</div>}
            <button className="btn btn-dark w-100 mb-3" type="submit">
              Continue
            </button>
          </form>

          <p className="text-muted text-center small">
            By proceeding, you agree to the <br />
            <span className="text-dark text-decoration-underline">Terms of Privacy</span> and{" "}
            <span className="text-dark text-decoration-underline">Policy</span>.
          </p>
        </div>

        <p className="position-absolute start-0 bottom-0 w-100 text-center mb-3 px-4">
            <span className="text-muted">Already have an account? </span>
            <Link to="/login" className="text-dark text-decoration-underline">
              Log in
            </Link>
          </p>
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


  );
}
