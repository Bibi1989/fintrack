import React, { createContext, useReducer } from "react";
import DepartmentReducer from "../reducers/DepartmentReducer";
import axios from "axios";
import { FetchDepartmentAction, addDepartmentAction } from "./actions";

// const DEPARTMENT_URL = "https://fintrackapi-api.herokuapp.com/api/department";
// const DEPARTMENT_URL = "http://localhost:5000/api/v1/cars";
const DEPARTMENT_URL =
  "https://jsonblob.com/api/jsonBlob/c27345db-daed-11ea-a18f-0bab371030d6";

export const DepartmentContext = createContext();

const initialState = {
  departments: [],
  department: {},
};

export const DepartmentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DepartmentReducer, initialState);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(DEPARTMENT_URL, {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(response.data);
      dispatch(FetchDepartmentAction(response.data));
    } catch (error) {}
  };
  // const fetchDepartment = async () => {
  //   try {
  //     const response = await axios.get(DEPARTMENT_URL);
  //     console.log(response.data);
  //     dispatch(FetchDepartmentAction(response.data));
  //   } catch (error) {}
  // };

  const addDepartment = async (department) => {
    try {
      const response = await axios.post(
        DEPARTMENT_URL,
        JSON.stringify({ id: 2, deptName: department }),
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(response.data);
      dispatch(addDepartmentAction(response.data));
    } catch (error) {}
  };

  return (
    <DepartmentContext.Provider
      value={{
        fetchDepartments,
        addDepartment,
        departments: state.departments,
      }}
    >
      {children}
    </DepartmentContext.Provider>
  );
};
