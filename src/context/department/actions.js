export const FETCH_ALL_DEPARTMENT = "FETCH_ALL_DEPARTMENT";
export const ADD_DEPARTMENT = "ADD_DEPARTMENT";

export const FetchDepartmentAction = (departments) => ({
  type: FETCH_ALL_DEPARTMENT,
  departments,
});
export const addDepartmentAction = (department) => ({
  type: ADD_DEPARTMENT,
  department,
});
