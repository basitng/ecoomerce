import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/providers/AuthContext";
import { CartProvider } from "react-use-cart";
import SearchContextProvider from "./context/providers/SearchContext";
import UseErrandContextProvider from "./context/providers/ErrandContext";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthContextProvider>
        <UseErrandContextProvider>
          <SearchContextProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </SearchContextProvider>
        </UseErrandContextProvider>
      </AuthContextProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
