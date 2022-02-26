import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Badge,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import {
  Search,
  ShoppingCartOutlined,
  PersonOutline,
  HomeOutlined,
} from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/providers/AuthContext";
import AutocompleteModal from "../../../modals/Autocomplete/index";
import CartModal from "../../../modals/Cart";
import LoginForm from "../../../modals/Login";
import "../styles/Desktop.css";
import { getApi } from "../../../requestMethods";
import { SearchContext } from "../../../context/providers/SearchContext";

export default function DesktopAuthenticated({ display, totalItems }) {
  const { dispatch } = useContext(AuthContext);
  const { dispatchSearch } = useContext(SearchContext);
  const [loginModal, setLoginModal] = React.useState(false);
  const [state, setState] = React.useState(false);
  const [Active, setActive] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [cartModal, setCartModal] = React.useState(false);
  const [data, setData] = React.useState();
  const [Loading, setLoading] = React.useState(false);

  const location = useLocation();

  const handleSearch = (e) => {
    setActive(true);
    setLoading(true);
    setSearch(e.target.value);
    if (search === "") {
      setData("");
    }
    getApi
      .get(`/query/${search}`)
      .then(({ data }) => {
        setLoading(false);
        setData(data);
        dispatchSearch({ type: "active", payload: data });
      })
      .catch((e) => {
        setLoading(true);
      });
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

  const handleLogout = () => {
    dispatch({ type: "logout" });
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
        <AppBar
          elevation={0}
          color="inherit"
          style={
            display === "none" ? { display: "none" } : { display: "block" }
          }
        >
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
                onBlur={() => {
                  if (search === "") {
                    setActive(false);
                    setData("");
                  } else {
                    setActive(true);
                  }
                }}
              />
              <Search className="icons" color="primary" />
              <AutocompleteModal
                data={data}
                active={Active}
                setActive={setActive}
              />
            </div>
            {/* end search bar */}
            <ul className="ul-items">
              <a>
                <Button
                  component={Link}
                  color={location.pathname === "/" ? "primary" : ""}
                  to="/"
                  endIcon={
                    <IconButton size="small">
                      <HomeOutlined
                        color={location.pathname === "/" ? "primary" : ""}
                      />{" "}
                    </IconButton>
                  }
                  variant={location.pathname === "/" ? "outlined" : "text"}
                >
                  Home
                </Button>
              </a>

              <a>
                <Button
                  component={Link}
                  color={
                    location.pathname === "/profile" ? "primary" : "default"
                  }
                  to="/profile"
                  endIcon={
                    <IconButton size="small">
                      <PersonOutline
                        color={
                          location.pathname === "/profile" ? "primary" : ""
                        }
                      />
                    </IconButton>
                  }
                  variant={
                    location.pathname === "/profile" ? "outlined" : "text"
                  }
                >
                  Profile
                </Button>
              </a>
              <a>
                <Button
                  variant="text"
                  onClick={handleCartModal}
                  startIcon={
                    <IconButton size="small">
                      <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCartOutlined />
                      </Badge>
                    </IconButton>
                  }
                >
                  Carts
                </Button>
              </a>

              <a>
                <Link className="link" to="/">
                  <Button
                    onClick={handleLogout}
                    variant="contained"
                    size="large"
                    color="primary"
                  >
                    <Typography>logout</Typography>
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
