import React from "react";
import Background from "../components/Background/Background";
import VerifyPasswordForm from "../components/AuthModification/VerifyPassword";

const VerifyPassword = () => {
  return (
    <div className="new-wrapper">
      <div className={"bckgrnd-comp"}>
        <Background />
      </div>
      <div style={{ flex: "1 1 50%", backgroundColor: "#f2f6fa" }}>
        <VerifyPasswordForm />
      </div>
    </div>
  );
};

export default VerifyPassword;
