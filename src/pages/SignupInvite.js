import React from "react";
import Background from "../components/Background/Background";
import Invite from "../components/SignupInvite/Signup";

const SignupInvite = () => {
  return (
    <>
      <div className={"new-wrapper"}>
        <div className={"bckgrnd-comp"}>
          <Background />
        </div>
        <div className={"form-comp"}>
          <Invite />
        </div>
      </div>
    </>
  );
};

export default SignupInvite;
