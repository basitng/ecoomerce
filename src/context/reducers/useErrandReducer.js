export const useErrandReducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return {
        error: (state.error = false),
        success: (state.success = false),
        expireDate: (state.expireDate = null),
      };
    case "success":
      return {
        error: (state.error = false),
        success: (state.success = true),
        expireDate: (state.expireDate = action.payload),
      };
    case "error":
      return {
        error: (state.error = true),
        success: (state.success = false),
        expireDate: (state.expireDate = action.payload),
      };

    default:
      return state;
      break;
  }
};
