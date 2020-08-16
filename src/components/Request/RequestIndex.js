import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Request from "./Request";

const RequestIndex = () => {
  const path = useRouteMatch();
  console.log({ req: path });
  return (
    <Switch>
      <Route exact path={`${path}`} component={Request} />
    </Switch>
  );
};

export default RequestIndex;
