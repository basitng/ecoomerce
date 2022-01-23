import React from "react";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function DeliveryTextField({ label, type }) {
  const classes = useStyles();
  const [choose, setChoose] = React.useState("");

  const handleChange = (event) => {
    setChoose(event.target.value);
  };
  return (
    <div>
      <TextField
        variant="outlined"
        type={type === "delivery_date" ? "date" : "time"}
        fullWidth
        value={choose}
        onChange={handleChange}
        autoFocus
        size="small"
      />
    </div>
  );
}
