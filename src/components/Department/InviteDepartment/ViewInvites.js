import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { singleLists } from "../datas/data";
import { EditButton, DeleteButton, SpanTag } from "./style";
import { Button } from "../CreateDepartment/style";
import { Row, Div, PBold, Ul, Li, Flex } from "../SingleDepartmentView/style";

const ViewInvites = () => {
  const { deptId } = useParams();
  const history = useHistory();
  const handleClick = (list) => {
    console.log("this invite has been deleted");
  };
  return (
    <div>
      <Row direction="column">
        <Ul>
          {singleLists.map((list) => (
            <Flex key={list.id}>
              <Li>
                <Div style={{ paddingLeft: "2em", width: "200px" }}>
                  <PBold>
                    {list.name} <SpanTag> ({list.title})</SpanTag>
                  </PBold>
                </Div>
                <Div style={{ width: "250px" }}>
                  <PBold> Date Invited {list.date} </PBold>
                </Div>
                <Div style={{ width: "350px" }}>
                  <EditButton
                    style={{
                      marginLeft: "3em",
                      marginRight: "1em",
                      height: "40px",
                      width: "100px",
                    }}
                    onClick={() =>
                      history.push(
                        `/dashboard/department/views/${deptId}/invites/${list.id}`
                      )
                    }
                  >
                    Edit
                  </EditButton>

                  <DeleteButton
                    style={{ height: "40px", width: "100px" }}
                    onClick={() => handleClick(list)}
                  >
                    Delete
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
          onClick={() => history.push("/dashboard/department/views")}
        >
          View Departments
        </Button>
      </div>
    </div>
  );
};

export default ViewInvites;
