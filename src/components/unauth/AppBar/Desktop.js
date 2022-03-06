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
import { Link, useLocation } from "react-router-dom";
import { SearchContext } from "../../../context/providers/SearchContext";
import AutocompleteModal from "../../../modals/Autocomplete/index";
import { getApi } from "../../../requestMethods";
import "../styles/Desktop.css";
import Logo from "../../../assets/Logo.png";

export default function Desktop({ display, totalItems }) {
  const { dispatchSearch } = useContext(SearchContext);
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
  const handleCartModal = () => {
    setCartModal(true);
    if (cartModal) {
      setCartModal(false);
    }
  };

  return (
    <React.Fragment>
      <div className="appBar">
        <AppBar
          elevation={0}
          color="inherit"
          style={
            location.pathname === "/login" || location.pathname === "/signup"
              ? { display: "none" }
              : { display: "block" }
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
                  component={Link}
                  to="/login"
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
