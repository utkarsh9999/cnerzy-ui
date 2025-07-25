import React from 'react'
import Login from '../../components/Login/Login'

export default function LoginLayout() {
  return (
    <div className="d-flex vh-100">
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
     <Login />
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
  )
}
