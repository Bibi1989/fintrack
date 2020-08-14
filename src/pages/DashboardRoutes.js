import React from "react";
import { Route, Switch } from "react-router-dom";
import RoleIndex from "../components/role/RoleIndex";
import styled from "styled-components";

import { useRouteMatch } from "react-router-dom";
import DepartmentIndex from "../components/Department/DepartmentIndex";
import RequestIndex from "../components/Request/RequestIndex";
import UserDashBoard from "../components/LandingPage/UserDashBoard";
import DashBoard from "../components/LandingPage/DashBoard";
import SettingIndex from "../components/Settings/SettingIndex";
// import Request from "../components/Request/RequestIndex";

const DashboardRoutes = () => {
  const path = useRouteMatch().path;
  return (
    <RouteStyle>
      <Switch>
        <Route exact path={`${path}`} component={DashBoard} />
        <Route path={`${path}/user`} component={UserDashBoard} />
        <Route path={`${path}/roles`} component={RoleIndex} />
        <Route path={`${path}/department`} component={DepartmentIndex} />
        <Route path={`${path}/request`} component={RequestIndex} />
        <Route path={`${path}/setting`} component={SettingIndex} />
      </Switch>
    </RouteStyle>
  );
};

export default DashboardRoutes;

const RouteStyle = styled.div`
  padding: 4em;
  background: #f2f6fa;
  min-height: calc(100vh - 60px);

  @media (max-width: 960px) {
    padding: 0;
  }
`;
