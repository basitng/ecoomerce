export const productReducer = (state, action) => {
  switch (action.type) {
    case "addProduct":
      return [
        ...state,
        {
          data: (state.data = localStorage.setItem(
            "data",
            JSON.stringify(action.payload)
          )),
          successful: true,
          error: false,
        },
      ];

    case "viewProduct":
      return [
        ...state,
        {
          data: (state.data = localStorage.getItem(
            "data",
            JSON.stringify(action.payload)
          )),
          successful: true,
          error: false,
        },
      ];
  }
};
