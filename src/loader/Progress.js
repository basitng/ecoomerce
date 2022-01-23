import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    top: 0,
    left: 0,
    position: "fixed",
    zIndex: 100000,
  },
}));

export default function LinearIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress color="primary" style={{ background: "#ddd" }} />
    </div>
  );
}
