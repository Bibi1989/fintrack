import {
  SET_ERROR,
  SET_LOADING,
  RESET,
  LOGIN,
  UPDATESIGNUP,
  VISIBLE,
  SETBANNER,
} from "../actionTypes";
import { PROFILE } from "../actions/profileAction";

export const AuthReducer = (state, action) => {
  console.log({state})
  console.log({"action.payload": action.payload});
  switch (action.type) {
    case PROFILE:
      return { 
        ...state,
        profileData: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case LOGIN:
      // localStorage.setItem("data", JSON.stringify(action.payload.data));
      // localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {};
    case UPDATESIGNUP:
      return {
        ...state,
        signup: action.payload,
      };
    case VISIBLE:
      return {
        ...state,
        bannerState: action.payload,
      };
    case SETBANNER:
      return {
        ...state,
        bannerState: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case RESET:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
