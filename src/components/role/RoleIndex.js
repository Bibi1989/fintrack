import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import CreateRole from "./CreateRole";
import ViewRoles from "./ViewRoles";
import EditRole from "./EditRole";
import ViewSingleRole from "./ViewSingleRole";

const RoleIndex = () => {
  const path = useRouteMatch().path;
  return (
    <div>
      <Switch>
        <Route exact path={`${path}`} component={CreateRole} />
        <Route exact path={`${path}/view`} component={ViewRoles} />
        <Route exact path={`${path}/edit/:roleId`} component={EditRole} />
        <Route exact path={`${path}/view/:roleId`} component={ViewSingleRole} />
      </Switch>
    </div>
  );
};

export default RoleIndex;
