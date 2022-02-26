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
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../../context/providers/SearchContext";
import AutocompleteModal from "../../../modals/Autocomplete/index";
import CartModal from "../../../modals/Cart";
import CategoryDropdown from "../../../modals/category";
import LoginForm from "../../../modals/Login";
import { getApi } from "../../../requestMethods";
import "../styles/Desktop.css";
import Logo from "../../../assets/Logo.png";

export default function Desktop({ display, totalItems }) {
  const [loginModal, setLoginModal] = React.useState(false);
  const { dispatchSearch } = useContext(SearchContext);
  const [state, setState] = React.useState(false);
  const [Active, setActive] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [cartModal, setCartModal] = React.useState(false);
  const [data, setData] = React.useState();
  const [Loading, setLoading] = React.useState(false);

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
                  <img src={Logo} className="web--logo" />
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
                <IconButton onClick={handleCartModal}>
                  <Badge badgeContent={totalItems} color="secondary">
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
