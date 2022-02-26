import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/providers/AuthContext";
import { CartProvider } from "react-use-cart";
import SearchContextProvider from "./context/providers/SearchContext";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthContextProvider>
        <SearchContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </SearchContextProvider>
      </AuthContextProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
