import React, { useState } from "react";
import { Grid, IconButton, Paper, Typography } from "@material-ui/core";
import { Add, Star, StarHalfOutlined } from "@material-ui/icons";
import "./Flash.css";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
export default function DiscountProduct({
  img,
  title,
  desc,
  price,
  id,
  discount,
  category,
}) {
  const { addItem } = useCart();
  const [cart, setCart] = useState({
    id: id,
    img: img,
    title: title,
    desc: desc,
    price: price,
    quantity: 1,
  });
  function numberWithCommas(x) {
    return `₦${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }

  const handleAddToCart = () => {
    addItem(cart);
  };

  return (
    <React.Fragment>
      <Grid item xs={12} md={3}>
        <Paper elevation={1}>
          <div className="flash-card">
            <div className="status">{category}</div>
            <Link className="detailLinks" to={`detail/${id}`}>
              <div className="flash-card-img">
                <img src={img} alt="" className="img" />
              </div>
            </Link>
            <div className="flash-card-body">
              <Typography variant="h6" className="product-name">
                {price}
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
                    {discount}
                  </Typography>
                  <Typography
                    variant="p"
                    className="actual-price"
                    color="primary"
                  >
                    {numberWithCommas(price)}
                  </Typography>
                </div>
                <IconButton onClick={handleAddToCart}>
                  <div className="add-icon-container2">
                    <Add className="add-icon" />
                  </div>
                </IconButton>
              </div>
            </div>
          </div>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
