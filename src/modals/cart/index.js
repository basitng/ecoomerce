import { Grid, IconButton, Typography } from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";
import { AddOutlined, RemoveOutlined } from "@material-ui/icons";
import { CartProvider, useCart } from "react-use-cart";
import React from "react";
import "./Cart.css";
export default function CartProduct({ img, name, price, regex, id, quantity }) {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  const incrementPrice = () => updateItemQuantity(id, quantity + 1);
  const decrementPrice = () => {
    if (quantity == 0) {
      removeItem(id);
    } else {
      updateItemQuantity(id, quantity - 1);
    }
  };
  console.log(isEmpty);
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
            {regex(price)}
          </Typography>
        </div>
        <div className="cart-card-action">
          <IconButton
            onClick={incrementPrice}
            size="small"
            style={{ border: `1px solid ${grey[200]}` }}
          >
            <AddOutlined />
          </IconButton>
          <Typography style={{ margin: 10 }}>{quantity}</Typography>
          <IconButton
            onClick={decrementPrice}
            size="small"
            style={{ border: `1px solid ${red[500]}` }}
          >
            <RemoveOutlined color="primary" />
          </IconButton>
        </div>
      </div>
    </Grid>
  );
}
