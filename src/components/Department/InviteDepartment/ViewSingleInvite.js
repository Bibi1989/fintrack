import React, { useState } from "react";
import { data, singleLists } from "../datas/data";
import { useParams, useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const ViewSingleInvite = () => {
  const history = useHistory();
  const { deptId, inviteId } = useParams();

  const getDetails = singleLists.find(
    ({ id: viewId }) => viewId === Number(inviteId)
  );
  const getDept = data.find(({ id: viewId }) => viewId === Number(deptId));
  const [email, setEmail] = useState(getDetails.name);
  const [status, setStatus] = useState(getDetails.status);
  const [department, setDepartment] = useState(getDept.title);
  console.log(typeof email);

  return (
    <div>
      <Form
        {...layout}
        name='basic'
        initialValues={{
          email: `${email}`,
          department: `${department}`,
          status: `${status}`,
        }}
      >
        <Form.Item label='Email' name='email'>
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item label='Department' name='department'>
          <Input onChange={(e) => setDepartment(e.target.value)} />
        </Form.Item>

        <Form.Item label='Status' name='status'>
          <Input onChange={(e) => setStatus(e.target.value)} />
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
          onClick={() =>
            history.push(`/dashboard/department/views/${deptId}/invites`)
          }
        >
          View Invites
        </Button>
      </div>
    </div>
  );
};

export default ViewSingleInvite;

/* import React from "react";
import { useForm } from "react-hook-form";

function ViewSingleInvite() {
  const preValue = {
    email: "aby@gmail.com",
    status: "Register",
  };
  const { register, handleSubmit } = useForm({
    defaultValues: preValue,
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} placeholder="Email" type="text" name="email" />
      <input ref={register} placeholder="status" type="text" name="status" />
    </form>
  );
}

export default ViewSingleInvite; */
