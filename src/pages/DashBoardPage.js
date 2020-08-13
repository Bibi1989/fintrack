import React from "react";
import SideBar from "../components/LandingPage/SideBar";
// import DashboardRoutes from "../pages/DashboardRoutes";

const DashBoardPage = ({ match }) => {
  return (
    <div>
      <SideBar match={match} />
    </div>
  );
};

export default DashBoardPage;
