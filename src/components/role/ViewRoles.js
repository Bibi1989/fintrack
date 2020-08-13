import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  EditButton,
  DeleteButton,
  SpanTag,
} from "../Department/InviteDepartment/style";
import { Button } from "../Department/CreateDepartment/style";
import {
  Row,
  Div,
  PBold,
  Ul,
  Li,
  Flex,
} from "../Department/SingleDepartmentView/style";

const ViewRoles = () => {
  const history = useHistory();
  /* const handleClick = (role) => {
    console.log("this is " + role.name + " role");
  }; */

  // Fetching roles
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://jsonblob.com/api/jsonblob/1b969805-da7e-11ea-983b-7149b374113f"
      )
      .then((res) => {
        setRoles(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Row direction="column">
        <Ul>
          {roles.map((role) => (
            <Flex key={role.id}>
              <Li>
                <Div style={{ paddingLeft: "2em", width: "200px" }}>
                  <PBold>
                    {role.name} <SpanTag> ({role.description})</SpanTag>
                  </PBold>
                </Div>
                {/* <Div style={{ width: "250px" }}>
                  <PBold> Date Invited {role.date} </PBold>
          </Div> */}
                <Div style={{ width: "350px" }}>
                  <EditButton
                    style={{
                      marginLeft: "3em",
                      marginRight: "1em",
                      height: "40px",
                      width: "100px",
                    }}
                    onClick={() => {
                      history.push({
                        pathname: `/dashboard/roles/edit/${role.id}`,
                        state: role,
                      });
                    }}
                  >
                    Edit
                  </EditButton>

                  <DeleteButton
                    style={{ height: "40px", width: "100px" }}
                    onClick={() => {
                      history.push({
                        pathname: `/dashboard/roles/view/${role.id}`,
                        state: role,
                      });
                    }}
                  >
                    View
                  </DeleteButton>
                </Div>
              </Li>
            </Flex>
          ))}
        </Ul>
      </Row>
      <div>
        <Button
          background="#34a853"
          onClick={() => history.push("/dashboard/roles")}
        >
          Create Role
        </Button>
      </div>
    </div>
  );
};

export default ViewRoles;
