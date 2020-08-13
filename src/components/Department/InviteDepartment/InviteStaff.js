import React, { useState } from "react";
import {
  Container,
  Form,
  DivGroup,
  Label,
  Select,
  Input,
  InputGroup,
  ButtonInvite,
  Icons,
} from "./style";
import { useParams } from "react-router-dom";

const InviteDepartment = () => {
  const [email, setEmail] = useState("");
  const [value, setValue] = useState([
    "Requester",
    "Line Manager",
    "CEO",
    "Financial Controller",
  ]);
  const [index, setIndex] = useState(0);

  const { id } = useParams();

  console.log({ id });

  const selectUp = () => {
    setIndex(index + 1);
    if (index >= value.length - 1) {
      setIndex(0);
    }
  };
  const selectDown = () => {
    setIndex(index - 1);
    if (index <= 0) {
      setIndex(value.length - 1);
    }
  };
  return (
    <Container>
      <Form>
        <DivGroup>
          <Label>Invite An Employee</Label>
          <Select>
            <Input
              type="text"
              value={value[index]}
              onChange={(e) => setValue(e.target.value)}
              style={{ borderRadius: "15px" }}
            />
            <Icons>
              <i class="fas fa-caret-up" onClick={selectUp}></i>
              <i class="fas fa-caret-down" onClick={selectDown}></i>
            </Icons>
          </Select>
        </DivGroup>
        <DivGroup>
          <Label>Email</Label>
          <InputGroup>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
              }}
            />
            <ButtonInvite
              style={{
                borderTopRightRadius: "15px",
                borderBottomRightRadius: "15px",
              }}
            >
              Invite
            </ButtonInvite>
          </InputGroup>
        </DivGroup>
      </Form>
    </Container>
  );
};

export default InviteDepartment;
