import React, { useState } from "react";
import ForgotPassword from "../../../components/Login/ForgetPassword";
import SetNewPassword from "../../../components/Login/SetNewpassword";
import PasswordProcess from "../../../components/Login/PasswordProcess";
import PasswordSuccess from "../../../components/Login/Passwordsuccess";

export default function ForgetPasswordLayout() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handlePasswordSubmit = () => {
    const { password, confirmPassword } = formData;
    if (!password || !confirmPassword || password !== confirmPassword) {
      alert("Passwords do not match or are empty.");
      return;
    }

    console.log("Collected form data to submit:", formData);
    setStep(2); 

   
    setTimeout(() => {
      const isSuccess = true; 
      if (isSuccess) {
        console.log("Password update simulated success");
        setStep(3); 
      } else {
        alert("Password update failed.");
        setStep(1);
      }
    }, 1500);
  };

  const props = {
    data: formData,
    setData: setFormData,
    onNext: handleNext,
    onBack: handleBack
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
