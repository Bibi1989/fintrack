import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import "./Signup.css";
import { UserOutlined } from "@ant-design/icons";
import { useAuthContext } from "../../context/AuthContext";

const Signup1 = (props) => {
  const { signup } = useAuthContext();

  return (
    <>
      <h3>Full Name</h3>
      <Form.Item
        name="fullname"
        rules={[
          {
            required: true,
            message: "Please input your Full name!",
            whitespace: true,
          },
        ]}
        className={"first"}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          name="fullName"
          type="user"
          aria-label="form-input"
          placeholder="Full name"
          style={{ color: "rgba(0,0,0,.25)" }}
          onChange={props.handleChange}
          value={signup.fullName}
          className="inputField ant-select-selection"
        />
      </Form.Item>

      <h3>Email</h3>

      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
        ]}
        className={"first"}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          name="email"
          type="user"
          style={{ color: "rgba(0,0,0,.25)" }}
          placeholder="Email"
          aria-label="form-input"
          className="inputField"
          onChange={props.handleChange}
          value={signup.email}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit" onClick={props.showNextTwo}>
        Next
      </Button>
    </>
  );
};

export default Signup1;
