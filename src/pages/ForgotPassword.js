import React from "react";
import Background from "../components/Background/Background";
import ForgotPasswordForm from "../components/AuthModification/ForgotPassword";

const ForgotPassword = () => {
  return (
    <div className="new-wrapper">
      <div className={"bckgrnd-comp"}>
        <Background />
      </div>
      <div style={{ flex: "1 1 50%", backgroundColor: "#f2f6fa" }}>
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPassword;
