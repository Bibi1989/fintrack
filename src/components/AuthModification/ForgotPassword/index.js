import React, { useState, useContext } from "react";
import Form from "../commons/Form";
import "../ChangePasswords/changePassword.css";
import { ForgotPasswordContext } from "../../../context/password/PasswordAuthContext";

const ForgotPasswordForm = () => {
  const { forgotPassword } = useContext(ForgotPasswordContext);
  const [email, setEmail] = useState("");

  const handleChange = ({ target: { value } }) => setEmail(value);

  return (
    <Form title="Forgot Password">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          forgotPassword(email);
        }}
      >
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
