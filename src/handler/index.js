import { useContext, useEffect } from "react";
import { AuthContext } from "../context/providers/AuthContext";
import { authAPI } from "../requestMethods";
// import { AuthContext } from "../context/providers/AuthContext";

export const useLoginUser = ({ email, password, handleSubmit }) => {
  const { isAuthentiated, dispatch } = useContext(AuthContext);

  console.log("> Dispatch", isAuthentiated);
  const success = isAuthentiated.success;
  const error = isAuthentiated.errorPayload;
  useEffect(async () => {
    await authAPI
      .post("/login", { email, password })
      .then((res) => {
        dispatch({ type: "logUser", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "logUserFailed", payload: error });
      });
  }, [handleSubmit]);
  return { success, error };
};
