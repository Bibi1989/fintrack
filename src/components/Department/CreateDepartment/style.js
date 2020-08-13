import styled from "styled-components";

// const image_background = "./assets/background.png";
const image_background = "../../../../assets/background.png";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3em;
  min-height: 600px;
  background: #ffffff;
  border-radius: 0.35em;
  position: relative;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 2em 10px;
  }
`;
export const ImageStyle = styled.div`
  background: url(${image_background});
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
`;
export const ImageContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;

  h1 {
    font-size: ${({ size }) => (size ? size : "10em")};
    margin-bottom: 0;
    padding: 0;
  }

  p {
    font-size: 2em;
  }
`;
export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Form = styled.div``;
export const FormDiv = styled.div`
  width: 100%;
  margin-bottom: 3em;
`;
export const Label = styled.label`
  display: block;
`;
export const Input = styled.input`
  width: ${({ width }) => (width ? width : "60%")};
  padding: 0.8em 1em;
  border: 1px solid #aaaaaa;
  border-radius: 0.25em;
  outline: none;
`;
export const Button = styled.button`
  padding: ${({ padding }) => (padding ? padding : "0.8em 2.5em")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1em")};
  border: none;
  border-radius: 0.25em;
  background: ${({ background }) => (background ? background : "#34a853")};
  color: #ffffff;
  outline: none !important;
`;
export const FormHeader = styled.div``;
export const H1 = styled.h1`
  font-weight: 550;
  padding-bottom: 0.5em;
  font-size: ${({ size }) => (size ? size : "3em")};
  color: ${({ color }) => (color ? color : "white")};
`;
export const P = styled.p`
  font-size: 1.2em;
`;
export const ButtonViewDepartment = styled(Button)`
  position: absolute;
  right: 4em;
  top: 6em;
`;
