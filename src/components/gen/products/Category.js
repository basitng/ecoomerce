import { Card, CardMedia, Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Category.css";
export default function Category({ img, text }) {
  return (
    <React.Fragment>
      <Grid xs={12} md={4}>
        <div className="category-card">
          <div className="category-image">
            <img src={img} />
          </div>
          <Typography variant="h6" className="status-2">
            {text}
          </Typography>
        </div>
      </Grid>
    </React.Fragment>
  );
}
