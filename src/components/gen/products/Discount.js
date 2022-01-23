import React from "react";
import { Grid, IconButton, Paper, Typography } from "@material-ui/core";
import { Add, Star, StarHalfOutlined } from "@material-ui/icons";
import "./Flash.css";
import { Link, useParams } from "react-router-dom";
export default function DiscountProduct({ img, text }) {
  const params = useParams();
  return (
    <React.Fragment>
      <Grid item xs={12} md={3}>
        <Paper elevation={1}>
          <div className="flash-card">
            <div className="status">{text}</div>
            <Link className="detailLinks" to={`detail/${params.id}`}>
              <div className="flash-card-img">
                <img src={img} alt="" className="img" />
              </div>
              <div className="flash-card-body">
                <Typography variant="h6" className="product-name">
                  Iphone 12
                </Typography>
                <div className="flash-card-rating">
                  <Star className="rating-icon" />
                  <Star className="rating-icon" />
                  <Star className="rating-icon" />
                  <Star className="rating-icon" />
                  <StarHalfOutlined className="rating-icon" />
                </div>
                <div className="flash-card-footer">
                  <div className="flex-items">
                    <Typography
                      variant="h6"
                      className="discount-price"
                      color="primary"
                    >
                      $200.00
                    </Typography>
                    <Typography
                      variant="p"
                      className="actual-price"
                      color="primary"
                    >
                      $340.00
                    </Typography>
                  </div>
                  <IconButton>
                    <div className="add-icon-container2">
                      <Add className="add-icon" />
                    </div>
                  </IconButton>
                </div>
              </div>
            </Link>
          </div>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
