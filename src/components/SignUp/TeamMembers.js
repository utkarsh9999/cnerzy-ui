import React, { useState, useEffect } from "react";

const roles = ["Admin", "Editor", "Viewer"];

export default function TeamMembers({ data, setData, onNext, onBack }) {
  const [members, setMembers] = useState(data.team || [{ name: "", role: "Admin" }]);

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

  useEffect(() => {
    setData((prev) => ({ ...prev, team: members }));
  }, [members]);

  return (
    <div className="container-fluid d-flex flex-column" style={{ minHeight: "100vh", paddingLeft: "60px", paddingRight: "30px", maxWidth: "600px" }}>
      <div className="mb-4 pt-5">
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
                className="form-control border-2 custom-focus border-end-0 rounded-0"
                placeholder="Enter full name"
                value={member.name}
                onChange={(e) => handleChange(idx, "name", e.target.value)}
                style={{ width: "83%" }}
              />

              <select
                className="form-select border-start-1 bg-light text-dark custom-focus rounded-0 ps-2"
                value={member.role}
                onChange={(e) => handleChange(idx, "role", e.target.value)}
                style={{ width: "17%" }}
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

      <div className="mt-auto d-flex gap-3 py-4">
        <button
          className="btn btn-outline-dark btn-sm"
          style={{ height: "38px", width: "140px", fontWeight: "500" }}
          onClick={onBack}
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
            fontWeight: "500",
          }}
          onClick={onNext}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
