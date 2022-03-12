import { useReducer, createContext } from "react";
import { useErrandReducer } from "../reducers/useErrandReducer";

export const useErrandContext = createContext();
export default function UseErrandContextProvider(props) {
  const state = {
    error: false,
    success: false,
    expireDate: null,
  };
  const [errand, dispatchErrand] = useReducer(useErrandReducer, state);
  return (
    <useErrandContext.Provider value={{ errand, dispatchErrand }}>
      {props.children}
    </useErrandContext.Provider>
  );
}
