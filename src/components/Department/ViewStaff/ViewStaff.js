import React from "react";
import styled from "styled-components";
import { PLight } from "../SingleDepartmentView/style";

import { singleLists } from "../datas/data";
import { useParams } from "react-router-dom";

const ViewStaff = () => {
  const { id } = useParams();
  const staff = [...singleLists].find((list) => list.id === Number(id));
  return (
    <Container>
      <H1>{staff.name}</H1>
      <PLight>{staff.title}</PLight>
      <PLight>{staff.date}</PLight>
    </Container>
  );
};

export default ViewStaff;

export const Container = styled.div`
  padding: 4em 6em;
  background: white;
`;

export const H1 = styled.h1`
  text-align: center;
  font-weight: 650;
  color: #333333;
`;
