import React from "react";
import "./login.css";
import styled from "styled-components";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Container>
      <Form
        size="large"
        layout="vertical"
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <InputStyle
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <InputStyle
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <LinkStyle to="forgotpassword" className="login-form-forgot">
            Forgot password
          </LinkStyle>
        </Form.Item>

        <Form.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ButtonRegister
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </ButtonRegister>

            <Link to="/signUp">
              <ButtonRegister
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                register now!
              </ButtonRegister>
            </Link>
          </div>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default Login;

export const Container = styled.div`
  padding: 3em;
`;

export const ButtonRegister = styled(Button)`
  margin-left: 3em;
  border-radius: 0.3em;
`;

export const InputStyle = styled(Input)`
  padding: 0.6em;
  font-size: 1.3em;
  border-radius: 5px;
`;
export const LinkStyle = styled(Link)`
  padding-left: 2em;
  text-decoration: none;
  font-size: 1em;
  color: #ccc;
  cursor: pointer;
`;
