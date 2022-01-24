import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import { Badge, Paper } from "@material-ui/core";
import {
  HomeOutlined,
  PersonAddOutlined,
  SettingsOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import LoginForm from "../../../modals/Login";
import { Link } from "react-router-dom";
import CartModal from "../../../modals/Cart";

const useStyles = makeStyles({
  root: {
    width: "100%",
    background: "#fff",
    color: "#fff",
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [loginModal, setLoginModal] = React.useState(false);
  const [cartModal, setCartModal] = React.useState(false);
  const [state, setState] = React.useState(false);

  const handleCat = () => {
    setState(true);
    if (state) {
      setState(false);
    }
  };
  const handleCartModal = () => {
    setCartModal(true);
    if (cartModal) {
      setCartModal(false);
    }
  };
  const handleLoginClick = () => {
    setLoginModal(true);
  };
  const handleClose = () => {
    setLoginModal(false);
  };
  return (
    <Paper elevation={10}>
      <LoginForm
        handleClick={handleLoginClick}
        handleClose={handleClose}
        loginModal={loginModal}
        setLoginModal={setLoginModal}
      />
      <CartModal
        cartModal={cartModal}
        setCartModal={setCartModal}
        handleClick3={handleCartModal}
      />
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          to="/"
          component={Link}
          label="Home"
          icon={<HomeOutlined className="white-text" />}
        />
        <BottomNavigationAction
          onClick={handleCartModal}
          label="Carts"
          icon={
            <Badge badgeContent={3} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          }
        />

        <BottomNavigationAction
          label="Login"
          onClick={handleLoginClick}
          icon={<PersonAddOutlined />}
        />
        <BottomNavigationAction label="Theme" icon={<SettingsOutlined />} />
      </BottomNavigation>
    </Paper>
  );
}
