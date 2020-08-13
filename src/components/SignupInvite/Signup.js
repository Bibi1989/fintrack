import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, InputNumber } from "antd";
import { UserOutlined, LockOutlined, NumberOutlined } from "@ant-design/icons";
import { useAuthContext } from "../../context/AuthContext";

const SignupInvite = (props) => {
  const [form] = Form.useForm();

  /* const onFinishFailed = ({ errorFields }) => {
    form.scrollToField(errorFields[0].name);
  }; */

  const { signupInvite, signupUser } = useAuthContext();
  const [state, setState] = useState(signupInvite);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onFinish = (state) => {
    console.log("Received values of form: ", state);
    console.log(state.firstName);
    signupUser(state);
    console.log("done");
  };

  return (
    <>
      <div className={"loginFormChild"}>
        <h1 className={"headerPadding"}>SignUp</h1>
        <Form
          onFinish={onFinish}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          // onFinish={onFinish}
        >
          <h3>First Name</h3>
          <Form.Item
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your First name!",
              },
              {
                len: 2,
                message: "First name must be a minimum of 2 characters!",
              },
            ]}
            className={"first"}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              name="firstName"
              type="user"
              aria-label="form-input"
              placeholder="First name"
              style={{ color: "rgba(0,0,0,.25)" }}
              value={props.firstName}
              onChange={handleChange}
              className="inputField ant-select-selection"
            />
          </Form.Item>

          <h3>Last Name</h3>
          <Form.Item
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your Last name!",
              },
            ]}
            className={"first"}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              name="lastName"
              type="user"
              aria-label="form-input"
              placeholder="Last name"
              style={{ color: "rgba(0,0,0,.25)" }}
              value={props.lastName}
              onChange={handleChange}
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
              onChange={handleChange}
              value={props.email}
            />
          </Form.Item>
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
              onChange={handleChange}
              name="password"
              value={props.password}
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
              onChange={handleChange}
            />
          </Form.Item>
          <h3>Phone Number</h3>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <InputNumber
              prefix={<NumberOutlined className="site-form-item-icon" />}
              name="phone"
              // type="text"
              len={11}
              placeholder="phone Number"
              style={{ color: "rgba(0,0,0,.25)" }}
              value={props.phone}
              onChange={handleChange}
            />
          </Form.Item>

          <div className="signup_sideBtnDiv">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                id="login-btn"
                className="login-form-button"
              >
                SignUP
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
};

export default SignupInvite;
