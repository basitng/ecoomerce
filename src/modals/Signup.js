import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Email, Facebook } from "@material-ui/icons";
import { blue, red } from "@material-ui/core/colors";

export default function SignupForm({
  handleClick2,
  signupModal,
  handleClose2,
}) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [FirstName, setFirstName] = React.useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const useStyles = makeStyles(() => ({
    paper: { minWidth: "400px", textAlign: "center", padding: "50px 10px" },
    typo: {
      marginTop: "-1rem",
    },
    pushDown: {
      marginTop: "2rem",
    },
  }));
  useEffect(() => {
    if (signupModal) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [handleClick2, handleClose2]);
  const styles = useStyles();
  return (
    <div style={{ width: "60%" }}>
      <Dialog
        open={open}
        onClose={handleClose2}
        aria-labelledby="form-dialog-title"
        classes={{ paper: styles.paper }}
      >
        <DialogTitle id="form-dialog-title" color="secondary">
          Create Your Account
        </DialogTitle>
        <Typography variant="p" color="secondary" className={styles.typo}>
          Please fill all fields to continue
        </Typography>
        <DialogContent className={styles.pushDown}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
              <TextField
                onChange={handleFirstName}
                value={FirstName}
                label="First name"
                type="text"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                onChange={handleLastName}
                value={lastName}
                label="Last name"
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
                onChange={handlePassword}
                value={password}
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
          <Button fullWidth color="primary" variant="contained" size="large">
            Signup
          </Button>
          <br />
          <br />
          <div className="or-cred">
            <Typography>Or</Typography>
            <br />
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
              Have an account? <b>Login</b>
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
