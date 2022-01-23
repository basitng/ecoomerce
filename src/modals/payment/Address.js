import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  paper: { minWidth: "400px", textAlign: "center", padding: 50 },
  typo: {
    marginTop: "-1rem",
  },
  pushDown: {
    marginTop: "2rem",
  },
}));
export default function AddressForm({
  handleClick1,
  addressModal,
  handleClose,
}) {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState("");
  const [streetNumber, setStreetNumber] = React.useState("");
  const [streetName, setStreetName] = React.useState("");

  const handleState = (e) => {
    setState(e.target.value);
  };
  const handleStreetNumber = (e) => {
    setStreetNumber(e.target.value);
  };
  const handleStreetName = (e) => {
    setStreetName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (addressModal) {
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
        <DialogTitle id="form-dialog-title">Hi, Add Your Address</DialogTitle>
        <Typography variant="p" color="secondary" className={styles.typo}>
          Add your delivery address
        </Typography>
        <DialogContent className={styles.pushDown}>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={handleState}
              value={state}
              label="Your current city"
              type="text"
              fullWidth
              variant="outlined"
              required
              style={{ marginBottom: 10 }}
              helperText="Make sure your address is valid"
            />
            <TextField
              onChange={handleStreetNumber}
              value={streetNumber}
              label="Street Number"
              type="number"
              fullWidth
              variant="outlined"
              required
              helperText="e.g 10"
            />
            <TextField
              onChange={handleStreetName}
              value={streetName}
              label="Street Name"
              type="text"
              fullWidth
              variant="outlined"
              required
              helperText="e.g jimo..."
            />
            <br />
            <br />
            <Button fullWidth color="primary" variant="contained" size="large">
              Add
            </Button>
            <br />
            <br />
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
