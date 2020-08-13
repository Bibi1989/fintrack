import { FETCH_ALL_DEPARTMENT, ADD_DEPARTMENT } from "./actions";

const DepartmentReducer = (state, action) => {
  switch (action.type) {
    case FETCH_ALL_DEPARTMENT:
      return {
        ...state,
        departments: action.payload,
      };

    default:
      return state;
  }
};

export default DepartmentReducer;
