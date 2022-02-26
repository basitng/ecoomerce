import React, { useEffect, useState } from "react";
import {
  Button,
  Drawer,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import { CartProvider, useCart } from "react-use-cart";

import Svg from "../assets/shopping-bag.svg";
import CartProduct from "./cart/index";
import {
  CallOutlined,
  CloseOutlined,
  ShoppingBasketOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  drawer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 30,
    position: "relative",
    height: "100vh",
    width: 300,
    [theme.breakpoints.down("xs")]: {
      padding: 10,
      width: "90%",
    },
  },
  closeBtn: {
    fontSize: 60,
    color: "#555",
    position: "fixed",
    bottom: "5%",
    zIndex: 20,
    left: "50%",
    display: "block",
    transform: "translate(-50px, -50px)",
  },

  drawer2: {
    paddingTop: 30,
    paddingBottom: 200,
    width: 400,
    overflowX: "hidden",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      height: "100vh",
      paddingTop: 40,
    },
  },
  text: {
    width: 200,
    textAlign: "center",
    fontSize: 13,
  },
}));
export default function CartModal({ handleClick3, cartModal, setCartModal }) {
  const {
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  const styles = useStyles();

  const toggleDrawerClose = () => {
    setCartModal(false);
  };

  const addComa = (amt) =>
    "₦" + amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <React.Fragment>
      <Drawer
        disableScrollLock
        disablePortal
        onClose={toggleDrawerClose}
        anchor={"right"}
        open={cartModal}
      >
        <IconButton className={styles.closeBtn} onClick={toggleDrawerClose}>
          <CloseOutlined style={{ fontSize: 50 }} />
        </IconButton>
        {!isEmpty ? (
          <div className={styles.drawer2}>
            <Grid container spacing={2}>
              {items.map((data) => (
                <CartProduct
                  img={data.img}
                  name={data.title}
                  price={data.price}
                  regex={addComa}
                  id={data.id}
                  quantity={data.quantity}
                />
              ))}

              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                style={{ marginTop: "1rem" }}
              >
                <Grid item xs={10} md={10}>
                  <Link to={"/payment"} className="link">
                    <Button
                      startIcon={<ShoppingBasketOutlined />}
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      Checkout({addComa(cartTotal)} )
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={10} md={10}>
                  <Link to="/payment" className="link">
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      startIcon={<CallOutlined />}
                    >
                      Call to order
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </div>
        ) : (
          <>
            <div className={styles.drawer}>
              <img src={Svg} />
              <br />
              <Typography color="secondary" className={styles.text}>
                Your shopping bag is empty. Start shopping
              </Typography>
            </div>
            {/* <IconButton onClick={toggleDrawerClose} className={styles.closeBtn}>
              <CloseOutlined />
            </IconButton> */}
          </>
        )}
      </Drawer>
    </React.Fragment>
  );
}
