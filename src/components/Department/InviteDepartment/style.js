import styled from "styled-components";

export const Container = styled.div`
  padding: 6em 8em;
  background-color: #ffffff;
  border-radius: 0.3em;
  min-height: 600px;
  width: 100%;

  p {
    margin: 0;
  }
`;
export const Form = styled.form`
  width: 100%;
`;
export const DivGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 0.7em;
  margin-bottom: 5em;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.9em;
  font-weight: bold;
  padding-bottom: 0.4em;
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1em;
  border: 2px solid #f2f6fa;
  outline: none;
  font-size: 1.5em;
  :hover {
    border: 2px solid #abb7b7;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  width: 100%;
`;
export const Select = styled.div`
  width: 100%;
  position: relative;
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  right: 1em;
  transform: translateY(-50%);

  i {
    font-size: 1.5em;
    color: #444;
    padding: 0;
    cursor: pointer;
  }
`;
/* export const Button = styled.button`
  border: 0;
  font-size: 1.7em;
  background-color: #34a853;
  color: #ffffff;
  clip-path: circle(-1);
  width: 80%;
  padding: 0px;
  border-radius: 15px;
  text-align: center;
  padding-top: 12px;
  margin: 10px auto;
  :hover {
    box-shadow: 0 0 20px #7befb2;
  }
`; */

export const ButtonInvite = styled.button`
  border: 0;
  font-size: 1.7em;
  background-color: #34a853;
  color: #ffffff;
  clip-path: circle(-1);
  width: 25%;
  :hover {
    box-shadow: 0 0 20px #7befb2;
  }
`;

export const EditButton = styled.button`
  border: 0;
  font-size: 1.5em;
  background-color: #34a853;
  color: #ffffff;
  width: 15%;
  :hover {
    box-shadow: 0 0 20px #7befb2;
  }
  border-radius: 10px;
`;
export const DeleteButton = styled.button`
  border: 0;
  font-size: 1.5em;
  background-color: #e33d47;
  color: #ffffff;
  width: 15%;
  :hover {
    box-shadow: 0 0 20px #f08f95;
  }
  border-radius: 10px;
`;
export const SpanTag = styled.p`
  font-size: 14px;
  color: #b3b3b3;
  margin-right: 5em;
  margin: 0;
  padding: 0;
`;

export const InviteDiv = styled.div`
  padding-top: 0.7em;
  margin: 5em;
  text-align: center;
  border: 2px solid rgba(201, 224, 224, 0.918);
  box-shadow: 0 0 10px #333;
`;
