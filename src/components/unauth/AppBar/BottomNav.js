import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import { Badge, Paper } from "@material-ui/core";
import {
  EmojiEmotionsOutlined,
  HomeOutlined,
  PersonAddOutlined,
  SettingsOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import CartModal from "../../../modals/Cart";
import { useCart } from "react-use-cart";

const useStyles = makeStyles({
  root: {
    width: "100%",
    background: "#fff",
    color: "#fff",
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const { totalItems } = useCart();
  const [value, setValue] = React.useState(0);
  const [cartModal, setCartModal] = React.useState(false);
  const [state, setState] = React.useState(false);
  const location = useLocation();
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
  return (
    <Paper elevation={10}>
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
        style={
          location.pathname === "/login" || location.pathname === "/signup"
            ? { display: "none" }
            : { display: "block" }
        }
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
            <Badge badgeContent={totalItems} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          }
        />

        <BottomNavigationAction
          label="Login"
          component={Link}
          to="/login"
          icon={<PersonAddOutlined />}
        />
        <BottomNavigationAction
          label="Welcome"
          icon={<EmojiEmotionsOutlined />}
        />
      </BottomNavigation>
    </Paper>
  );
}
