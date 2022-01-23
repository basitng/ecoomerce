import React from "react";
import { Badge, Grid, IconButton, Paper, TextField } from "@material-ui/core";
import { SearchOutlined, ShoppingBasketOutlined } from "@material-ui/icons";
import LoginForm from "../../../modals/Login";
import CartModal from "../../../modals/Cart";

export default function Mobile() {
  const [cartModal, setCartModal] = React.useState(false);
  const [state, setState] = React.useState(false);
  const [loginModal, setLoginModal] = React.useState(false);
  const handleLoginClick = () => {
    setLoginModal(true);
  };
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
        <Grid item xs={10}>
          <TextField
            variant="outlined"
            label="search for products"
            color="primary"
            style={{ width: "100%" }}
          />
          <IconButton className="search-bar">
            <SearchOutlined />
          </IconButton>
        </Grid>
        <Grid item xs={2}>
          <IconButton onClick={handleCartModal}>
            <Badge badgeContent={2} color="secondary">
              <ShoppingBasketOutlined />
            </Badge>
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}
