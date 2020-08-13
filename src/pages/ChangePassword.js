import React from "react";
import Background from "../components/Background/Background";
import ChangePasswordForm from "../components/AuthModification/ChangePasswords/ChangePasswordForm";

const ChangePassword = () => {
  return (
    <div className="new-wrapper">
      <div className={"bckgrnd-comp"}>
        <Background />
      </div>
      <div style={{ flex: "1 1 50%", backgroundColor: "#f2f6fa" }}>
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default ChangePassword;
