import React from "react";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useHistory } from "react-router-dom";
import "./role.css";
// import { useAuthContext } from "../../context/AuthContext";
import { Form, Input, Button, Checkbox, Col, Row } from "antd";
// import { MoonLoader } from "react-spinners";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};
const CreateRole = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const validateMessages = {
    // required: "'${name} is required!",
  };

  // Submit button out of Form
  const handleFormSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        // Submit values
        // submitValues(values);
        console.log(values);
      })
      .catch((errorInfo) => {});
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div>
      <Form
        {...layout}
        name='basic'
        form={form}
        validateMessages={validateMessages}
        onFinish={handleFormSubmit}
        initialValues={{ permissions: "Can Request" }}
      >
        <Form.Item
          label='Name'
          name='name'
          rules={[{ required: true }]}
          style={{ fontSize: "16px" }}
        >
          <Input style={{ borderRadius: "5px" }} />
        </Form.Item>

        <Form.Item label='Description' name='desc' style={{ fontSize: "16px" }}>
          <Input style={{ borderRadius: "5px" }} />
        </Form.Item>
        <Form.Item
          label='Status'
          name='status'
          rules={[{ required: true }]}
          style={{ fontSize: "16px" }}
        >
          <Input style={{ borderRadius: "5px" }} />
        </Form.Item>

        <Form.Item name='permissions' label='Permissions'>
          <Checkbox.Group style={{ width: "400px" }}>
            <Row>
              <Col span={8}>
                <Checkbox
                  value='Can Request'
                  style={{ lineHeight: "32px", fontSize: "16px" }}
                >
                  Can Request
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value='Can Assign'
                  style={{ lineHeight: "32px", fontSize: "16px" }}
                >
                  Can Approve
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value='Can Verify'
                  style={{ lineHeight: "32px", fontSize: "16px" }}
                >
                  Can Verify
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Row>
          <Col span={18}>
            <Form.Item {...tailLayout}>
              <Button
                type='primary'
                htmlType='submit'
                onClick={onReset}
                style={{ borderRadius: "5px" }}
              >
                Create Role
              </Button>
            </Form.Item>
          </Col>
          <Col span={1}>
            <Form.Item {...tailLayout}>
              <Button
                style={{
                  backgroundColor: "#f1c120",
                  border: "0",
                  color: "#fff",
                  borderRadius: "5px",
                }}
                onClick={() => {
                  history.push("/dashboard/roles/view");
                }}
              >
                View Roles
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CreateRole;
