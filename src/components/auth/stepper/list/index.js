import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import "./List.css";

export default function _ProductLists() {
  return (
    <div>
      <List
        className="list-container"
        component="nav"
        aria-label="main mailbox folders"
      >
        <Typography className="list-header">Your Orders</Typography>
        <ListItem className="list-flex">
          <ListItemText className="medium-gray-text" primary="Iphone 12" />
          <ListItemText className="medium-gray-text" primary="$100.00" />
        </ListItem>
        <ListItem className="list-flex">
          <ListItemText
            className="medium-gray-text"
            primary="Ipad 16 min air"
          />{" "}
          <ListItemText className="medium-gray-text" primary="$100.00" />
        </ListItem>
        <Divider />
        <ListItem className="list-flex">
          <ListItemText className="small-gray-text" primary="Shipping" />{" "}
          <ListItemText className="small-gray-text" primary="$10.00" />
        </ListItem>
        <ListItem className="list-flex">
          <ListItemText className="small-gray-text" primary="Discount" />{" "}
          <ListItemText className="small-gray-text" primary="$50.00" />
        </ListItem>
        <Divider />
        <ListItem className="list-flex">
          <ListItemText style={{ color: "#EB5757" }} primary="Total" />{" "}
          <ListItemText style={{ color: "#EB5757" }} primary="$150.00" />
        </ListItem>
      </List>
    </div>
  );
}
