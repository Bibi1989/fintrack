import {
  FORGOT_PASSWORD,
  PASSWORD_ERROR,
  CHANGE_PASSWORD,
  RESET_PASSWORD,
  VERIFY_PASSWORD,
} from "./types";

export const forgotPasswordAction = (payload) => {
  return { type: FORGOT_PASSWORD, payload };
};

export const passwordErrorAction = (payload) => {
  return { type: PASSWORD_ERROR, payload };
};

export const changePasswordAction = (payload) => {
  return { type: CHANGE_PASSWORD, payload };
};
export const resetPasswordAction = (payload) => {
  return { type: RESET_PASSWORD, payload };
};
export const verifyPasswordAction = (payload) => {
  return { type: VERIFY_PASSWORD, payload };
};
