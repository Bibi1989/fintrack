import React from "react";
import Background from "../components/Background/Background";
import ResetPasswordForm from "../components/AuthModification/ResetPassword";

const ResetPassword = () => {
  return (
    <div className="new-wrapper">
      <div className={"bckgrnd-comp"}>
        <Background />
      </div>
      <div style={{ flex: "1 1 50%", backgroundColor: "#f2f6fa" }}>
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPassword;
