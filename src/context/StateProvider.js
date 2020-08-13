import React, { useReducer } from "react";
import { profileContext, useRootContext, dispatchContext } from "./profileContext";
import { RootReducer } from "./reducers/profileReducer";

const StateProvider = ({ children }) => {


  const [state, dispatch] = useReducer(RootReducer, initialstate);

  return (
    <>
      <profileContext.Provider value={}>
        <dispatchContext.Provider value={dispatch}>
          {children}
        </dispatchContext.Provider>
      </profileContext.Provider>
    </>
  );
};

export default StateProvider;
