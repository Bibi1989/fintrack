import React, { createContext } from "react";
import { useReducer } from "react";
import axios from "axios";

import reducer from "../reducers/PasswordReducer";
import {
  forgotPasswordAction,
  passwordErrorAction,
  changePasswordAction,
  resetPasswordAction,
  verifyPasswordAction,
} from "./actions";

const initialState = {
  change_password: null,
  forgot_password: null,
  error: null,
};

export const ForgotPasswordContext = createContext(initialState);

const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

const FORGOT_PASSWORD_URL =
  "https://fintrackapi.herokuapp.com/api/auth/forgotpassword";
const CHANGE_PASSWORD_URL =
  "https://fintrackapi.herokuapp.com/api/auth/changepassword";
/* const RESET_PASSWORD_URL =
  "https://fintrackapi.herokuapp.com/api/auth/forgotpassword/resetpassword";
const VERIFY_PASSWORD_URL =
  "https://fintrackapi.herokuapp.com/api/auth/forgotpassword/verify"; */

export const PasswordProvider = ({ children }) => {
  const [dispatch] = useReducer(reducer, initialState);
  // const [state, dispatch] = useReducer(reducer, initialState);
  const forgotPassword = async (passwords) => {
    try {
      const response = await axios.post(FORGOT_PASSWORD_URL, passwords, header);
      dispatch(forgotPasswordAction(response.data));
    } catch (error) {
      dispatch(passwordErrorAction(error));
    }
  };
  const changePassword = async (passwords) => {
    try {
      const response = await axios.post(CHANGE_PASSWORD_URL, passwords, header);
      dispatch(changePasswordAction(response.data));
    } catch (error) {
      dispatch(passwordErrorAction(error));
    }
  };
  const resetPassword = async (passwords) => {
    try {
      const response = await axios.post(CHANGE_PASSWORD_URL, passwords, header);
      dispatch(resetPasswordAction(response.data));
    } catch (error) {
      dispatch(passwordErrorAction(error));
    }
  };
  const verifyPassword = async (passwords) => {
    try {
      const response = await axios.post(CHANGE_PASSWORD_URL, passwords, header);
      dispatch(verifyPasswordAction(response.data));
    } catch (error) {
      dispatch(passwordErrorAction(error));
    }
  };

  return (
    <ForgotPasswordContext.Provider
      value={{ forgotPassword, changePassword, resetPassword, verifyPassword }}
    >
      {children}
    </ForgotPasswordContext.Provider>
  );
};
