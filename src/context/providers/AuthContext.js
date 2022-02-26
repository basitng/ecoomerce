import React, { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
const state = {
  isLoggedIn: localStorage.getItem("user") ? true : false,
  isSignedUp: localStorage.getItem("user") ? true : false,
  updated: true,
  error: false,
  success: false,
  payload: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  errorPayload: null,
};
export const AuthContext = createContext();
export default function AuthContextProvider(props) {
  const [isAuthenticated, dispatch] = useReducer(authReducer, state);

  return (
    <AuthContext.Provider value={{ isAuthenticated, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
}
