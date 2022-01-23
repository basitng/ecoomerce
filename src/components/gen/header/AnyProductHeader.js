import { Typography } from "@material-ui/core";
import { AirplanemodeActive, Category } from "@material-ui/icons";
import React from "react";

export default function AnyProductHeader({ header }) {
  const styles = {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    paddingBottom: 20,
  };
  return (
    <div style={{ marginTop: 70 }}>
      <div style={styles}>
        <Typography className="bold-text" variant="h5" color="secondary">
          {header}
        </Typography>
      </div>
    </div>
  );
}
