import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button, CircularProgress, Grid, TextField } from "@material-ui/core";
import ProductReviewCard from "./Card";
import { Rating } from "@material-ui/lab";
import { getApi } from "../../../requestMethods";
import LinearIndeterminate from "../../../loader/Progress";
import { AuthContext } from "../../../context/providers/AuthContext";
import { Link } from "react-router-dom";

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
    width: "50%",
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

export default function DetailTab({ desc, id }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [review, setReview] = React.useState("");
  const [Loading, setLoading] = React.useState(null);
  const [rating, setRating] = React.useState(0);
  const { isAuthenticated } = useContext(AuthContext);
  const [data, setData] = React.useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    getApi
      .post(`/review/create`, {
        productId: id,
        review: review,
        rating: rating,
        user: isAuthenticated.payload.user.username,
      })
      .then(() => {
        document.location.reload();
        setLoading(false);
      })
      .catch((e) => setLoading(true));
  };
  useEffect(() => {
    getApi
      .get(`/review/${id}`)
      .then(({ data }) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((e) => setLoading(true));
  }, [0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // ADD ALL RATING TOGETHER

  return (
    <div className={classes.root}>
      {Loading === true && <LinearIndeterminate />}
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
            {desc}
          </Typography>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          {!data ? (
            <CircularProgress thickness={8} size={25} color="secondary" />
          ) : (
            <>
              {data &&
                data.map(({ review, rating, user }) => (
                  <Grid item xs={12} md={12}>
                    <ProductReviewCard
                      type={"text"}
                      desc={review}
                      rating={rating}
                      avatar={user[0]}
                      user={user}
                    />
                  </Grid>
                ))}
            </>
          )}
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
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </div>
            <form className={classes.form}>
              <TextField
                multiline
                label="Write your review"
                variant="outlined"
                color="primary"
                fullWidth
                rows={3}
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
              <br />
              <br />
              {isAuthenticated.isLoggedIn ? (
                <>
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
                    <Button
                      onClick={handleSubmit}
                      variant="contained"
                      size="large"
                      color="secondary"
                    >
                      Submit
                    </Button>
                  )}
                </>
              ) : (
                <>
                  {review === "" ? (
                    <Button
                      variant="contained"
                      disabled
                      size="large"
                      color="secondary"
                    >
                      Login in first
                    </Button>
                  ) : (
                    <Button
                      component={Link}
                      to="/"
                      variant="contained"
                      size="large"
                      color="secondary"
                    >
                      Login in first
                    </Button>
                  )}
                </>
              )}
            </form>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}
