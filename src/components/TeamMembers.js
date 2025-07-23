import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/TeamMembers.css";
const roles = ["Admin", "Editor", "Viewer"];

export default function TeamMembers() {
  const navigate = useNavigate();
  const [members, setMembers] = useState([{ name: "", role: "Admin" }]);

  const handleChange = (idx, field, value) => {
    const updated = [...members];
    updated[idx][field] = value;
    setMembers(updated);
  };

  const addMember = () => {
    setMembers([...members, { name: "", role: "Admin" }]);
  };

  const removeMember = (idx) => {
    const updated = members.filter((_, i) => i !== idx);
    setMembers(updated);
  };

  return (
    <div className="container-fluid px-4">
      <div className="row vh-100">
        <div className="col-md-6 d-flex flex-column ps-5 pt-4 position-relative">
          <div className="mb-4">
            <img src="/images/Logo.png" alt="Logo" style={{ height: "50px" }} />
          </div>

          <div style={{ maxWidth: "500px" }}>
            <h2 className="fw-bold mb-1">Who else is on your team?</h2>
            <p className="text-muted" style={{ fontSize: "14px" }}>
              Help us tailor the best experience for you
            </p>
          </div>

          <div className="mt-4" style={{ maxWidth: "600px" }}>
            {members.map((member, idx) => (
              <div className="mb-3" key={idx}>
                <div className="d-flex merged-input align-items-center position-relative">

                         <input
                                          type="text"
                    id={`fullName-${idx}`}
                      className="form-control border-2 custom-focus border-end-0 rounded-0"
                                             placeholder="Enter your full name"
                                      value={member.name}
                                      style={{ width: "83%" }}
                                             onChange={(e) => handleChange(idx, "name", e.target.value)}
                                    
                                    />
            

              
<select
  className="form-select border-start-1  bg-light text-dark custom-focus   rounded-0 ps-2"
  value={member.role}
  style={{ width: "17%" }}
  onChange={(e) => handleChange(idx, "role", e.target.value)}
>
  {roles.map((role, i) => (
    <option key={i} value={role}>
      {role}
    </option>
  ))}
</select>



               

                  {idx > 0 && (
                    <span className="remove-btn" onClick={() => removeMember(idx)}>
                      &#10005;
                    </span>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-2">
              <span className="add-another" onClick={addMember}>
                <img src="/images/plus.svg" alt="+" className="me-1" /> Add another
              </span>
            </div>
          </div>

          <div className="position-absolute start-0 bottom-0  w-100 d-flex justify-content-start px-5 py-3 gap-3">
            <button
              className="btn btn-outline-dark btn-sm"
              style={{ height: "38px", width: "140px", fontWeight: "500" }}
              onClick={() => navigate(-1)}
            >
              Remind me later
            </button>
            <button
              className="btn btn-primary btn-sm"
              style={{
                backgroundColor: "#1A1A52",
                border: "none",
                height: "38px",
                width: "100px",
                fontWeight: "500"
              }}
              onClick={() => {
                console.log("Members:", members);
                navigate("/email-verification");
              }}
            >
              Continue
            </button>
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

     
    </div>
  );
}