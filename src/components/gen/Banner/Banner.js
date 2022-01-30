import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Banner.css";
import bannerImg from "../../../assets/image.svg";
import { Link } from "react-router-dom";
export default function _Banner() {
  return (
    <div className="banner">
      <Grid container justifyContent="space-around">
        <Grid item xs={12} md={6} className="banner-caption">
          <Typography variant="h3" color="secondary" className="caption-h1">
            50% off For Your First Shopping
          </Typography>
          <Typography variant="h6" color="secondary" className="caption-text">
            Buy any accessories you want for any reasonable and affordable
            amount of money. No wonder people loves george tech planet
            enterprises.
          </Typography>
          <Link to="/signup" className="link">
            <Button
              className="btn"
              variant="contained"
              color="primary"
              size="large"
            >
              Shop now
            </Button>
          </Link>
        </Grid>

        {/* end banner caption */}
        <Grid item xs={12} md={6}>
          <div className="banner-image">
            <img src={bannerImg} alt="banner-img" className="banner-img" />
          </div>
          <div className="indicator">
            <div className="active" />
            <div />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
