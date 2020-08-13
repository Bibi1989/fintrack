import React, { useState } from "react";
import styled from "styled-components";

import { singleLists, data } from "../datas/data";
import { useParams, useHistory } from "react-router-dom";

import {
  Container,
  FormStyle,
  FormHeader,
  Form,
  FormDiv,
  Label,
  Input,
  Button,
  H1,
  P,
  ImageContent,
  ImageStyle,
} from "../CreateDepartment/style";

const UpdateDepartment = () => {
  const { id } = useParams();
  const history = useHistory();
  const update = [...data].find((list) => list.id === Number(id));
  const [values, setValues] = useState({
    status: update.status || "",
    title: update.title || "",
  });

  const handleInput = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const updateDepartment = (e) => {
    e.preventDefault();
    singleLists.map((list) => {
      if (list.id === Number(id)) {
        list.name = values.name;
        list.title = values.title;
      }
      return list;
    });
  };

  return (
    <Container>
      <ImageStyle>
        <ImageContent size='2em'>
          <H1>{update.title}</H1>
          <P>{update.status}</P>
        </ImageContent>
      </ImageStyle>
      <UpdateForm>
        <FormStyle>
          <button
            style={{
              border: "none",
              outline: "none",
              background: "teal",
              color: "white",
              padding: "5px 10px",
              position: "absolute",
              top: "10px",
              right: "20px",
              borderRadius: "5px",
            }}
            onClick={() => history.goBack()}
          >
            Go Back
          </button>
          <FormHeader>
            <H1 size='2.5em' color='#333333'>
              UPDATE A DEPARTMENT
            </H1>
          </FormHeader>
          <Form>
            <FormDiv>
              <Label>Department Name</Label>
              <Input
                type='text'
                placeholder='Update User name'
                name='name'
                value={values.title}
                onChange={handleInput}
                width='100%'
              />
            </FormDiv>
            <FormDiv>
              <Label>Status</Label>
              <Input
                type='text'
                placeholder='Title...'
                name='title'
                value={values.status}
                onChange={handleInput}
                width='100%'
              />
            </FormDiv>
            <Button onClick={updateDepartment}>Update Department</Button>
          </Form>
        </FormStyle>
      </UpdateForm>
    </Container>
  );
};

export default UpdateDepartment;

export const UpdateForm = styled.div`
  padding: 0 6em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
// export const Container = styled.div``
// export const Container = styled.div``
