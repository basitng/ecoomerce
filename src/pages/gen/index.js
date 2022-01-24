import { Container, Grid } from "@material-ui/core";
import React from "react";
import _Banner from "../../components/gen/Banner/Banner";
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
import "../../components/gen/products/indicator.css";
import DiscountHeader from "../../components/gen/header/DiscountHeader";
import DiscountProduct from "../../components/gen/products/Discount";
import AnyProductHeader from "../../components/gen/header/AnyProductHeader";
import AnyProduct from "../../components/gen/products/AnyProduct";
import Service from "../../components/gen/products/Service";

import {
  CreditCard,
  HeadsetMic,
  LocalShipping,
  Security,
} from "@material-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function HomePage() {
  return (
    <React.Fragment>
      <_Banner />
      <div className="container">
        <Container>
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
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <FlashProduct img={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <FlashProduct img={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <FlashProduct img={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <FlashProduct img={img4} />
            </SwiperSlide>
          </Swiper>
          <ArivalHeader />
          <Grid container spacing={2} justifyContent="center">
            <ArrivalProduct img={img1} />
            <ArrivalProduct img={img2} />
            <ArrivalProduct img={img3} />
            <ArrivalProduct img={img4} />
          </Grid>

          <div>
            <CategoryHeader />
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <Category img={img1} text={"Phone"} />
              </SwiperSlide>
              <SwiperSlide>
                <Category img={img4} text={"Headset"} />
              </SwiperSlide>
              <SwiperSlide>
                <Category img={img3} text={"Airpod"} />
              </SwiperSlide>
            </Swiper>
          </div>

          <DiscountHeader />
          <Grid container spacing={2} style={{ position: "relative" }}>
            <DiscountProduct img={img1} text={"6% off"} />
            <DiscountProduct img={img4} text={"5% off"} />
            <DiscountProduct img={img3} text={"2% off"} />
            <DiscountProduct img={img2} text={"9% off"} />
          </Grid>

          <AnyProductHeader header={"Mobile Phones"} />
          <Grid container spacing={2}>
            <AnyProduct img={img1} text={"6% off"} />
            <AnyProduct img={img4} text={"5% off"} />
            <AnyProduct img={img3} text={"2% off"} />
            <AnyProduct img={img2} text={"9% off"} />
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
    </React.Fragment>
  );
}
