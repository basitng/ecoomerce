import React, { useContext, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { CircularProgress, makeStyles, Typography } from "@material-ui/core";
import { Email, Facebook } from "@material-ui/icons";
import { blue, red } from "@material-ui/core/colors";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/providers/AuthContext";
import { authAPI } from "../requestMethods";
import axios from "axios";
import _customErrorMessage from "../messages/Error";
import _customValidMessage from "../messages/Success";
const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: "400px",
    textAlign: "center",
    padding: 50,
    [theme.breakpoints.down("xs")]: {
      minWidth: "90%",
    },
  },
  typo: {
    marginTop: "-1rem",
  },
  pushDown: {
    marginTop: "2rem",
  },
}));
export default function LoginForm({
  handleClick1,
  setLoginModal,
  loginModal,
  handleClose,
}) {
  const { isAuthenticated, dispatch } = useContext(AuthContext);
  const [isError, setIsError] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const styles = useStyles();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    await authAPI
      .post("/login", {
        email: email,
        password: pwd,
      })
      .then((res) => {
        dispatch({ type: "logUser", payload: res.data });
        navigate(0);
        setIsValid(isAuthenticated.error);
      })
      .catch((error) => {
        dispatch({ type: "logUserFailed", payload: error });
        setIsError(isAuthenticated.error);
      });
  };

  useEffect(() => {
    if (loginModal) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [handleClick1, handleClose]);

  return (
    <div style={{ width: "60%" }}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        classes={{ paper: styles.paper }}
      >
        <DialogTitle id="form-dialog-title">Welcome To Ecommerce</DialogTitle>
        <form>
          {isError && (
            <_customErrorMessage
              handleSubmit={handleSubmit}
              msg={"Invalid credentials"}
            />
          )}
          {isValid && (
            <_customValidMessage
              handleSubmit={handleSubmit}
              msg={"Logged in successfully"}
            />
          )}
          <Typography variant="p" color="secondary" className={styles.typo}>
            Log in with email & password
          </Typography>
          <DialogContent className={styles.pushDown}>
            <TextField
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              name="email"
              type="email"
              fullWidth
              variant="outlined"
              style={{ marginBottom: 10 }}
              helperText="Email is required"
            />
            <TextField
              value={pwd}
              required
              onChange={(e) => setPwd(e.target.value)}
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              helperText="Password is required"
            />
            <br />
            <br />

            {submitted ? (
              <CircularProgress color="secondary" />
            ) : (
              <Button
                fullWidth
                color="primary"
                variant={submitted ? "disabled" : "contained"}
                size="large"
                onClick={handleSubmit}
              >
                Login
              </Button>
            )}
            <br />
            <br />
            <div className="or-cred">
              <Typography>On</Typography>
              <Button
                startIcon={<Facebook />}
                style={{ marginBottom: 10, background: blue[800] }}
                fullWidth
                color="primary"
                variant="contained"
                size="large"
              >
                <Typography style={{ fontSize: 13 }}>
                  {" "}
                  Continue with facebook
                </Typography>
              </Button>
              <Button
                startIcon={<Email />}
                style={{ marginBottom: 10, background: red[900] }}
                fullWidth
                color="primary"
                variant="contained"
                size="large"
              >
                <Typography style={{ fontSize: 13 }}>
                  {" "}
                  Continue with Google
                </Typography>
              </Button>
              <br />
              <br />
              <Typography style={{ fontSize: 14 }} color="secondary">
                Don’t have account?{" "}
                <b>
                  <Link className="logo-link" to="/signup">
                    Sign Up
                  </Link>
                </b>
              </Typography>
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
