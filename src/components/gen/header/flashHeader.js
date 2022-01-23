import { Typography } from "@material-ui/core";
import { FlashOnOutlined } from "@material-ui/icons";
import React from "react";

export default function FlashHeader() {
  const styles = {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    paddingBottom: 20,
  };
  return (
    <div style={styles}>
      <FlashOnOutlined style={{ fontSize: 30 }} color="primary" />
      <Typography className="bold-text" variant="h5" color="secondary">
        Flash Deals
      </Typography>
    </div>
  );
}
