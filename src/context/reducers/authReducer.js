export const authReducer = (state, action) => {
  switch (action.type) {
    case "logUser":
      return {
        isLoggedIn: (state.isLoggedIn = true),
        error: (state.error = false),
        success: (state.success = true),
        payload: (state.payload = localStorage.setItem(
          "user",
          JSON.stringify(action.payload)
        )),
      };
    case "updateUser":
      return {
        isLoggedIn: (state.isLoggedIn = true),
        error: (state.error = false),
        success: (state.success = true),
        updated: (state.update = true ? setTimeout(() => false, 10000) : false),
        payload: (state.payload = localStorage.getItem("user")
          ? localStorage.setItem("user", JSON.stringify(action.payload))
          : ""),
      };

    case "signUser":
      return {
        isSignedUp: (state.isSignedUp = true),
        error: (state.error = false),
        success: (state.success = true),
        payload: (state.payload = action.payload),
        store: localStorage.setItem("user", JSON.stringify(state.payload)),
      };

    case "logUserFailed":
      return {
        isLoggedIn: (state.isLoggedIn = false),
        error: (state.error = true),
        success: (state.success = false),
        payload: (state.payload = null),
      };

    case "signUserFailed":
      return {
        isSignedUp: (state.isSignedUp = false),
        error: (state.error = true),
        success: (state.success = false),
        payload: (state.payload = null),
      };
    case "logout":
      return {
        isLoggedIn: (state.isLoggedIn = localStorage.removeItem("user")),
      };

    default:
      return state;
      break;
  }
};
