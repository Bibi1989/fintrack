import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DepartmentNavBar = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <Link to="/dashboard/department" className="link">
            Create Department
          </Link>
        </Li>{" "}
        <Li>
          <Link to="/dashboard/department/view" className="link">
            View Departments
          </Link>
        </Li>
      </Ul>
    </Nav>
  );
};

export default DepartmentNavBar;

export const Nav = styled.nav`
  width: 100%;
  background: white;
  margin-top: 0.5em;
  margin-bottom: 3em;
`;
export const Ul = styled.nav`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
`;
export const Li = styled.nav`
  margin-right: 1em;
  .link {
    display: inline-block;
    padding: 1em;
    color: #777777;
    text-decoration: none;
  }
`;
// export const Nav = styled.nav``
