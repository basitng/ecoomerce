import { Grid, IconButton, Typography } from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";
import { AddOutlined, RemoveOutlined } from "@material-ui/icons";
import React from "react";
import "./Cart.css";
export default function CartProduct({ img, name, price }) {
  return (
    <Grid item xs={12} md={12}>
      <div className="cart-card">
        <div className="image">
          <img src={img} />
        </div>
        <div className="card-body">
          <Typography color="secondary" className="cart-product-name">
            {name}
          </Typography>
          <Typography color="secondary" className="cart-product-price">
            {price}
          </Typography>
        </div>
        <div className="cart-card-action">
          <IconButton size="small" style={{ border: `1px solid ${grey[200]}` }}>
            <AddOutlined />
          </IconButton>
          <Typography style={{ margin: 10 }}>1</Typography>
          <IconButton size="small" style={{ border: `1px solid ${red[500]}` }}>
            <RemoveOutlined color="primary" />
          </IconButton>
        </div>
      </div>
    </Grid>
  );
}
