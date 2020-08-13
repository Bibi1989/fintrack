import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import "./Signup.css";

import { LockOutlined } from "@ant-design/icons";
import { useAuthContext } from "../../context/AuthContext";

const Signup2 = (props) => {
  const { signup } = useAuthContext();
  return (
    <>
      <h3>Password</h3>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          className={"input-field"}
          onChange={props.handleChange}
          name="password"
          value={signup.password}
        />
      </Form.Item>

      <h3>Confirm Password</h3>

      <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          className={"input-field"}
          name="confirmPassword"
          onChange={props.handleChange}
          value={signup.confirmPassword}
        />
      </Form.Item>
      <div className={"multiBtnDiv"}>
        <Button type="primary" onClick={props.showPrevOne}>
          Back
        </Button>
        <Button type="primary" htmlType="submit" onClick={props.showNextThree}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Signup2;
