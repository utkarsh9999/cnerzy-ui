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
        // Here you would typically handle the login logic, e.g., API call
        console.log("Email:", email);
        console.log("Password:", password);
        // Redirect to home page after login
        navigate("/");
    };
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="text-center">Login</h2>
                </div>
                <div className="col-md-6">
                    <h2 className="text-center">Login</h2>
                </div>
            </div>
        </div>
    );
}

