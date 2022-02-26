import React from "react";
import { useReducer } from "react";
import { createContext } from "react";

export default function ProductContextProvider(props) {
  const [product, dispatch] = useReducer(productReducer, [], () => {
    const data = JSON.parse(localStorage.getItem("product"));
    return data || [];
  });
  const ProductContext = createContext();
  return <ProductContext.Provider>{props.children}</ProductContext.Provider>;
}
