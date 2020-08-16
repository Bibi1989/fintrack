import React from "react";
import { useHistory } from "react-router-dom";
import {
  PInvite,
  PBold,
  Li,
  ListProfile,
  ListName,
  ListDate,
  DivProfile,
  Flex,
} from "./style";
// import { Button } from "../CreateDepartment/style";
import { Avatar } from "../ViewDepartments/Card";
import { Menu, Dropdown } from "antd";

const List = ({ handleClick, list, show }) => {
  const history = useHistory();

  const menus = (
    <Menu>
      <Menu.Item
        key='0'
        onClick={() => history.push(`/dashboard/department/staff/${list.id}`)}
      >
        View Staff
      </Menu.Item>
      <Menu.Item
        key='1'
        onClick={() =>
          history.push(`/dashboard/department/update/staff/${list.id}`)
        }
      >
        Edit
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='3'>Remove</Menu.Item>
    </Menu>
  );

  return (
    // <Flex id='1' onClick={() => handleClick(list)}>
    <Flex>
      <Li>
        <DivProfile>
          <ListProfile>
            <Avatar size='1em'>
              {list.name.split(" ")[0][0].toUpperCase() +
                list.name.split(" ")[1][0].toUpperCase()}
            </Avatar>
            <div style={{ paddingLeft: "2em" }}>
              <ListName>
                <PBold>{list.name}</PBold>
                <PInvite>{list.title}</PInvite>
              </ListName>
              <ListDate>Date Joined {list.date}</ListDate>
            </div>
          </ListProfile>
        </DivProfile>
        <Dropdown
          overlay={menus}
          placement='bottomRight'
          trigger={["click"]}
          className='menu'
        >
          <a
            className='ant-dropdown-link'
            onClick={(e) => e.preventDefault()}
            href
          >
            <i class='fas fa-ellipsis-v'></i>
          </a>
        </Dropdown>
      </Li>
    </Flex>
  );
};

export default List;
