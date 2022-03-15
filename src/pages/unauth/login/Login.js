import React, { useEffect, useState, useContext } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  LinearProgress,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/providers/AuthContext";
import { authAPI } from "../../../requestMethods";
import { Email, Facebook } from "@material-ui/icons";
import { red, blue } from "@material-ui/core/colors";
import { GoogleLogin } from "react-google-login";
import LinearIndeterminate from "../../../loader/Progress";
import { useErrandContext } from "../../../context/providers/ErrandContext";
import { Alert } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "40%",
    margin: "8rem 0rem",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      margin: "4rem 0rem",
    },
  },
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
export default function Login() {
  const { isAuthenticated, dispatch } = useContext(AuthContext);
  const { errand, dispatchErrand } = useContext(useErrandContext);
  const [GoogleCredentials, setGoogleCredentials] = useState("");
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

    await authAPI
      .post("/login", {
        email: email,
        password: pwd,
      })
      .then((res) => {
        dispatch({ type: "logUser", payload: res.data });
        dispatchErrand({ type: "success", payload: 3000 });
        navigate(0);
        setIsValid(isAuthenticated.error);
      })
      .catch((error) => {
        dispatch({ type: "logUserFailed", payload: error });
        dispatchErrand({ type: "error", payload: 6000 });
        setIsError(isAuthenticated.error);
        setSubmitted(false);
      });
  };
  const handleLogin = async (e) => {
    setSubmitted(true);
    authAPI
      .post("/google/login", {
        email: e.email,
      })
      .then((res) => {
        dispatch({ type: "logUser", payload: res.data });
        navigate(0);
        setIsValid(isAuthenticated.error);
      })
      .catch((error) => {
        dispatch({ type: "logUserFailed", payload: error });
        dispatchErrand({ type: "error", payload: 6000 });
        setIsError(isAuthenticated.errr);
        setSubmitted(false);
      });
  };

  const errorMessage = (msg) => (
    <Alert
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        zIndex: 300000,
        marginBottom: 25,
      }}
      severity="error"
    >
      {msg}!
    </Alert>
  );

  // run code everytime errand  changes
  useEffect(() => {
    setTimeout(() => {
      dispatchErrand({ type: "reset" });
    }, errand.expireDate);
    console.log(errand.error);
  }, [errand.error]);
  return (
    <div className={styles.container}>
      {submitted && <LinearIndeterminate />}

      <Grid container className={styles.form}>
        {errand.error && errorMessage("Email or Password not correct")}
        <Grid item xs={12} md={12}>
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
        </Grid>
        <Grid item xs={12} md={12}>
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
            <Typography>Or</Typography>

            <GoogleLogin
              buttonText="Continue with Google"
              onSuccess={(e) => handleLogin(e.profileObj)}
              onFailure={""}
              cookiePolicy={"single_host_origin"}
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            />
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
        </Grid>
      </Grid>
    </div>
  );
}
