import React from "react";
import { Grid, IconButton, Paper, Typography } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { Add, Star, StarHalfOutlined } from "@material-ui/icons";
import "./Flash.css";
import iphone12 from "../../../assets/products/iphone.png";
import { useParams, Link } from "react-router-dom";
import { useCart } from "react-use-cart";
export default function ArrivalProduct({
  id,
  img,
  title,
  price,
  category,
  desc,
}) {
  const { addItem } = useCart();
  const [cart, setCart] = React.useState({
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
      <Grid item xs={12} md={12}>
        <Paper elevation={1}>
          <div className="flash-card">
            <div className="status">{category}</div>
            <Link className="detailLinks" to={`detail/${id}`}>
              <div className="flash-card-img">
                <img src={img} alt="" className="img" />
              </div>
            </Link>
            <div className="flash-card-body">
              <Typography variant="h6" className={"product-name"}>
                {title}
              </Typography>
              <div className="flash-card-rating">
                <Star className="rating-icon" />
                <Star className="rating-icon" />
                <Star className="rating-icon" />
                <Star className="rating-icon" />

                <StarHalfOutlined className="rating-icon" />
              </div>
              <Typography noWrap variant="h6" className={"product-name"}>
                {desc}
              </Typography>
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
