import React, { useState } from "react";
import ForgotPassword from "../../../components/Login/ForgetPassword";
import SetNewPassword from "../../../components/Login/SetNewpassword";
import PasswordProcess from "../../../components/Login/PasswordProcess";
import PasswordSuccess from "../../../components/Login/Passwordsuccess";
import { Auth } from "aws-amplify";

export default function ForgetPasswordLayout() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    code: "",
  });

  const handleNext = async () => {
    try {
      await Auth.forgotPassword(formData.email);
      setStep(1);
    } catch (error) {
      console.error("Forgot Password Error:", error);
      alert(error.message || "Failed to send reset code.");
    }
  };

  const handlePasswordSubmit = async () => {
    const { email, password, confirmPassword, code } = formData;
    if (!password || password !== confirmPassword) {
      alert("Passwords do not match or are empty.");
      return;
    }

    setStep(2);

    try {
      await Auth.forgotPasswordSubmit(email, code, password);
      setTimeout(() => {
        setStep(3);
      }, 1500);
    } catch (error) {
      alert(error.message || "Failed to reset password.");
      setStep(1);
    }
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const props = {
    data: formData,
    setData: setFormData,
    onNext: handleNext,
    onBack: handleBack,
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <ForgotPassword {...props} />;
      case 1:
        return <SetNewPassword {...props} onSubmit={handlePasswordSubmit} />;
      case 2:
        return <PasswordProcess />;
      case 3:
        return <PasswordSuccess />;
      default:
        return null;
    }
  };

  return (
    <div className="d-flex vh-100">
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        {renderStep()}
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
