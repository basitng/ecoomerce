import React, { useContext, useState } from "react";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";

import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FlashProduct from "../../components/gen/products/Flash";
import _Categories from "./Category";
import _LinearBuffer from "../../loader/BufferProgress";

import { Skeleton } from "@material-ui/lab";
import LinearIndeterminate from "../../loader/Progress";
import { SearchContext } from "../../context/providers/SearchContext";
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
    marginTop: "12rem",
    marginBottom: "5rem",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
      padding: 0,
    },
  },
}));

export default function SearchPage() {
  const { controller } = useContext(SearchContext);
  const [data, setData] = useState(controller.data);
  const [isLoading, setIsLoading] = useState(controller.isEmpty);
  const classes = useStyles();

  return (
    <div className="container">
      {isLoading === true ? <LinearIndeterminate /> : ""}
      <Container className={classes.Container}>
        <Typography
          variant="h5"
          color="secondary"
          style={{ fontWeight: 900, padding: 10 }}
        >
          Search Result.
        </Typography>
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
