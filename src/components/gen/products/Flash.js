import React, { useState } from "react";
import { Grid, IconButton, Paper, Typography } from "@material-ui/core";
import { Add, Star, StarHalfOutlined } from "@material-ui/icons";
import "./Flash.css";
import { useParams, Link } from "react-router-dom";
import { getApi } from "../../../requestMethods/index";
import { useCart } from "react-use-cart";

export default function FlashProduct({
  img,
  title,
  desc,
  price,
  id,
  data,
  category,
}) {
  const { addItem } = useCart();
  const [Loading, setLoading] = React.useState(true);
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

  React.useEffect(async () => {
    await getApi
      .post("/cart", { productId: cart })
      .then(({ data }) => setLoading(false))
      .catch((e) => setLoading(true));
  }, [handleAddToCart]);

  return (
    <React.Fragment>
      <Grid item xs={12} md={12}>
        <Paper elevation={1}>
          <div className="flash-card">
            <div className="status">{category}</div>
            <Link className="detailLinks" to={`/detail/${id}`}>
              <div className="flash-card-img">
                <img src={img} alt="" className="img" />
              </div>
            </Link>
            <div className="flash-card-body">
              <Typography variant="h6" className={"product-name"}>
                {title}
              </Typography>
              <Typography noWrap variant="body2" className={"product-desc"}>
                {desc}
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
                  {numberWithCommas(price)}
                </Typography>
                <IconButton>
                  <div className="add-icon-container">
                    <Add className="add-icon" onClick={handleAddToCart} />
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
