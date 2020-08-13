import React, { useState } from "react";
import { Modal } from "antd";
// import { Failed } from "../Failed";
// import { Success } from "../Success";
import { useAuthContext } from "../../context/AuthContext";
import { FcCheckmark } from "react-icons/fc";
import "./banner.css";

const Banner = () => {
  const { bannerState, handleCancel, handleOk } = useAuthContext();
  // const { bannerState, showModal, handleCancel, handleOk } = useAuthContext();
  const [state] = useState(bannerState);
  // const [state, setState] = useState(bannerState);

  // const showModal = () => {
  //   setState({
  //     visible: true,
  //   });
  // };

  // const handleOk = () => {
  //   setState({ loading: true });
  //   setTimeout(() => {
  //     setState({ loading: false, visible: false });
  //   }, 3000);
  // };

  // const handleCancel = () => {
  //   setState({ visible: false });
  // };

  return (
    <div>
      <Modal
        visible={state.visible}
        title='Signup Successful'
        onOk={handleOk}
        onCancel={handleCancel}
        footer={"you have signed up successfully"}
      >
        <div className={"parentModal"}>
          <div className={"successDiv"}>
            <div className={"checkMarkDiv"}>
              <FcCheckmark
                size={100}
                style={{ backgroundColor: "white" }}
                className={"checkIcon"}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Banner;
