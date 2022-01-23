import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles, Typography } from "@material-ui/core";
import { Email, Facebook } from "@material-ui/icons";
import { blue, red } from "@material-ui/core/colors";
import { Link, useLocation } from "react-router-dom";

export default function LoginForm({
  handleClick1,
  setLoginModal,
  loginModal,
  handleClose,
}) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPwd(e.target.value);
  };
  const signupClicked = () => {
    console.log("Clicked");
    setOpen(false);
    setLoginModal(false);
  };
  const useStyles = makeStyles(() => ({
    paper: { minWidth: "400px", textAlign: "center", padding: 50 },
    typo: {
      marginTop: "-1rem",
    },
    pushDown: {
      marginTop: "2rem",
    },
  }));
  useEffect(() => {
    if (loginModal) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [handleClick1, handleClose]);

  const styles = useStyles();
  return (
    <div style={{ width: "60%" }}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        classes={{ paper: styles.paper }}
      >
        <DialogTitle id="form-dialog-title">Welcome To Ecommerce</DialogTitle>
        <Typography variant="p" color="secondary" className={styles.typo}>
          Log in with email & password
        </Typography>
        <DialogContent className={styles.pushDown}>
          <TextField
            onChange={handleEmail}
            value={email}
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            required
            style={{ marginBottom: 10 }}
            helperText="Email is required"
          />
          <TextField
            onChange={handlePassword}
            value={pwd}
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            required
            helperText="Password is required"
          />
          <br />
          <br />
          <Button fullWidth color="primary" variant="contained" size="large">
            Login
          </Button>
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
              <b onClick={signupClicked}>
                <Link className="logo-link" to="/signup">
                  Sign Up
                </Link>
              </b>
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
