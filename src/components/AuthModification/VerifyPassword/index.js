import React, { useState } from "react";
import Form from "../commons/Form";
import "../ChangePasswords/changePassword.css";

const VerifyPasswordForm = () => {
  const [values, setValues] = useState({
    email: "",
    code: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <Form title="Verify Password">
      <form>
        <div className="input-group">
          <label>Code</label>
          <input
            type="code"
            name="code"
            value={values.code}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </Form>
  );
};

export default VerifyPasswordForm;
