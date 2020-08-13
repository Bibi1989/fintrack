import React, { useState } from "react";
import Signup1 from "./Signup";
import "antd/dist/antd.css";
import Signup3 from "./Signup3";
import Signup2 from "./Signup2";
import { Form } from "antd";
import "./Signup.css";
import { useAuthContext } from "../../context/AuthContext";

const MasterSignup = () => {
  const { signup, signupAdmin, updateSignup } = useAuthContext();

  const handleLogoChange = (e) => {
    setValues({
      ...values,
      company_logo: e.target.files[0],
    });
  };

  const handleSubmit = async () => {
    const { fullName, email, password, companyName, company_logo } = values;
    const [firstName, lastName] = fullName.split(" ");
    const signupObject = { firstName, lastName, email, password, companyName };

    let form_data = new FormData();
    form_data.append(
      "sign_up_request",
      new Blob([JSON.stringify(signupObject)], { type: "application/json" })
    );
    form_data.append("company_logo", company_logo);

    try {
      const response = await signupAdmin(form_data);
      console.log({ response });
    } catch (err) {}
  };

  const initialState = {
    currentStep: 1,
  };
  const [forms, setForms] = useState(initialState);

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    company_logo: null,
  });

  const handleChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const showNextTwo = () => {
    if (values.fullName && values.email) {
      updateSignup(values);
      setForms({ currentStep: forms.currentStep + 1 });
    }
  };

  const showNextThree = () => {
    updateSignup(values);
    if (
      values.password &&
      values.confirmPassword &&
      values.password === values.confirmPassword
    ) {
      setForms({ currentStep: forms.currentStep + 1 });
    }
  };
  const showPrevOne = () => {
    setForms({ currentStep: forms.currentStep - 1 });
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "120px" }}>
        Create Company
      </h1>
      <div className={"loginFormChild"}>
        <Form onFinish={handleSubmit}>
          {forms.currentStep === 1 && (
            <Signup1
              currentStep={values.currentStep}
              handleChange={handleChange}
              showNextTwo={showNextTwo}
            />
          )}
          {forms.currentStep === 2 && (
            <Signup2
              currentStep={values.currentStep}
              handleChange={handleChange}
              showPrevOne={showPrevOne}
              password={signup.password}
              confirmPassword={signup.confirmPassword}
              showNextThree={showNextThree}
            />
          )}
          {forms.currentStep === 3 && (
            <Signup3
              currentStep={values.currentStep}
              handleChange={handleChange}
              showPrevOne={showPrevOne}
              handleLogoChange={handleLogoChange}
              companyName={signup.companyName}
              company_logo={signup.company_logo}
            />
          )}
        </Form>
      </div>
    </>
  );
};

export default MasterSignup;
