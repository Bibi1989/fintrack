import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import { Button } from "./style";

const ConfirmModal = ({ onsubmit }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => ;
  const handleShow = () => {
    onsubmit();
    setShow(true);
  };
  return (
    <div>
      <Button variant='primary' type='submit' onClick={handleShow}>
        Create Department
      </Button>

      <ModalStyle
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Circle />
          <H3>Your Department has</H3>
          <H3>Been Created</H3>
        </Modal.Body>
      </ModalStyle>
    </div>
  );
};

export default ConfirmModal;

const ModalStyle = styled(Modal)`
  width: 100%;

  .modal-content {
    height: 300px;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: grey;
  margin-bottom: 1em;
`;
const H3 = styled.h3`
  text-align: center;
`;
