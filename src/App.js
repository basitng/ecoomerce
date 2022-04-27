import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import HomePage from "./pages/gen";
import LinearIndeterminate from "./loader/Progress";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/gen/footer";
import PaymentPage from "./pages/auth/payment";
import DetailPage from "./pages/auth/Detail";
import ProfilePage from "./pages/auth/profile";
import SignupPage from "./pages/unauth/signup";
import InValidRoute from "./404";
import { AuthContext } from "./context/providers/AuthContext";
import _LinearBuffer from "./loader/BufferProgress";
import SearchPage from "./pages/gen/Search";
import Login from "./pages/unauth/login/Login";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EB5757",
    },
    secondary: {
      main: "#2B3445",
      light: "orange",
    },
  },
  typography: {
    fontFamily: "poppins",
  },
});
function App() {
  const navigate = useNavigate();
  const { isAuthenticated } = React.useContext(AuthContext);
  const user = isAuthenticated.isLoggedIn;
  return (
    <React.Fragment>
      <h1>OOPS --DNS NOT SERVED YET, PLEASE CONTACT YOUR WEB MASTER</h1>
      
      <ThemeProvider theme={theme}>
        <Routes>
          {user ? (
            <>
              <Route path="/signup" element={<Navigate to="/" />} />
              <Route path="/login" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/payment" element={<Navigate to="/" />} />
              <Route path="/profile" element={<Navigate to="/" />} />
            </>
          )}
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Navigation />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
