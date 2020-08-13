import React, { useState } from "react";
import Form from "../commons/Form";
import "../ChangePasswords/changePassword.css";

const RestPasswordForm = () => {
  const [values, setValues] = useState({
    email: "",
    code: "",
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
    <Form title="Reset Password">
      <form>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Code</label>
          <input
            type="text"
            name="code"
            value={values.code}
            onChange={handleChange}
          />
        </div>
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

export default RestPasswordForm;
