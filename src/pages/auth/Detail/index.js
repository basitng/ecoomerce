import {
  Container,
  Grid,
  Typography,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { Star, StarOutline } from "@material-ui/icons";
import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import DetailTab from "../../../components/auth/Detail/Tab";
import { getApi } from "../../../requestMethods/index";
import "./Detail.css";
export default function DetailPage() {
  const [data, setData] = React.useState();

  const cart = data && {
    id: data._id,
    title: data.name,
    img: data.frontPic,
    price: data.price,
    desc: data.desc,
    quantity: 1,
  };
  const [current, setCurrent] = React.useState(1);
  const { id } = useParams();
  const { addItem, cartTotal } = useCart();
  const [totalRating, setRating] = React.useState("");
  function numberWithCommas(x) {
    return `₦${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }

  const handleAddToCart = () => {
    addItem(cart);
  };

  React.useEffect(async () => {
    await getApi
      .get(`/product/find/${id}`)
      .then(({ data }) => {
        setData(data);
      })
      .catch((e) => console.log(e));
  }, [0]);

  React.useEffect(async () => {
    await getApi
      .get(`/review/${id}`)
      .then(({ data }) => {
        setRating(data.rating);
      })
      .catch((e) => console.log(e));
  }, [data]);

  console.log(current);
  return (
    <div style={{ marginTop: "10rem" }}>
      <Container maxWidth="md">
        {!data ? (
          <center>
            <CircularProgress
              style={{ margin: 30 }}
              color="inherit"
              size={80}
              thickness={5}
            />
          </center>
        ) : (
          <React.Fragment>
            <Grid container spacing={2}>
              <Grid item xs={12} md={7} className="detail-card">
                <div className="detail-img-container">
                  {current === 1 && (
                    <img src={data.frontPic} className="detail-img" />
                  )}

                  {current === 2 && (
                    <img src={data.backPic} className="detail-img" />
                  )}
                  {current === 3 && (
                    <img src={data.otherPic} className="detail-img" />
                  )}
                </div>
                <div className="flex-products-img">
                  <img
                    onClick={() => setCurrent(1)}
                    src={data.frontPic}
                    className={
                      current === 1 ? "active--image" : "detail-img-thumbnail"
                    }
                  />
                  <img
                    onClick={() => setCurrent(2)}
                    src={data.backPic}
                    className={
                      current === 2 ? "active--image" : "detail-img-thumbnail"
                    }
                  />
                  <img
                    onClick={() => setCurrent(3)}
                    src={data.otherPic}
                    className={
                      current === 3 ? "active--image" : "detail-img-thumbnail"
                    }
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={5}>
                <div className="detail-content">
                  <Typography color="secondary" className="detail-header-text">
                    {data.name}
                  </Typography>
                  <div className="detail-flex">
                    <Typography
                      color="secondary"
                      className="detail-product-brand"
                    >
                      Brand:
                    </Typography>
                    <Typography
                      color="secondary"
                      className="detail-product-brand-name"
                    >
                      {data.brand}
                    </Typography>
                  </div>
                  <div className="detail-flex">
                    <Typography className="rating-text">Rating:</Typography>
                    <div className="detail-rating">
                      <Star className="detail-icon" />
                      <Star className="detail-icon" />
                      <Star className="detail-icon" />
                      <Star className="detail-icon" />
                      <StarOutline className="detail-icon2" />
                      <Typography style={{ paddingLeft: 5 }}>
                        ({totalRating})
                      </Typography>
                    </div>
                  </div>
                  <div className="detail-pricing">
                    <Typography
                      color="primary"
                      className="detail-product-price"
                      variant="h5"
                    >
                      {numberWithCommas(data.price)}
                    </Typography>
                    <Typography
                      color="secondary"
                      className="detail-product-status"
                    >
                      Stock available
                    </Typography>
                    <br />
                    <Button
                      variant="contained"
                      onClick={handleAddToCart}
                      color="primary"
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container direction="column">
              <Grid item xs={12} md={12} className="tab-container">
                <DetailTab desc={data.desc} id={data._id} />
              </Grid>
            </Grid>
          </React.Fragment>
        )}
      </Container>
    </div>
  );
}
