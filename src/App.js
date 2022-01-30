import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import HomePage from "./pages/gen";
import LinearIndeterminate from "./loader/Progress";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/gen/footer";
import PaymentPage from "./pages/auth/payment";
import DetailPage from "./pages/auth/Detail";
import ProfilePage from "./pages/auth/profile";
import SignupPage from "./pages/unauth/signup";
import InValidRoute from "./404";

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
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <LinearIndeterminate />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<InValidRoute />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
