import React, { useState } from "react";

import SignUp from "../../components/SignUp/SignUp";
import IndustrySelection from "../../components/SignUp/IndustrySelection";
import TeamMembers from "../../components/SignUp/TeamMembers";
import EmailVerification from "../../components/SignUp/EmailVerification";
import OtpProcess from "../../components/SignUp/OtpProcess";
import VerificationSuccess from "../../components/SignUp/VerificationSuccess";
import OnboardingStart from "../../components/SignUp/OnboardingStart";


export default function Onboarding() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    accountName: "",
    industry: "",
    teamMembers: [],
    email: "",
    otp: "",
    selectedBox: null,
    selectedBoxLabel: ""
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleFinalSubmit = () => {
    console.log("Submitting to backend:", formData);

 
    setTimeout(() => {
      const isSuccess = true; 

      if (isSuccess) {
        console.log("Signup Success:", formData);
        setStep(6); 
      } else {
        console.error("Signup failed");
        alert("Signup failed. Please try again.");
      }
    }, 1500);
  };

  const renderStep = () => {
    const props = {
      data: formData,
      setData: setFormData,
      onNext: handleNext,
      onBack: handleBack
    };

    switch (step) {
      case 0:
        return <OnboardingStart {...props} />;
      case 1:
        return <SignUp {...props} />;
      case 2:
        return <IndustrySelection {...props} />;
      case 3:
        return <TeamMembers {...props} />;
      case 4:
        return <EmailVerification {...props} />;
      case 5:
        return <OtpProcess onNext={handleFinalSubmit} />;
      case 6:
        return <VerificationSuccess />;
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
