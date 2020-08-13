/* import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from "antd";
import "./login.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useAuthContext } from "../../context/AuthContext";
/* import axios from "axios";
import SupportHeader from "../../supportHeader"; 
import { Link } from "react-router-dom";

const NormalLoginForm = () => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();

  const handleSubmit = () => {
    login({ email, password });
  };

  return (
    <>
      <div className={"loginFormChild"}>
        <h1 className={"headerPadding"}>Login</h1>
        <Form
          layout="vertical"
          size="large"
          onSubmit={handleSubmit}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          {/* <h3>Email</h3> *}

          <Form.Item
            label="Email"
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
              className="inputField ant-select-selection"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          {/* <h3>Password</h3> *}
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
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              name="password"
              type="password"
              placeholder="Password"
              style={{ color: "rgba(0,0,0,.25)" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <div className={"sideBtn"}>
            <Form.Item>
              <div className={"formItems"}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Link to="/forgotpassword">
                  <span>
                    <a href="">Forgot password</a>
                  </span>
                </Link>
              </div>
            </Form.Item>
          </div>
          <div className={"sideBtnDiv"}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                id="login-btn"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
            <span>
              {" "}
              <Link to="/signUp">
                <a href="">Signup</a>
              </Link>
            </span>
          </div>
        </Form>
      </div>
    </>
  );
};

export default NormalLoginForm;
*/
