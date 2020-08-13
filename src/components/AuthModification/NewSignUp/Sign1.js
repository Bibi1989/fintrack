import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Sign1 = () => {
  const initialState = {
    currentStep: 1,
  };
  const [forms, setForms] = useState(initialState);

  const [values, setValues] = useState({
    fullname: "",
    email: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const showNextTwo = (e) => {
    e.preventDefault();

    if (values.fullname || values.email) {
      setForms({ currentStep: forms.currentStep + 1 });
    }
  };
  const showNextThree = (e) => {
    e.preventDefault();

    if (values.fullname || values.email) {
      setForms({ currentStep: forms.currentStep + 1 });
    }
  };
  const showPrevOne = () => {
    if (values.fullname || values.email) {
      setForms({ currentStep: forms.currentStep - 1 });
    }
  };

  return (
    <div>
      {forms.currentStep == 1 && (
        <form onSubmit={showNextTwo}>
          <input
            type='text'
            name='fullname'
            placeholder='Fullname'
            onChange={handleChange}
          />
          <input
            type='text'
            name='email'
            placeholder='email'
            onChange={handleChange}
          />
          <button type='submit'>Next</button>
        </form>
      )}

      {forms.currentStep == 2 && (
        <form onSubmit={showNextThree}>
          <input type='text' placeholder='Username' />
          <input type='text' placeholder='Phone' />
          <button onClick={showPrevOne}>Back</button>
          <button>Next</button>
        </form>
      )}
      {forms.currentStep == 3 && (
        <form>
          <input type='text' placeholder='Fullname' />
          <input type='text' placeholder='email' />
          <button>Back</button>
          <button>Next</button>
        </form>
      )}
    </div>
  );
};

export default Sign1;
