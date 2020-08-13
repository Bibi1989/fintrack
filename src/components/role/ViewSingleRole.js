import React from "react";
import { useHistory } from "react-router-dom";

function ViewSingleRole() {
  const history = useHistory();
  const permissions = [...history.location.state.permissions];
  return (
    <div>
      <div>
        <div>
          <h3>Role Name:</h3>
          <h6>{history.location.state.name}</h6>
        </div>
        <div>
          <h3>Description:</h3>
          <h6>{history.location.state.description}</h6>
        </div>
        <div>
          <h3>Status:</h3>
          <h6>{history.location.state.status}</h6>
        </div>
        <div>
          <h3>Permissions:</h3>
          <ul>
            {permissions.map((permission) => (
              <li key={""}> {permission}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li>Assigned People</li>
          <li>Assigned People</li>
          <li>Assigned People</li>
          <li>Assigned People</li>
          <li>Assigned People</li>
        </ul>
      </div>
    </div>
  );
}

export default ViewSingleRole;
