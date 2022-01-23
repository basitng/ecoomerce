import { Typography } from "@material-ui/core";
import { AirplanemodeActive, Category } from "@material-ui/icons";
import React from "react";

export default function CategoryHeader() {
  const styles = {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    paddingBottom: 20,
  };
  return (
    <div style={{ marginTop: 70 }}>
      <div style={styles}>
        <Category style={{ fontSize: 30, paddingRight: 10 }} color="primary" />
        <Typography className="bold-text" variant="h5" color="secondary">
          Top Categories
        </Typography>
      </div>
    </div>
  );
}
