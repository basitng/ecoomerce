import { Container, Grid, Typography, Button } from "@material-ui/core";
import { Star, StarOutline } from "@material-ui/icons";
import React from "react";
import img from "../../../assets/products/iphone12.svg";
import DetailTab from "../../../components/auth/Detail/Tab";
import "./Detail.css";
export default function DetailPage() {
  return (
    <div style={{ marginTop: "7rem" }}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} className="detail-card">
            <div className="detail-img-container">
              <img src={img} className="detail-img" />
            </div>
            <div className="flex-products-img">
              <img src={img} className="detail-img-thumbnail" />
              <img src={img} className="detail-img-thumbnail" />
              <img src={img} className="detail-img-thumbnail" />
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className="detail-content">
              <Typography color="secondary" className="detail-header-text">
                Iphone 12 pro max
              </Typography>
              <div className="detail-flex">
                <Typography color="secondary" className="detail-product-brand">
                  Brand:
                </Typography>
                <Typography
                  color="secondary"
                  className="detail-product-brand-name"
                >
                  Apple
                </Typography>
              </div>
              <div className="detail-flex">
                <Typography className="rating-text">Rating: </Typography>
                <div className="detail-rating">
                  <Star className="detail-icon" />
                  <Star className="detail-icon" />
                  <Star className="detail-icon" />
                  <Star className="detail-icon" />
                  <StarOutline className="detail-icon2" />
                  <Typography style={{ paddingLeft: 5 }}>(50)</Typography>
                </div>
              </div>
              <div className="detail-pricing">
                <Typography
                  color="primary"
                  className="detail-product-price"
                  variant="h5"
                >
                  $1000.00
                </Typography>
                <Typography color="secondary" className="detail-product-status">
                  Stock available
                </Typography>
                <br />
                <Button variant="contained" color="primary">
                  Add to cart
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Grid container direction="column">
        <Grid item xs={12} md={12} className="tab-container">
          <DetailTab />
        </Grid>
      </Grid>
    </div>
  );
}
