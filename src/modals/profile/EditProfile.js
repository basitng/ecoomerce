import React, { useEffect } from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { getApiWithToken } from "../../requestMethods";
import { AuthContext } from "../../context/providers/AuthContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "@material-ui/lab";
import _customValidMessage from "../../messages/Success";
import _customErrorMessage from "../../messages/Error";
import _customValidMessage2 from "../../messages/msg";

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
  const { isAuthenticated, dispatch } = React.useContext(AuthContext);
  const [isError, setIsError] = React.useState(null);
  const { payload } = isAuthenticated;
  const [user, setUser] = React.useState(payload.user);
  const [open, setOpen] = React.useState(false);
  const [Username, setUsername] = React.useState(user.username);
  const [address, setAddress] = React.useState(user.address);
  const [phone, setPhone] = React.useState(user.phone_number);
  const [location, setLocation] = React.useState(user.location);
  const [code, setCode] = React.useState(user.postal_code);
  const [isUpdated, setIsUpdated] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    setHandleOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdated(true);
    setSubmitted(true);
    await getApiWithToken
      .put(`user/profile/update/${user._id}`, {
        username: Username,
        location,
        phone,
        address,
        postal_code: code,
      })
      .then((res) => {
        setIsError(false);
        document.location.reload();

        dispatch({ type: "updateUser", payload: res.data });
      })
      .catch((e) => {
        setIsError(true);
        console.log(e);
      });
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
      {isUpdated && <_customValidMessage2 msg={"Profile saved"} />}
      <Dialog
        classes={{ paper: classes.paper }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="form-dialog-title" color="secondary">
          Update Your Account
        </DialogTitle>
        <Typography variant="p" color="secondary" className={classes.typo}>
          Please fill in valid credentails
        </Typography>
        <form>
          <DialogContent className={classes.pushDown}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={12}>
                <TextField
                  onChange={(e) => setUsername(e.target.value)}
                  value={Username}
                  label="Username"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  label="Your Address"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                  label="Your Location"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  onChange={(e) => setCode(e.target.value)}
                  value={code}
                  label="Postal code"
                  type="number"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  label="Phone number"
                  type="number"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <br />
            <br />

            {submitted ? (
              <CircularProgress color="secondary" size={30} thickness={10} />
            ) : (
              <Button
                fullWidth
                onClick={handleSubmit}
                color="primary"
                variant="contained"
                size="large"
              >
                Update{" "}
              </Button>
            )}

            <br />
            <br />
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
