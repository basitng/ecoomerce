import React from "react";
import { Grid, IconButton, Paper, Typography } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { Add, Star, StarHalfOutlined } from "@material-ui/icons";
import "./Flash.css";
import iphone12 from "../../../assets/products/iphone.png";
import { useParams, Link } from "react-router-dom";
export default function FlashProduct({ img }) {
  const params = useParams();
  return (
    <React.Fragment>
      <Grid item xs={12} md={12}>
        <Paper elevation={1}>
          <div className="flash-card">
            <div className="status">New</div>
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
                  <Typography variant="h6" className="price" color="primary">
                    $200.00
                  </Typography>
                  <IconButton>
                    <div className="add-icon-container">
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
