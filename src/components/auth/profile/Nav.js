import {
  Badge,
  CircularProgress,
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
import { AuthContext } from "../../../context/providers/AuthContext";
import EditProfileModal from "../../../modals/profile/EditProfile";
import OrderModal from "../../../modals/profile/Order";
import { getApi } from "../../../requestMethods";

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
  const { isAuthenticated } = React.useContext(AuthContext);
  const { payload } = isAuthenticated;
  const [user, setUser] = React.useState(payload.user);
  const [Loading, setLoading] = React.useState(true);
  const handleOpen = () => setState(true);
  const [Query, setQuery] = React.useState({
    allOrders: 0,
    delivered: 0,
    awaitingDelivery: 0,
    awaitingPayment: 0,
  });

  const classes = useStyles();
  const box = [
    { value: Query.allOrders, status: "All Orders" },
    { value: Query.delivered, status: "Delivered" },
    { value: Query.awaitingDelivery, status: "Awaiting Delivery" },
    { value: "00", status: "Report" },
  ];

  React.useEffect(async () => {
    await getApi
      .get(`/order/find/${user._id}`)
      .then(({ data }) => {
        setLoading(false);
        setQuery({
          ...Query,
          allOrders: data.orders,
          delivered: data.delivered,
          awaitingDelivery: data.pending,
        });
      })
      .catch((e) => console.log(e));
  }, [0]);
  console.log("pending", Query.pending);
  return (
    <div className={classes.pushDown}>
      <EditProfileModal />
      <OrderModal handleOpen={state} setHandleOpen={setState} />
      <Paper>
        <List dense={false}>
          <Typography className={classes.header}>Dashboard</Typography>

          {box.map((data) => (
            <ListItem button onClick={handleOpen}>
              <ListItemIcon>
                <ShoppingBasketOutlined />
              </ListItemIcon>
              <ListItemText primary={data.status} />
              <ListItemSecondaryAction>
                <IconButton edge="end">
                  {Loading ? (
                    <CircularProgress
                      size={15}
                      color="secondary"
                      thickness={3}
                    />
                  ) : (
                    <Badge badgeContent={data.value} />
                  )}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}
