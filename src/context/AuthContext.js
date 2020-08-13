import React, { createContext, useContext, useReducer } from "react";
import { AuthReducer } from "./reducers/AuthReducer";
import { profile } from "./actions/profileAction";
import {
  SET_LOADING,
  RESET,
  SET_ERROR,
  UPDATESIGNUP,
  VISIBLE,
  SETBANNER,
} from "./actionTypes";
import axios from "axios";
import SupportHeader from "../supportHeader";
// import Banner from "../components/Banner/Banner";

const signupState = {
  step: 1,
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  companyName: "",
  logo: null,
};

const initialSignup = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: "",
};

const initialAuthState = {
  admin: null,
  signup: signupState,
  signupInvite: initialSignup,
  loginData: null,
  loading: false,
  success: false,
  failed: true,
  error: null,
  isAuthenticated: null,
  token: localStorage.getItem("token"),
  bannerState: {
    loading: false,
    visible: false,
  },
};

export const AuthContext = createContext(initialAuthState);

export const useAuthContext = () => {
  const myAuthContext = useContext(AuthContext);
  if (myAuthContext === undefined) {
    throw new Error(`useProfileContext must be used with a provider`);
  }
  return myAuthContext;
};

//provider Component

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);

  function setProfile(data) {
    dispatch(profile(data));
  }

  function setLoading(payload) {
    dispatch({
      type: SET_LOADING,
      payload,
    });
  }

  /* function success(payload) {
    dispatch({
      type: SUCCESS,
      payload,
    });
  } */
  function showModal(payload) {
    dispatch({
      type: VISIBLE,
      payload,
    });
  }

  const handleOk = (loading, visible) => {
    dispatch({
      type: SET_LOADING,
      payload: loading,
    });
    setTimeout(() => {
      dispatch({
        type: SETBANNER,
        payload: { loading, visible },
      });
    }, 3000);
  };

  function handleCancel(payload) {
    dispatch({
      type: VISIBLE,
      payload,
    });
  }

  /* function failed(payload) {
    dispatch({
      type: FAILED,
      payload,
    });
  } */

  function clearLoading(payload) {
    dispatch({
      type: RESET,
      payload,
    });
  }

  function updateSignup(payload) {
    dispatch({
      type: UPDATESIGNUP,
      payload,
    });
  }

  function setError(payload) {
    dispatch({
      type: SET_ERROR,
      payload,
    });
  }

  const signupAdmin = async (formData) => {
    try {
      setLoading(true);
      await axios
        .post(
          "https://fintrackapi-app.herokuapp.com/api/auth/signup/admin",
          formData,
          {
            headers: {
              "content-type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          alert(response.data);
          console.log({ response });
          console.log(response.data);
          console.log(`done here`);
          //displayBanner
          showModal({ loading: false, visible: true });

          setLoading(false);
          setError(null);
          window.location.replace("/login");
        })
        .catch((error) => {
          console.log(error);
          setError(error.error);
          setLoading(false);
          return;
        });
    } catch (error) {
      throw new Error(error);
    }
  };

  const signupUser = async (formData) => {
    try {
      setLoading(true);

      await axios
        .post(
          "https://fintrackapi-app.herokuapp.com/api/auth/signup",
          formData,
          SupportHeader({ "Content-type": "application/json" })
        )
        .then((response) => {
          console.log({ response });
          console.log(response.data);
          console.log(`done here`);
          setLoading(false);
          setError(null);
          window.location.replace("/login");
        })
        .catch((error) => {
          console.log(error);
          setError(error.error);
          setLoading(false);
          return;
        });
    } catch (error) {
      if (error.response) {
        console.log({ "errr.response": error.response });
        return error.response;
      }
      console.log(error);
      return error;
    }
  };

  const createRole = async (formData) => {
    try {
      setLoading(true);
      await axios.post(
        "https://fintrackapi-app.herokuapp.com/api/role",
        formData,
        SupportHeader({ "Content-type": "application/json" })
      );
      setLoading(false);
    } catch (err) {
      if (err.response) {
        return err.response;
      }
      return err;
    }
  };

  const fetchRoles = async () => {
    try {
      const response = await axios.get(
        "https://fintrackapi-app.herokuapp.com/api/role"
      );
      if (response.data.data) {
        return response.data.data;
      } else {
        throw new Error(response.data.error);
      }
    } catch (err) {
      if (err.response) {
        return err.response;
      }
      return err.message;
    }
  };

  const login = async (formData) => {
    try {
      setLoading();
      localStorage.removeItem("token");
      localStorage.removeItem("data");
      const response = await axios.post(
        "https://fintrackapi.herokuapp.com/api/auth/login",
        formData,
        SupportHeader({ "Content-type": "application/json" })
      );
      // .then(res =>{
      //   console.log({res});
      //   console.log(res.data);
      //   console.log(`done here`)
      // })
      console.log(response);
      console.log(response.data);
      console.log("login successful");

      localStorage.setItem("token", response.data.token);
      setError(null);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          profileData: state.profileData,
          signupInvite: state.signupInvite,
          signup: state.signup,
          loginData: state.loginData,
          token: state.token,
          loading: state.loading,
          error: state.error,
          setProfile,
          setLoading,
          setError,
          signupUser,
          clearLoading,
          login,
          updateSignup,
          signupAdmin,
          createRole,
          fetchRoles,
          showModal,
          handleOk,
          bannerState: state.bannerState,
          handleCancel,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
