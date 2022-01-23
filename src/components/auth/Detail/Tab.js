import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button, Grid, IconButton, TextField } from "@material-ui/core";
import ProductReviewCard from "./Card";
import { StarBorderOutlined } from "@material-ui/icons";
import { orange } from "@material-ui/core/colors";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
  },
  p: {
    width: "20%",
    display: "block",
    color: "#555",
    fontSize: 15,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  pushDown: {
    marginTop: 50,
  },
}));

export default function DetailTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [review, setReview] = React.useState("");
  const [ratingValue, setRatingValue] = React.useState(0);
  const [ratingColor, setRatingColor] = React.useState([]);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleRateBtn1 = () => {
    setRatingValue(+1);
    setRatingColor(...ratingColor, 1);
  };
  const handleRateBtn2 = () => {
    setRatingValue(+1);
    setRatingColor(...ratingColor, 2);
  };
  const handleRateBtn3 = () => {
    setRatingValue(+1);
    setRatingColor(...ratingColor, 3);
  };
  const handleRateBtn4 = () => {
    setRatingValue(+1);
    setRatingColor(...ratingColor, 4);
  };
  const handleRateBtn5 = () => {
    setRatingValue(+1);
    setRatingColor(...ratingColor, 5);
  };

  console.log(ratingValue);
  useEffect(() => {});
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        elevation={0}
        style={{ background: "transparent", color: "#555" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={classes.container}>
          <Typography variant="h5" className={classes.h5} color="secondary">
            Specification
          </Typography>
          <Typography variant="p" className={classes.p} color="secondary">
            Brand: Beats. Model: S450 Wireless Bluetooth Headset FM Frequency
            Response: 87.5 – 108 MHz Feature: FM Radio, Card Supported (Micro SD
            / TF) Made in China
          </Typography>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <ProductReviewCard type={"text"} avatar={"B"} />
          </Grid>
          <Grid item xs={12} md={12}>
            <ProductReviewCard type={"text"} avatar={"C"} />
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.pushDown}>
          <Grid item xs={12} md={12}>
            <Typography
              variant="h4"
              color="secondary"
              className={classes.header}
            >
              Write a Review for this product
            </Typography>
            <Typography
              variant="p"
              color="secondary"
              className={classes.header2}
            >
              Your Rating *
            </Typography>
            <div className="detail-flex">
              <IconButton onClick={handleRateBtn1} size="small">
                <StarBorderOutlined className={classes.icon} />
              </IconButton>
              <IconButton
                // style={{ color: ratingColor === 2 ? orange[900] : "" }}
                onClick={handleRateBtn2}
                size="small"
              >
                <StarBorderOutlined className={classes.icon} />
              </IconButton>
              <IconButton
                // style={{ color: ratingColor === 3 ? orange[900] : "" }}
                onClick={handleRateBtn3}
                size="small"
              >
                <StarBorderOutlined className={classes.icon} />
              </IconButton>
              <IconButton
                // style={{ color: ratingColor === 4 ? orange[900] : "" }}
                onClick={handleRateBtn4}
                size="small"
              >
                <StarBorderOutlined className={classes.icon} />
              </IconButton>
              <IconButton
                // style={{ color: ratingColor === 5 ? orange[900] : "" }}
                onClick={handleRateBtn5}
                size="small"
              >
                <StarBorderOutlined className={classes.icon} />
              </IconButton>
            </div>
            <form onSubmit={handleSubmit} className={classes.form}>
              <TextField
                multiline
                label="Write your review"
                variant="outlined"
                color="primary"
                fullWidth
                rows={3}
                value={review}
                onChange={handleReviewChange}
              />
              <br />
              <br />
              {review === "" ? (
                <Button
                  variant="contained"
                  disabled
                  size="large"
                  color="secondary"
                >
                  Submit
                </Button>
              ) : (
                <Button variant="contained" size="large" color="secondary">
                  Submit
                </Button>
              )}
            </form>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}
