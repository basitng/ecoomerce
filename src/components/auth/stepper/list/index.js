import React from "react";
import { useCart } from "react-use-cart";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import "./List.css";

export default function _ProductLists({ location }) {
  const { items, cartTotal } = useCart();
  function numberWithCommas(x) {
    return `₦${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }
  return (
    <div>
      <List
        className="list-container"
        component="nav"
        aria-label="main mailbox folders"
      >
        <Typography className="list-header">Summary</Typography>
        {items.map((data) => (
          <ListItem className="list-flex">
            <ListItemText className="medium-gray-text" primary={data.title} />
            <ListItemText
              className="medium-gray-text"
              primary={`${numberWithCommas(data.price)} (${data.quantity})`}
            />
          </ListItem>
        ))}

        <Divider />
        <ListItem className="list-flex">
          <ListItemText className="small-gray-text" primary="Shipping" />{" "}
          <ListItemText
            className="small-gray-text"
            primary={numberWithCommas(location)}
          />
        </ListItem>

        <Divider />
        <ListItem className="list-flex">
          <ListItemText primary="Actual Price" />{" "}
          <ListItemText primary={numberWithCommas(cartTotal)} />
        </ListItem>
        <Divider />
        <ListItem className="list-flex">
          <ListItemText style={{ color: "#EB5757" }} primary="Total" />{" "}
          <ListItemText
            style={{ color: "#EB5757" }}
            primary={numberWithCommas(cartTotal + location)}
          />
        </ListItem>
      </List>
    </div>
  );
}
