import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const SingleRoleView = () => {
  const history = useHistory();
  const validateMessages = {
    // required: "${name} is required!",
    // eslint-disable-next-line
  };
  const [name, setName] = useState(history.location.state.name);
  const [description, setDescription] = useState(
    history.location.state.description
  );
  const [status, setStatus] = useState(history.location.state.status);

  return (
    <div>
      <Form
        {...layout}
        name='basic'
        validateMessages={validateMessages}
        initialValues={{
          name: `${name}`,
          description: `${description}`,
          status: `${status}`,
          permissions: history.location.state.permissions,
        }}
      >
        <Form.Item label='Name' name='name' rules={[{ required: true }]}>
          <Input onChange={(e) => setName(e.target.value)} />
        </Form.Item>

        <Form.Item label='Description' name='description'>
          <Input onChange={(e) => setDescription(e.target.value)} />
        </Form.Item>

        <Form.Item label='Status' name='status' rules={[{ required: true }]}>
          <Input onChange={(e) => setStatus(e.target.value)} />
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
                  value='Can Approve'
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

        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Edit
          </Button>
        </Form.Item>
      </Form>

      <div style={{ marginLeft: "195px" }}>
        <Button
          style={{ backgroundColor: "#e33d47", color: "#fff" }}
          onClick={() => history.push(`/dashboard/roles/view`)}
        >
          View Roles
        </Button>
      </div>
    </div>
  );
};

export default SingleRoleView;
