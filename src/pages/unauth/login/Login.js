import React, { useEffect, useState, useContext } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/providers/AuthContext";
import { authAPI } from "../../../requestMethods";
import { Email, Facebook } from "@material-ui/icons";
import { red, blue } from "@material-ui/core/colors";

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

  useEffect(() => {}, [0]);
  return (
    <div className={styles.container}>
      <Grid container className={styles.form}>
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
        </Grid>
      </Grid>
    </div>
  );
}
