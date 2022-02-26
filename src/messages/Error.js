import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return (
    <MuiAlert
      style={{ zIndex: 1000000 }}
      elevation={6}
      variant="filled"
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    [theme.breakpoints.down("xs")]: {
      minWidth: "90%",
    },
  },
}));

export default function _customErrorMessage({ msg, handleSubmit }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    if (open) {
      setOpen(false);
    } else if (!open) {
      setOpen(true);
    }
  }, [handleSubmit]);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
}
