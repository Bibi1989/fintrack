import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  ImageStyle,
  ImageContent,
  FormStyle,
  Form,
  FormDiv,
  Input,
  Label,
  FormHeader,
  H1,
  P,
  ButtonViewDepartment,
} from "../CreateDepartment/style";

const ModifyStaff = () => {
  // const { addDepartment } = useContext(DepartmentContext);
  const history = useHistory();
  const [deptName, setDepartment] = useState("");

  const onsubmit = () => {
    // e.preventDefault();
    console.log(deptName);
  };

  return (
    <Container>
      <ButtonViewDepartment
        onClick={() => history.push("/dashboard/department/views")}
      >
        View Departments
      </ButtonViewDepartment>
      <ImageStyle>
        <ImageContent>
          <H1 style={{ color: "#8b7676" }}>05</H1>
          <P>
            Total Number <br /> of Departments
          </P>
        </ImageContent>
      </ImageStyle>
      <FormStyle onSubmit={onsubmit}>
        <Form>
          <FormHeader>
            <P>UPDATE STAFF</P>
          </FormHeader>
          <FormDiv>
            <Label>FullName</Label>
            <Input
              type='text'
              name='name'
              placeholder='Full Name'
              onChange={({ target: { value } }) => setDepartment(value)}
            />
          </FormDiv>
          <FormDiv>
            <Label>Department</Label>
            <Input
              type='text'
              name='department'
              placeholder='Add Staff Department'
              onChange={({ target: { value } }) => setDepartment(value)}
            />
          </FormDiv>
        </Form>
      </FormStyle>
    </Container>
  );
};

export default ModifyStaff;
