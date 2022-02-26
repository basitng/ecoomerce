export const searchReducer = (state, action) => {
  switch (action.type) {
    case "active":
      return {
        data: (state.data = action.payload),
        isEmpty: (state.isEmpty = false),
      };

    default:
      return state;
      break;
  }
};
