import React, { useState } from "react";
import "../AuthModification/ChangePasswords/changePassword.css";
import { Form, Button } from "antd";
import { Link } from "react-router-dom";
import { SET_ERROR } from "../../context/actionTypes";
// import { SET_ERROR, SET_LOADING } from "../../context/actionTypes";
import { useAuthContext } from "../../context/AuthContext";
// import { useAuthContext, AuthContext } from "../../context/AuthContext";
// import { UserOutlined } from "@ant-design/icons";
import { InputStyle } from "../LoginInput/Login";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
// import Loading from "../Loading";

const CreateProfile = (props) => {
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

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    profileData,
    setProfile,
    setLoading,
    loading,
    clearLoading,
  } = useAuthContext();

  console.log({ initialprofileData: profileData });

  const details = { fullName, email, password, loading };

  const handleSubmit = (event) => {
    // event.preventDefault();
    const response = {
      status: "OK",
      message: "profile creation successful",
      error: null,
      timestamp: "05-05-2020 09:40:47",
      debugMessage: null,
      subErrors: null,
      data: {
        id: 54,
        fullName: "eze francisca",
        password:
          "$2a$10$ne7S2c8PGNG0UbuG67QwmeIdRpjA2RMrOL9sidwDzbid0eA4q7BIu",
        email: "phillipfrancisca@gmail.com",
      },
    };

    try {
      // axios({
      //   method: "post",
      //   url: "http://localhost:9170/api/v1/create",
      // data: {fullName, email, password }
      // }).then((response)=>{
      //   if(!response){
      //   console.log(`no response gotten`)
      //   return
      //   }
      //   if(response){
      //     console.log(`i got the response`)
      //   }
      // })
      setLoading(true);

      if (response) {
        console.log({ fullName, email, password });
        setProfile(details);

        // window.location.replace("/login");
        // alert(`You can now login to your account`);
      }
    } catch (error) {
      props({ type: SET_ERROR });
    }
    console.log(`response has been submitted`);

    clearLoading(false);
  };

  return (
    <>
      <div className={"loginFormChild"}>
        <h1 className={"headerPadding"} style={{ textAlign: "left" }}>
          Create Profile
        </h1>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please input your full name",
              },
            ]}
          >
            <InputStyle
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="user"
              className="inputField ant-select-selection"
              // className={"inputForm"}
              placeholder="full Name"
              aria-label="form-input"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Item>

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
            <InputStyle
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

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <InputStyle
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              aria-label="form-input"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              style={{ borderRadius: "5px" }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Join Now
            </Button>

            <Link to="/login">
              <Button
                style={{ marginLeft: "3em", borderRadius: "5px" }}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Login
              </Button>
            </Link>
          </Form.Item>

          {/* <div className={"sideBtn"}>
            <Form.Item {...tailLayout}>
              <Button
                type="primary"
                htmlType="submit"
                className={"form-button"}
              >
                Join Now
              </Button>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Link to="/login">
                <a type="primary" htmlType="submit">
                  Login
                </a>
              </Link>
            </Form.Item>
          </div> */}
        </Form>
      </div>
    </>
  );
};

export default CreateProfile;
