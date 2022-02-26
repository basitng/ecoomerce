import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import { Badge, Paper } from "@material-ui/core";
import {
  ExitToApp,
  HomeOutlined,
  PersonAddOutlined,
  SettingsOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import LoginForm from "../../../modals/Login";
import { Link } from "react-router-dom";
import CartModal from "../../../modals/Cart";
import { useCart } from "react-use-cart";
import { AuthContext } from "../../../context/providers/AuthContext";

const useStyles = makeStyles({
  root: {
    width: "100%",
    background: "#fff",
    color: "#fff",
  },
});

export default function AuthenticatedBottomNav() {
  const classes = useStyles();
  const { dispatch } = React.useContext(AuthContext);
  const { totalItems } = useCart();
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
  const handleLogout = () => {
    dispatch({ type: "logout" });
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
            <Badge badgeContent={totalItems} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          }
        />

        <BottomNavigationAction
          label="Profile"
          to="/profile"
          component={Link}
          icon={<PersonAddOutlined />}
        />
        <BottomNavigationAction
          onClick={handleLogout}
          component={Link}
          to="/"
          label="Logout"
          icon={<ExitToApp />}
        />
      </BottomNavigation>
    </Paper>
  );
}
