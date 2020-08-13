import React from "react";
import "./style.css";

const Form = ({ children, title }) => {
  return (
    <div className="form-container">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Form;
