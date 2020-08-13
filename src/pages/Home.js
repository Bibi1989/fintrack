import React from "react";
import styled from "styled-components";
import { Button } from "../components/Department/CreateDepartment/style";
import { useHistory } from "react-router-dom";

const image = "../../assets/background.png";

const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <ImageWrapper>
        <Button
          padding="1em 4em"
          background="orangered"
          onClick={() => history.push("/login")}
        >
          Go To Dashboard
        </Button>
      </ImageWrapper>
    </Container>
  );
};

export default Home;

export const Container = styled.div``;
export const ImageWrapper = styled.div`
  min-height: 99.5vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
