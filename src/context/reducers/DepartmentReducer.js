// import { FETCH_ALL_DEPARTMENT } from "../department/actions";
import { FETCH_ALL_DEPARTMENT, ADD_DEPARTMENT } from "../department/actions";

const DepartmentReducer = (state, action) => {
  switch (action.type) {
    case FETCH_ALL_DEPARTMENT:
      return {
        ...state,
        departments: action.departments,
      };
    case ADD_DEPARTMENT:
      return {
        ...state,
        department: action.departments,
      };

    default:
      return state;
  }
};

export default DepartmentReducer;
