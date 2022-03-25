import { Grid, Typography } from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import LoginForm from "../../../modals/Login";
import "./Footer.css";
import { AuthContext } from "../../../context/providers/AuthContext";

export default function Footer() {
  const { isAuthenticated } = useContext(AuthContext);
  const { isLoggedIn } = isAuthenticated;
  const location = useLocation();
  return (
    <React.Fragment>
      <div
        className="footer"
        style={
          location.pathname === "/login" || location.pathname === "/signup"
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <Grid container spacing={5} justifyContent="center">
          <Grid item md={6} xs={12} className="footer-content1">
            <Typography variant="h4" style={{ color: "#fff", fontWeight: 900 }}>
              N'George Tech
            </Typography>
            <Typography variant="p" style={{ color: "#909eb8" }}>
              Welcome to our site, we provide all accessories you need to level
              up all your various carries.
            </Typography>
            <div className="footer-nav">
              <li>
                {" "}
                <Link className="link2" to="/">
                  Home{" "}
                </Link>
              </li>

              <li>
                {" "}
                {/* <Link className="link2" to="/">
                  Orders{" "}
                </Link> */}
              </li>
              <li>
                {" "}
                <Link className="link2" to="/">
                  Terms & conditions
                </Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    {" "}
                    <Link className="link2" to="/profile">
                      Profile{" "}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/" className="link2">
                      Logout{" "}
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li
                    style={{ paddingLeft: 10, cursor: "pointer" }}
                    component={Link}
                    to="/login"
                  >
                    {" "}
                    login
                  </li>
                  <li>
                    {" "}
                    <Link className="link2" to="/signup">
                      Create account
                    </Link>
                  </li>
                </>
              )}
            </div>
          </Grid>
          <Grid item md={6} xs={12} className="footer-content2">
            <Typography variant="h4" style={{ color: "#909eb8" }}>
              Contact us
            </Typography>
            <Typography variant="p" style={{ color: "#909eb8" }}>
              12 lagos road ikorodu, 100001, Nigeria.
            </Typography>
            <br />
            <Typography variant="p" style={{ color: "#909eb8" }}>
              Email: Nwakwo118@gmail.com
            </Typography>
            <br />
            <Typography variant="p" style={{ color: "#909eb8" }}>
              Phone: 08134471235
            </Typography>
            <div className="footer-flex">
              <div className="social-wrapper">
                <a href="https://web.facebook.com/NGeorgetech-planet-486821071848259">
                  <Facebook className="social-icon" />
                </a>
              </div>
              <div className="social-wrapper">
                <a href="">
                  <Twitter className="social-icon" />
                </a>
              </div>
              <div className="social-wrapper">
                <a href="https://www.instagram.com/n.georgetech_planet/">
                  <Instagram className="social-icon" />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div
        style={
          location.pathname === "/login" || location.pathname === "/signup"
            ? { display: "none" }
            : { display: "block" }
        }
        className="developer"
      >
        <Typography variant="p" className="dev-style">
          &copy; Copyright by georgetech created by basitng
        </Typography>
      </div>
    </React.Fragment>
  );
}
