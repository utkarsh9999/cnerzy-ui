/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);
        // Redirect to home page after login
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row mt-3 mb-3">
                <div className=" col-md-6">
                    <div className="mt-5">
                        <p className="text-center mb-4">
                            <img src="/images/Logo.png" alt="Logo" style={{ height: "76px" }} />
                        </p>
                        <div className="mb-1 mt-4">
                            <h3 className="text-center" id="fontsat">Log in to your account</h3>
                            <p className="text-center" style={{fontSize:"14px",color:"grey"}} id="fontsat">Enter your details to proceed further</p>
                        </div>
                        <div className="mb-4 pad" >
                            <form style={{fontFamily:"Satoshi"}}>
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label fw-semibold mb-2">Your email address</label>
                                    <input type="email" className="form-control border-2 custom-focus" id="email"
                                           placeholder="Enter your email address"/>
                                </div>

                                <div className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <label htmlFor="password" className="form-label fw-semibold mb-2">Enter
                                            password</label>
                                        <a href="#" className="small text-muted">Forgot password?</a>
                                    </div>
                                    <input type="password" className="form-control border-2 custom-focus" id="password"
                                           placeholder="Enter your password"/>
                                        <div className="invalid-feedback">
                                        </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-md w-100 mt-3"
                                        style={{ backgroundColor: "#1A1A52" ,height:"40px"}}>
                                    Log in
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div
                        id="imgback"
                        className="rounded-4"
                        style={{
                            backgroundImage: "url('/images/BG.png')",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "108%",
                            height: "670px",
                        }}
                    ></div>

                </div>
            </div>
        </div>
    );
}

