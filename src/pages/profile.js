import React from "react";
import Background from "../components/Background/Background";
import CreateProfile from "../components/createProfile/CreateProfile";
import "./profile.css";

const CreateProfilePage = () => {
  return (
    <>
      <div className={"new-wrapper"}>
        <div className={"bckgrnd-comp"}>
          <Background />
        </div>
        <div style={{ flex: "1 1 50%", backgroundColor: "#f2f6fa" }}>
          <CreateProfile />
        </div>
      </div>
    </>
  );
};

export default CreateProfilePage;
