import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Badge,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import {
  ExpandMore,
  CategoryOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import AutocompleteModal from "../../../modals/Autocomplete/index";
import CartModal from "../../../modals/Cart";
import CategoryDropdown from "../../../modals/category";
import LoginForm from "../../../modals/Login";
import "../styles/Desktop.css";

export default function Desktop() {
  const [loginModal, setLoginModal] = React.useState(false);
  const [state, setState] = React.useState(false);
  const [Active, setActive] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [cartModal, setCartModal] = React.useState(false);

  const handleSearch = (e) => {
    setActive(true);
    setSearch(e.target.value);
  };
  const handleActive = () => {
    setActive(true);
  };
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
    <React.Fragment>
      <LoginForm
        handleClick1={handleLoginClick}
        handleClose={handleClose}
        loginModal={loginModal}
        setLoginModal={setLoginModal}
      />

      <CartModal
        cartModal={cartModal}
        setCartModal={setCartModal}
        handleClick3={handleCartModal}
      />
      <div className="appBar">
        <AppBar elevation={2} color="inherit">
          <Toolbar>
            <div className="logo">
              <h1>
                <Link to="/" className="logo-link">
                  Logo{" "}
                </Link>
              </h1>
            </div>
            <div className="searchBar">
              <input
                placeholder="Search for any product"
                type={"text"}
                className="input"
                value={search}
                style={{ fontFamily: "poppins" }}
                onChange={handleSearch}
                onFocus={handleActive}
                onBlur={() => setActive(false)}
              />
              <Search className="icons" color="primary" />
              <AutocompleteModal active={Active} setActive={setActive} />
            </div>
            {/* end search bar */}
            <ul className="ul-items">
              <a className="cat-parent">
                <CategoryDropdown clicked={handleCat} state={state} />
                <Button
                  onClick={handleCat}
                  style={{ background: grey[200] }}
                  startIcon={<CategoryOutlined />}
                  endIcon={<ExpandMore />}
                >
                  Category
                </Button>
              </a>
              <a>
                <IconButton onClick={handleCartModal}>
                  <Badge badgeContent={3} color="secondary">
                    <ShoppingCartOutlined />
                  </Badge>
                </IconButton>
              </a>
              <a>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleLoginClick}
                >
                  <Typography color="primary">Login</Typography>
                </Button>
              </a>
              <a>
                <Link className="link" to="/signup">
                  <Button variant="contained" size="large" color="primary">
                    <Typography>Signup</Typography>
                  </Button>
                </Link>
              </a>
            </ul>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
}
