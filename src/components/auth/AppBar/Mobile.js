import React, { useContext } from "react";
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
import { SearchContext } from "../../../context/providers/SearchContext";
import { getApi } from "../../../requestMethods";
import { useLocation } from "react-router-dom";

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
  const { dispatchSearch } = useContext(SearchContext);
  const [cartModal, setCartModal] = React.useState(false);
  const [state, setState] = React.useState(false);
  const [Active, setActive] = React.useState(false);
  const [search, setSearch] = React.useState("");
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
    <Paper
      style={
        location.pathname === "/login" || location.pathname === "/signup"
          ? { display: "none" }
          : { display: "block" }
      }
      elevation={0}
      className="mobile-appBar"
    >
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
            onBlur={() => {
              if (search === "") {
                setActive(false);
                setData("");
              } else {
                setActive(true);
              }
            }}
          />
          <IconButton className="search-bar">
            <SearchOutlined />
          </IconButton>{" "}
          <AutocompleteModal
            data={data}
            active={Active}
            setActive={setActive}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
