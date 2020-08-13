import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Menu, Dropdown } from "antd";

// const menu = "./assets/menu.svg";

const Card = ({ department: { deptName, id } }) => {
  const history = useHistory();
  const [state, setState] = useState("");
  console.log(state);

  // menu dropdown ant.design
  const menus = (
    <Menu>
      <Menu.Item
        key='0'
        onClick={() => history.push(`/dashboard/department/views/${id}`)}
      >
        View Department
      </Menu.Item>
      <Menu.Item
        key='1'
        onClick={() => history.push(`/dashboard/department/edit/${id}`)}
      >
        Edit Department
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='3'>Remove Department</Menu.Item>
    </Menu>
  );

  return (
    <CardStyle>
      <H3>
        <span>{deptName}</span>
        <Dropdown overlay={menus} placement='bottomRight' trigger={["click"]}>
          <a
            className='ant-dropdown-link'
            onClick={(e) => e.preventDefault()}
            href
          >
            <div className='menu' onClick={() => setState(deptName)}>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
            </div>
          </a>
        </Dropdown>
      </H3>
      {/* <P>{status}</P>
      <P>{location}</P> */}
      {/* <Div>
        {avatars.map((avatar) => (
          <Avatar size="1.4em" key={avatar}>
            {avatar}
          </Avatar>
        ))}
      </Div> */}
    </CardStyle>
  );
};

export default Card;

export const CardStyle = styled.div`
  background-color: #10655e;
  padding: 2em 1.5em;
  border-radius: 0.5em;
  position: relative;
`;
export const H3 = styled.h3`
  color: #ffffff;
  padding-bottom: 1em;
  display: flex;
  justify-content: space-between;

  .menu {
    cursor: pointer;

    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: white;
      margin-bottom: 2px;
    }
  }
`;
export const P = styled.p`
  color: #85b0ac;
`;
export const Div = styled.div`
  display: flex;
`;
export const Avatar = styled.div`
  color: #85b0ac;
  border: 1px solid white;
  font-size: ${({ size }) => (size ? size : "2em")};
  width: ${({ width }) => (width ? width : "40px")};
  height: ${({ height }) => (height ? height : "40px")};
  border-radius: 50%;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -7px;

  &:first-child {
    margin-left: 0;
  }
`;

export const Actions = styled.div`
  position: absolute;
  top: 4em;
  right: 1em;
  color: #333333;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 3s ease-in-out;
`;
export const Ul = styled.div``;
export const Li = styled.div`
  padding: 0.8em;
  cursor: pointer;
`;
