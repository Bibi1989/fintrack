import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import "./signup3.css";
import { BankOutlined, UploadOutlined } from "@ant-design/icons";
import { useAuthContext } from "../../context/AuthContext";
import { MoonLoader } from "react-spinners";
import Banner from "../Banner/Banner";

const Signup3 = (props) => {
  const { signup, loading, bannerState } = useAuthContext();
  return (
    <>
      <h3>Company Name</h3>
      <Form.Item
        name="companyName"
        rules={[
          {
            required: true,
            message: "Please input your company name!",
          },
        ]}
      >
        <Input
          prefix={<BankOutlined className="site-form-item-icon" />}
          name="companyName"
          type="text"
          placeholder="company name"
          style={{ color: "rgba(0,0,0,.25)" }}
          value={signup.companyName}
          onChange={props.handleChange}
        />
      </Form.Item>
      <h3>Upload Company Logo</h3>
      <Form.Item
        name="company_logo"
        rules={[
          {
            required: true,
            message: "Please input your company logo!",
          },
        ]}
      >
        <input
          prefix={<UploadOutlined className="site-form-item-icon" />}
          type="file"
          id="logo"
          placeholder="Click to Upload Company Logo"
          accept="image/png, image/jpeg"
          onChange={props.handleLogoChange}
          style={{ color: "rgba(0,0,0,.25)" }}
          value={signup.logo}
          name="company_logo"
        />
      </Form.Item>

      <div className="multiBtnDiv ">
        <Button
          type="primary"
          id="login-btn"
          className="multiBtn signupBtn"
          onClick={props.showPrevOne}
        >
          Back
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          id="login-btn"
          className="multiBtn signupBtn"
        >
          {loading && <MoonLoader size={20} color="white" />}
          SignUP
        </Button>
        {console.log({ "bannerState.visible": bannerState.visible })}
        {bannerState.visible && <Banner />}
      </div>
    </>
  );
};

export default Signup3;
