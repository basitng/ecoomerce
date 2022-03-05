import React, { useState } from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

import "swiper/css";
import "swiper/css/navigation";
import {
  CreditCard,
  HeadsetMic,
  LocalShipping,
  Security,
} from "@material-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import DiscountHeader from "../../components/gen/header/DiscountHeader";
import DiscountProduct from "../../components/gen/products/Discount";
import AnyProductHeader from "../../components/gen/header/AnyProductHeader";
import AnyProduct from "../../components/gen/products/AnyProduct";
import Service from "../../components/gen/products/Service";

import FlashHeader from "../../components/gen/header/flashHeader";
import FlashProduct from "../../components/gen/products/Flash";
import ArrivalProduct from "../../components/gen/products/Arrival";
import ArivalHeader from "../../components/gen/header/ArrivalHeader";
import _Categories from "./Category";
import _LinearBuffer from "../../loader/BufferProgress";

import { getApi } from "../../requestMethods";
import LinearIndeterminate from "../../loader/Progress";
import _Skeleton from "../../loader/Skeleton";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(11),
    flexGrow: 1,
  },
  tab: {
    shadow: theme.shadows[5],
  },
  Container: {
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
      padding: 0,
    },
  },
}));

export default function ProductsPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  React.useEffect(async () => {
    getApi
      .get("/product")
      .then(({ data }) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(true);
      });
  }, [0]);
  return (
    <div className="container">
      {isLoading === true ? <LinearIndeterminate /> : ""}
      <Container className={classes.Container}>
        <FlashHeader />

        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          scrollbar={{ draggable: true, hide: true }}
          autoHeight
        >
          {!isLoading ? (
            <React.Fragment>
              {data &&
                data.map((data) => (
                  <SwiperSlide key={data._id}>
                    <FlashProduct
                      img={data.frontPic}
                      title={data.name}
                      desc={data.desc}
                      id={data._id}
                      data={data}
                      price={data.price}
                      category={data.category}
                    />
                  </SwiperSlide>
                ))}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {Array(6)
                .fill(Math.random() * 100)
                .map((data) => (
                  <SwiperSlide>
                    <_Skeleton />
                  </SwiperSlide>
                ))}
            </React.Fragment>
          )}
        </Swiper>
        {<ArivalHeader />}
        <Grid container spacing={2}>
          {!isLoading ? (
            <>
              {data &&
                data.map(
                  (data) =>
                    data.category === "New" && (
                      <Grid item xs={12} md={3}>
                        <ArrivalProduct
                          title={data.name}
                          img={data.frontPic}
                          category={"New product"}
                          price={data.price}
                          id={data._id}
                          desc={data.desc}
                        />
                      </Grid>
                    )
                )}
            </>
          ) : (
            <React.Fragment>
              <Grid container spacing={2}>
                {Array(6)
                  .fill(Math.random() * 100)
                  .map(() => (
                    <Grid item xs={12} md={3}>
                      <_Skeleton />
                    </Grid>
                  ))}
              </Grid>
            </React.Fragment>
          )}
        </Grid>

        {<DiscountHeader />}
        <Grid container spacing={2} style={{ position: "relative" }}>
          {!isLoading ? (
            <React.Fragment>
              {data ? (
                data.map(
                  (data) =>
                    data.discount && (
                      <DiscountProduct
                        title={data.name}
                        img={data.frontPic}
                        category={data.category}
                        price={data.price}
                        id={data._id}
                        discount={data.discount}
                        desc={data.desc}
                      />
                    )
                )
              ) : (
                <Typography>No Discounts Available</Typography>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid container spacing={2}>
                {Array(8)
                  .fill(Math.random() * 100)
                  .map(() => (
                    <Grid item xs={12} md={3}>
                      <_Skeleton />
                    </Grid>
                  ))}
              </Grid>
            </React.Fragment>
          )}
        </Grid>

        {<AnyProductHeader header={"Mobile Phone"} />}

        <Grid container spacing={2}>
          {!isLoading ? (
            <React.Fragment>
              {data ? (
                data.map(
                  (data) =>
                    data.category === "Mobile phone" && (
                      <AnyProduct
                        title={data.name}
                        img={data.frontPic}
                        category={data.category}
                        price={data.price}
                        id={data._id}
                      />
                    )
                )
              ) : (
                <Typography>No Mobile Phone Avaialable</Typography>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid container spacing={2}>
                {Array(8)
                  .fill(Math.random() * 100)
                  .map(() => (
                    <Grid item xs={12} md={3}>
                      <_Skeleton />
                    </Grid>
                  ))}
              </Grid>
            </React.Fragment>
          )}
        </Grid>

        <Grid container spacing={2} style={{ marginTop: "5rem" }}>
          <Service
            icon={<LocalShipping className="svg-icon" />}
            title={"Worldwide Delivery"}
            content={
              "We offer competitive prices on our 100 million plus product any range."
            }
          />
          <Service
            icon={<Security className="svg-icon" />}
            title={"Shop With Confidence"}
            content={
              "We make sure our customers shop all their needs, while ensuring safety."
            }
          />
          <Service
            icon={<CreditCard className="svg-icon" />}
            title={"Safe Payment"}
            content={
              "We offer reliable services that provides satisfying payment processes"
            }
          />
          <Service
            icon={<HeadsetMic className="svg-icon" />}
            title={"24/7 Support"}
            content={
              "We offer the best of it customers services to our customers all round the globe."
            }
          />
        </Grid>
        <br />
      </Container>
    </div>
  );
}
