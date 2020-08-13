import React from "react";
import Background from "../components/Background/Background";
import MasterSignup from "../components/SignupForm/MasterSignup";

const Signup = () => {
  return (
    <>
      <div className={"new-wrapper"}>
        <div className={"bckgrnd-comp"}>
          <Background />
        </div>
        <div style={{ flex: "1 1 50%", backgroundColor: "#f2f6fa" }}>
          <MasterSignup />
        </div>
      </div>
    </>
  );
};

export default Signup;
