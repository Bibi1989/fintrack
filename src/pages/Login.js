import React from "react";
import LoginForm from "../components/LoginInput/Login";
import Background from "../components/Background/Background";

const Login = () => {
  return (
    <div className="new-wrapper">
      <div className={"bckgrnd-comp"}>
        <Background />
      </div>
      <div style={{ flex: "1 1 50%", backgroundColor: "#f2f6fa" }}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
