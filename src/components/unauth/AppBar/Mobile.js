import React from "react";
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  TextField,
} from "@material-ui/core";
import { SearchOutlined, ShoppingBasketOutlined } from "@material-ui/icons";
import LoginForm from "../../../modals/Login";
import CartModal from "../../../modals/Cart";
import AutocompleteModal from "../../../modals/Autocomplete/index";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "transparent",
    width: "100%",
    color: "#555",
    fontWeight: 700,
  },
}));
export default function Mobile() {
  const classes = useStyles();
  const [cartModal, setCartModal] = React.useState(false);
  const [state, setState] = React.useState(false);
  const [Active, setActive] = React.useState(false);
  const [loginModal, setLoginModal] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const handleLoginClick = () => {
    setLoginModal(true);
  };

  const handleSearch = (e) => {
    setActive(true);
    setSearch(e.target.value);
  };
  const handleActive = () => {
    setActive(true);
  };

  const handleCartModal = () => {
    setCartModal(true);
    if (cartModal) {
      setCartModal(false);
    }
  };
  const handleClose = () => {
    setLoginModal(false);
  };

  return (
    <Paper className="mobile-appBar">
      <LoginForm
        handleClick={handleLoginClick}
        handleClose={handleClose}
        loginModal={loginModal}
      />
      <CartModal
        cartModal={cartModal}
        setCartModal={setCartModal}
        handleClick3={handleCartModal}
      />
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="search for products"
            color="primary"
            style={{ width: "100%" }}
            onChange={handleSearch}
            onFocus={handleActive}
            onBlur={() => setActive(false)}
          />
          <IconButton className="search-bar">
            <SearchOutlined />
          </IconButton>{" "}
          <AutocompleteModal active={Active} setActive={setActive} />
        </Grid>
      </Grid>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Tabs
          scrollButtons="auto"
          variant="scrollable"
          indicatorColor="primary"
        >
          <Tab label="Iphone" />
          <Tab label="Laptops" />
          <Tab label="Chargers" />
          <Tab label="Headsets" />
          <Tab label="Accessories" />
          <Tab label="AirPods" />
          <Tab label="Others" />
        </Tabs>
      </AppBar>
    </Paper>
  );
}
