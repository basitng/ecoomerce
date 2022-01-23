import {
  Badge,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import {
  CreditCardOutlined,
  LocalShippingOutlined,
  LocationCityOutlined,
  PersonAddOutlined,
  ShoppingBasketOutlined,
} from "@material-ui/icons";
import React from "react";
import EditProfileModal from "../../../modals/profile/EditProfile";
import OrderModal from "../../../modals/profile/Order";

const useStyles = makeStyles((theme) => ({
  pushDown: {
    marginTop: "3rem",
  },
  header: {
    fontSize: 15,
    color: "#555",
    padding: 20,
  },
}));
export default function _DashboardNav() {
  const [state, setState] = React.useState(false);

  const handleOpen = () => setState(true);

  const classes = useStyles();
  return (
    <div className={classes.pushDown}>
      <EditProfileModal />
      <OrderModal handleOpen={state} setHandleOpen={setState} />
      <Paper>
        <List dense={false}>
          <Typography className={classes.header}>Dashboard</Typography>

          <ListItem button onClick={handleOpen}>
            <ListItemIcon>
              <ShoppingBasketOutlined />
            </ListItemIcon>
            <ListItemText primary={"All Orders"} />
            <ListItemSecondaryAction>
              <IconButton edge="end">
                <Badge badgeContent={"03"} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <LocalShippingOutlined />
            </ListItemIcon>
            <ListItemText primary={"Delivered"} />
            <ListItemSecondaryAction>
              <IconButton edge="end">
                <Badge badgeContent={"04"} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <LocationCityOutlined />
            </ListItemIcon>
            <ListItemText primary={"Awaiting Delivery"} />
            <ListItemSecondaryAction>
              <IconButton edge="end">
                <Badge badgeContent={"05"} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <CreditCardOutlined />
            </ListItemIcon>
            <ListItemText primary={"Awaiting Payment"} />
            <ListItemSecondaryAction>
              <IconButton edge="end">
                <Badge badgeContent={"00"} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}
