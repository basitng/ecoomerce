import React, { createContext, useReducer } from "react";
import { searchReducer } from "../reducers/SearchReducer";
const state = {
  data: null,
  isEmpty: true,
};
export const SearchContext = createContext();
export default function SearchContextProvider(props) {
  const [controller, dispatchSearch] = useReducer(searchReducer, state);

  return (
    <SearchContext.Provider value={{ controller, dispatchSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
}
