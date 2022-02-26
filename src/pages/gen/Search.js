import React, { useState } from "react";
import {
  AppBar,
  Box,
  CircularProgress,
  Container,
  Grid,
  makeStyles,
  Paper,
  Tab,
  Tabs,
} from "@material-ui/core";

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
import img1 from "../../assets/products/iphone.png";
import img2 from "../../assets/products/headset.png";
import img3 from "../../assets/products/airpod.svg";
import img4 from "../../assets/products/headset2.png";
import ArrivalProduct from "../../components/gen/products/Arrival";
import ArivalHeader from "../../components/gen/header/ArrivalHeader";
import CategoryHeader from "../../components/gen/header/CategoryHeader";
import Category from "../../components/gen/products/Category";
import _Categories from "./Category";
import _LinearBuffer from "../../loader/BufferProgress";

import { getApi } from "../../requestMethods";
import { Skeleton } from "@material-ui/lab";
import LinearIndeterminate from "../../loader/Progress";
const useStyles = makeStyles((theme) => ({
  Skeleton: {
    margin: theme.spacing(1),
    borderRadius: theme.spacing(2),
  },
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

export default function SearchPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  React.useEffect(async () => {
    try {
      getApi
        .get("/product")
        .then(({ data }) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(true);
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
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
              {data.map((data) => (
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
                    <Box>
                      <Skeleton
                        className={classes.Skeleton}
                        variant="rect"
                        width={"100%"}
                        height={"40vh"}
                      />

                      <Skeleton
                        className={classes.Skeleton}
                        variant="rect"
                        width={"100%"}
                        height={"2vh"}
                      />
                      <Skeleton
                        className={classes.Skeleton}
                        variant="rect"
                        width={"100%"}
                        height={"2vh"}
                      />
                    </Box>
                  </SwiperSlide>
                ))}
            </React.Fragment>
          )}
        </Swiper>
      </Container>
    </div>
  );
}
