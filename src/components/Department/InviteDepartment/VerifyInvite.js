import React from "react";
import { Form, Input, Button } from "antd";
// import useForm from "react-hook-form";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const VerifyInvite = () => {
  const [form] = Form.useForm();

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
      <Form {...layout} name="basic" form={form} onFinish={handleFormSubmit}>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>

        <Form.Item label="Verification Code" name="code">
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={onReset}>
            Verify
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default VerifyInvite;
