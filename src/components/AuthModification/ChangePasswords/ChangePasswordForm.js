import React, { useState } from "react";
import Form from "../commons/Form";
import "./changePassword.css";

const ChangePasswordForm = () => {
  const [values, setValues] = useState({
    new_password: "",
    confirm_new_password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <Form title="Change Password">
      <form>
        <div className="input-group">
          <label>New Password</label>
          <input
            type="password"
            name="new_password"
            value={values.new_password}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm_new_password"
            value={values.confirm_new_password}
            onChange={handleChange}
          />
        </div>
        <button>Change Password</button>
      </form>
    </Form>
  );
};

export default ChangePasswordForm;
