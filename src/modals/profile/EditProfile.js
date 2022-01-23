import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: { minWidth: "400px", textAlign: "center", padding: "50px 10px" },
  typo: {
    marginTop: "-1rem",
  },
  pushDown: {
    marginTop: "2rem",
  },
}));

export default function EditProfileModal({ handleOpen, setHandleOpen }) {
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
  const handleClose = () => {
    setOpen(false);
    setHandleOpen(false);
  };
  useEffect(() => {
    if (handleOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  });
  const classes = useStyles();
  return (
    <div>
      <Dialog
        classes={{ paper: classes.paper }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="form-dialog-title" color="secondary">
          Update Your Account
        </DialogTitle>
        <Typography variant="p" color="secondary" className={classes.typo}>
          Please fill valid credentails
        </Typography>
        <form>
          <DialogContent className={classes.pushDown}>
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
                  label="Old Password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  required
                  helperText="Input your old password"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  onChange={handlePassword}
                  value={password}
                  label="New password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  required
                  helperText="Create new password"
                />
              </Grid>
            </Grid>
            <br />
            <br />
            <Button fullWidth color="primary" variant="contained" size="large">
              Update
            </Button>
            <br />
            <br />
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
