import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

// import DepartmentNavBar from "./DepartmentNavBar/DepartmentNavBar";

import CreateDepartment from "./CreateDepartment/CreateDepartment";
import ViewDepartments from "./ViewDepartments/ViewDepartments";
import SingleDepartmentView from "./SingleDepartmentView/SingleDepartmentView";
// import InviteDepartment from "./InviteDepartment/InviteDepartment";
import UpdateDepartment from "./UpdateDepartment/UpdateDepartment";
import ViewStaff from "./ViewStaff/ViewStaff";
import ViewInvites from "./InviteDepartment/ViewInvites";
import InviteStaff from "./InviteDepartment/InviteStaff";
import ViewSingleInvite from "./InviteDepartment/ViewSingleInvite";
import ModifyStaff from "./ModifyStaff";

const DepartmentIndex = () => {
  const { path } = useRouteMatch();
  console.log({ dept: path });
  return (
    <div>
      <Switch>
        <Route exact path={`${path}`} component={CreateDepartment} />
        <Route
          exact
          path={`${path}/update/staff/:id`}
          component={ModifyStaff}
        />
        <Route exact path={`${path}/views`} component={ViewDepartments} />
        <Route
          exact
          path={`${path}/views/:deptId`}
          component={SingleDepartmentView}
        />
        <Route exact path={`${path}/edit/:id`} component={UpdateDepartment} />
        <Route exact path={`${path}/staff/:id`} component={ViewStaff} />
        <Route
          exact
          path={`${path}/views/:deptId/invite`}
          component={InviteStaff}
        />
        <Route
          exact
          path={`${path}/views/:deptId/invites`}
          component={ViewInvites}
        />

        <Route
          exact
          path={`${path}/views/:deptId/invites/:inviteId`}
          component={ViewSingleInvite}
        />
      </Switch>
    </div>
  );
};

export default DepartmentIndex;
