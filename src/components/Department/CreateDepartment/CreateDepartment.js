import React, { useState, useContext } from "react";
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
} from "./style";
import ConfirmModal from "./ConfirmModal";
import { DepartmentContext } from "../../../context/department/DepartmentProvider";

const CreateDepartment = () => {
  const { addDepartment } = useContext(DepartmentContext);
  const history = useHistory();
  const [deptName, setDepartment] = useState("");

  const onsubmit = () => {
    // e.preventDefault();
    addDepartment(deptName);
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
        <FormHeader>
          <H1>CREATE A DEPARTMENT</H1>
          <P>Give The Department A Name</P>
        </FormHeader>
        <Form>
          <FormDiv>
            <Label>Department Name</Label>
            <Input
              type='text'
              name='department'
              placeholder='Add Department'
              onChange={({ target: { value } }) => setDepartment(value)}
            />
          </FormDiv>
          {/* <FormDiv>
            <Label>Add Email</Label>
            <Input type='email' name='email' onChange={handleInput} />
          </FormDiv> */}
          <ConfirmModal onsubmit={onsubmit} />
        </Form>
      </FormStyle>
    </Container>
  );
};

export default CreateDepartment;
