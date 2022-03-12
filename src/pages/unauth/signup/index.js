import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { Email, Facebook } from "@material-ui/icons";
import { blue, red } from "@material-ui/core/colors";
import { authAPI } from "../../../requestMethods";
import { AuthContext } from "../../../context/providers/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import LinearIndeterminate from "../../../loader/Progress";
import { useErrandContext } from "../../../context/providers/ErrandContext";
import { Alert } from "@material-ui/lab";

export default function SignupPage() {
  const navigate = useNavigate();
  const { errand, dispatchErrand } = React.useContext(useErrandContext);
  const [GoogleCredentials, setGoogleCredentials] = useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [Username, setUsername] = React.useState("");
  const { isAuthenticated, dispatch } = React.useContext(AuthContext);
  const [isError, setIsError] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const useStyles = makeStyles((theme) => ({
    paper: { minWidth: "400px", textAlign: "center", padding: "50px 10px" },
    typo: {
      marginTop: "-.5rem",
    },
    pushDown: {
      marginTop: "2rem",
    },
    container: {
      display: "grid",
      placeContent: "center",
      width: "50%",
      background: theme.palette.background.paper,
      marginTop: "5rem",
      marginBottom: "5rem",
      padding: 20,
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    header: {
      fontSize: 25,
      fontWeight: 800,
    },
    center: {
      display: "grid",
      placeContent: "center",
      padding: 20,
      textAlign: "center",
    },
    or: {
      paddingBottom: "1rem",
    },
  }));
  const styles = useStyles();
  const handleSubmit = async (e) => {
    setSubmitted(true);
    e.preventDefault();
    await authAPI
      .post("/register", {
        username: Username,
        email: email,
        password,
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
  const handleLogin = async (e) => {
    setSubmitted(true);
    setGoogleCredentials(e);
    await authAPI
      .post("/google/register", {
        goodleId: e.tokenId,
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
    <div style={{ width: "100%" }}>
      {submitted && <LinearIndeterminate />}
      <Container className={styles.container}>
        <div className={styles.center}>
          <Typography color="secondary" className={styles.header}>
            Create Your Account
          </Typography>
          <Typography variant="p" color="secondary" className={styles.typo}>
            Please fill all fields to continue
          </Typography>
        </div>
        <Grid container spacing={2} justifyContent="center">
          {errand.error && errorMessage("Email or Password not correct")}
          <Grid item xs={12} md={12}>
            <TextField
              onChange={handleUsername}
              value={Username}
              label="Username"
              type="text"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              onChange={handleEmail}
              value={email}
              label="Email address"
              type="email"
              fullWidth
              variant="outlined"
              required
              helperText="Email is required"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              onChange={handlePassword}
              value={password}
              label="Create Password"
              type="password"
              fullWidth
              variant="outlined"
              required
              helperText="Create strong password"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              onChange={handleConfirmPassword}
              value={confirmPassword}
              label="Confirm Password"
              type="password"
              fullWidth
              variant="outlined"
              required
              helperText="Confirm password"
            />
          </Grid>
        </Grid>
        <br />
        <br />
        <Button
          onClick={handleSubmit}
          fullWidth
          color="primary"
          variant={submitted ? "disabled" : "contained"}
          size="large"
        >
          Signup
        </Button>
        <br />
        <br />
        <div className="or-cred">
          <Typography className={styles.or}>Or</Typography>

          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Continue with Google"
            onSuccess={(e) => handleLogin(e)}
            onFailure={""}
            cookiePolicy={"single_host_origin"}
          />

          <br />
          <br />
          <Typography style={{ fontSize: 14 }} color="secondary">
            Have an account?{" "}
            <b>
              <Link to="/">Login</Link>
            </b>
          </Typography>
        </div>
      </Container>
    </div>
  );
}
