import React from "react";
import {
  Container,
  Row,
  Div,
  H1,
  PlusSpan,
  PInvite,
  PLight,
  PBold,
  DivAvatar,
  FlexInvite,
  Ul,
  Li,
  ListProfile,
  ListName,
  ListDate,
  ShowMenu,
  Flex,
} from "./style";
import { Button } from "../CreateDepartment/style";
import { Avatar } from "../ViewDepartments/Card";
import { useParams, useHistory } from "react-router-dom";

import { data, singleLists } from "../datas/data";
import { useState } from "react";

const SingleDepartmentView = () => {
  const [show, setShow] = useState();
  const history = useHistory();
  const { deptId } = useParams();
  const getDetails = data.find(({ id: viewId }) => viewId === Number(deptId));
  const handleClick = (list) => {
    setShow(list.id);
  };
  return (
    <Container>
      <Row>
        <Div>
          <H1>{getDetails.title}</H1>
          <PLight>Line Manager: Micheal Chukwu</PLight>
        </Div>
        <Div>
          <DivAvatar>
            {getDetails.avatars.map((image) => (
              <Avatar size='1em' key={image}>
                {image}
              </Avatar>
            ))}
          </DivAvatar>
          <Button
            padding='0.4em 2em'
            fontSize='1em'
            onClick={() =>
              history.push(`/dashboard/department/views/${deptId}/invite`)
            }
          >
            Add
          </Button>
        </Div>
        <FlexInvite>
          <PlusSpan>+</PlusSpan>
          <PInvite
            onClick={() =>
              history.push(`/dashboard/department/views/${deptId}/invites`)
            }
          >
            View Invites
          </PInvite>
        </FlexInvite>
      </Row>
      <Row direction='column'>
        <Ul>
          {singleLists.map((list) => (
            <Flex id='1' key={list.id} onClick={() => handleClick(list)}>
              <Li>
                <ListProfile>
                  <Avatar size='1em'>
                    {list.name.split(" ")[0][0].toUpperCase() +
                      list.name.split(" ")[1][0].toUpperCase()}
                  </Avatar>
                  <ListName>
                    <PBold>{list.name}</PBold>
                    <PInvite>{list.title}</PInvite>
                  </ListName>
                </ListProfile>
                <ListDate>Date Joined {list.date}</ListDate>
              </Li>
              <ShowMenu className={show === list.id && "show"}>
                <Button
                  style={{ marginRight: "3em" }}
                  onClick={() =>
                    history.push(`/dashboard/department/staff/${list.id}`)
                  }
                >
                  View Staff
                </Button>
                <PInvite
                  style={{ marginRight: "3em" }}
                  onClick={() =>
                    history.push(
                      `/dashboard/department/update/staff/${list.id}`
                    )
                  }
                >
                  Edit
                </PInvite>
                <PInvite>Remove</PInvite>
              </ShowMenu>
            </Flex>
          ))}
        </Ul>
      </Row>
      <div>
        <Button
          background='#10655e'
          onClick={() => history.push("/dashboard/department/views")}
        >
          View Departments
        </Button>
      </div>
    </Container>
  );
};

/* {list.name.split(" ")[0][0].toUpperCase() +
list.name.split(" ")[1][0].toUpperCase()} */
export default SingleDepartmentView;
