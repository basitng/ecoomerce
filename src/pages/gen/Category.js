import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import _Banner from "../../components/gen/Banner/Banner";
import "../../components/gen/products/indicator.css";
import { getApi } from "../../requestMethods";
import ProductsPage from "./Products";
import { Grid } from "@material-ui/core";
import ArrivalProduct from "../../components/gen/products/Arrival";
import _Skeleton from "../../loader/Skeleton";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    marginTop: theme.spacing(15),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(9),
    },
  },
  TabPanel: {
    padding: "0px !important",
    width: "100% !important",

    margin: 0,
  },
}));

export default function _Categories() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [AllProduct, setAllProduct] = React.useState("");
  const [PhonePouch, setPhonePouch] = React.useState("");
  const [ScreenGuide, setScreenGuide] = React.useState("");
  const [Laptops, setLaptops] = React.useState("");
  const [Accessories, setAccessories] = React.useState("");
  const [Chargers, setChargers] = React.useState("");
  const [AirPods, setAirPods] = React.useState("");
  const [AppleWatch, setAppleWatch] = React.useState("");
  const [PowerBank, setPowerBank] = React.useState("");
  const [MobilePhone, setMobilePhone] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(async () => {
    try {
      getApi
        .get("/category")
        .then(({ data }) => {
          setAllProduct(data.allProduct);
          setAirPods(data.air_pods);
          setPhonePouch(data.screen_cover);
          setScreenGuide(data.screen_guard);
          setLaptops(data.laptops);
          setAppleWatch(data.apple_watch);
          setPowerBank(data.power_bank);
          setChargers(data.chargers);
          setChargers(data.Accessories);
          setMobilePhone(data.MobilePhone);
          setIsLoading(false);

          console.log("AIrPod", AirPods);
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
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#fff" }}
        elevation={1}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          className={classes.Tab}
        >
          <Tab label="All Products" {...a11yProps(0)} />
          <Tab label="Screen Guide" {...a11yProps(1)} />
          <Tab label="Laptops" {...a11yProps(2)} />
          <Tab label="Apple Watch" {...a11yProps(3)} />
          <Tab label="Mobile Phones" {...a11yProps(4)} />
          <Tab label="Air Pods" {...a11yProps(5)} />
          <Tab label="Power Banks" {...a11yProps(6)} />
          <Tab label="Chargers" {...a11yProps(7)} />
          <Tab label="Accessories" {...a11yProps(8)} />
          <Tab label="Phone Pouch" {...a11yProps(9)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.TabPanel} value={value} index={0}>
        <React.Fragment>
          <_Banner />
          <ProductsPage />
        </React.Fragment>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          <>
            {ScreenGuide !== "" ? (
              ScreenGuide.map((data) => (
                <Grid item xs={12} md={3}>
                  <ArrivalProduct
                    title={data.name}
                    img={data.frontPic}
                    category={""}
                    price={data.price}
                    id={data._id}
                    desc={data.desc}
                  />
                </Grid>
              ))
            ) : (
              <Grid container spacing={2}>
                {Array(6)
                  .fill(Math.random() * 100)
                  .map(() => (
                    <Grid item xs={12} md={3}>
                      <_Skeleton />
                    </Grid>
                  ))}
              </Grid>
            )}
          </>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <>
          {Laptops !== "" ? (
            Laptops.map((data) => (
              <Grid item xs={12} md={3}>
                <ArrivalProduct
                  title={data.name}
                  img={data.frontPic}
                  category={""}
                  price={data.price}
                  id={data._id}
                  desc={data.desc}
                />
              </Grid>
            ))
          ) : (
            <Grid container spacing={2}>
              {Array(6)
                .fill(Math.random() * 100)
                .map(() => (
                  <Grid item xs={12} md={3}>
                    <_Skeleton />
                  </Grid>
                ))}
            </Grid>
          )}
        </>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <>
          {AppleWatch !== "" ? (
            AppleWatch.map((data) => (
              <Grid item xs={12} md={3}>
                <ArrivalProduct
                  title={data.name}
                  img={data.frontPic}
                  category={""}
                  price={data.price}
                  id={data._id}
                  desc={data.desc}
                />
              </Grid>
            ))
          ) : (
            <Grid container spacing={2}>
              {Array(6)
                .fill(Math.random() * 100)
                .map(() => (
                  <Grid item xs={12} md={3}>
                    <_Skeleton />
                  </Grid>
                ))}
            </Grid>
          )}
        </>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <>
          {MobilePhone !== "" ? (
            MobilePhone.map((data) => (
              <Grid item xs={12} md={3}>
                <ArrivalProduct
                  title={data.name}
                  img={data.frontPic}
                  category={""}
                  price={data.price}
                  id={data._id}
                  desc={data.desc}
                />
              </Grid>
            ))
          ) : (
            <Grid container spacing={2}>
              {Array(6)
                .fill(Math.random() * 100)
                .map(() => (
                  <Grid item xs={12} md={3}>
                    <_Skeleton />
                  </Grid>
                ))}
            </Grid>
          )}
        </>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <>
          {AirPods !== "" ? (
            AirPods.map((data) => (
              <Grid item xs={12} md={3}>
                <ArrivalProduct
                  title={data.name}
                  img={data.frontPic}
                  category={""}
                  price={data.price}
                  id={data._id}
                  desc={data.desc}
                />
              </Grid>
            ))
          ) : (
            <Grid container spacing={2}>
              {Array(6)
                .fill(Math.random() * 100)
                .map(() => (
                  <Grid item xs={12} md={3}>
                    <_Skeleton />
                  </Grid>
                ))}
            </Grid>
          )}
        </>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <>
          {PowerBank !== "" ? (
            PowerBank.map((data) => (
              <Grid item xs={12} md={3}>
                <ArrivalProduct
                  title={data.name}
                  img={data.frontPic}
                  category={""}
                  price={data.price}
                  id={data._id}
                  desc={data.desc}
                />
              </Grid>
            ))
          ) : (
            <Grid container spacing={2}>
              {Array(6)
                .fill(Math.random() * 100)
                .map(() => (
                  <Grid item xs={12} md={3}>
                    <_Skeleton />
                  </Grid>
                ))}
            </Grid>
          )}
        </>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <>
          {Chargers !== "" ? (
            Chargers.map((data) => (
              <Grid item xs={12} md={3}>
                <ArrivalProduct
                  title={data.name}
                  img={data.frontPic}
                  category={""}
                  price={data.price}
                  id={data._id}
                  desc={data.desc}
                />
              </Grid>
            ))
          ) : (
            <Grid container spacing={2}>
              {Array(6)
                .fill(Math.random() * 100)
                .map(() => (
                  <Grid item xs={12} md={3}>
                    <_Skeleton />
                  </Grid>
                ))}
            </Grid>
          )}
        </>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <>
          {Accessories !== "" ? (
            Accessories.map((data) => (
              <Grid item xs={12} md={3}>
                <ArrivalProduct
                  title={data.name}
                  img={data.frontPic}
                  category={""}
                  price={data.price}
                  id={data._id}
                  desc={data.desc}
                />
              </Grid>
            ))
          ) : (
            <Grid container spacing={2}>
              {Array(6)
                .fill(Math.random() * 100)
                .map(() => (
                  <Grid item xs={12} md={3}>
                    <_Skeleton />
                  </Grid>
                ))}
            </Grid>
          )}
        </>
      </TabPanel>
      <TabPanel value={value} index={9}>
        <>
          {PhonePouch !== "" ? (
            PhonePouch.map((data) => (
              <Grid item xs={12} md={3}>
                <ArrivalProduct
                  title={data.name}
                  img={data.frontPic}
                  category={""}
                  price={data.price}
                  id={data._id}
                  desc={data.desc}
                />
              </Grid>
            ))
          ) : (
            <Grid container spacing={2}>
              {Array(6)
                .fill(Math.random() * 100)
                .map(() => (
                  <Grid item xs={12} md={3}>
                    <_Skeleton />
                  </Grid>
                ))}
            </Grid>
          )}
        </>
      </TabPanel>
    </div>
  );
}
