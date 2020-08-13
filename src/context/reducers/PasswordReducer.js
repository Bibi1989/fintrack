import {
  FORGOT_PASSWORD,
  PASSWORD_ERROR,
  CHANGE_PASSWORD,
} from "../password/types";

const reducer = (state, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD:
      return {
        ...state,
        forgot_password: action.payload,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        change_password: action.payload,
      };
    case PASSWORD_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
