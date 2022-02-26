import React, { useContext, useState } from "react";
import {
  Grid,
  Typography,
  CardHeader,
  Card,
  makeStyles,
  IconButton,
  Avatar,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";
import { AuthContext } from "../../../context/providers/AuthContext";
import { getApi } from "../../../requestMethods";
import { Link } from "react-router-dom";
import LinearIndeterminate from "../../../loader/Progress";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },

  avatar: {
    backgroundColor: "#333",
    width: 60,
    height: 60,
  },
  table: {
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10,
  },
  Box: {
    padding: 5,
    textAlign: "center",
    height: "15vh",
    display: "grid",
    placeContent: "center",
  },
  status: {
    fontSize: 13,
  },
  typo: {
    fontSize: 25,
    padding: 10,
    fontWeight: 700,
  },
}));
export default function _mainProfile({ handleClick }) {
  const { isAuthenticated } = useContext(AuthContext);
  const { payload } = isAuthenticated;
  const [user, setUser] = useState(payload.user);
  const [Loading, setLoading] = useState(true);
  const [state, setState] = useState({
    allOrders: 0,
    delivered: 0,
    awaitingDelivery: 0,
    awaitingPayment: 0,
  });

  const classes = useStyles();
  const box = [
    { value: state.allOrders, status: "All Orders" },
    { value: state.delivered, status: "Delivered" },
    { value: state.awaitingDelivery, status: "Awaiting Delivery" },
    { value: "00", status: "Reports" },
  ];

  React.useEffect(async () => {
    await getApi
      .get(`/order/find/${user._id}`)
      .then(({ data }) => {
        setLoading(false);
        setState({
          ...state,
          allOrders: data.orders,
          delivered: data.delivered,
          awaitingDelivery: data.pending,
        });
      })
      .catch((e) => console.log(e));
  }, [0]);
  console.log("pending", state.pending);
  return (
    <div>
      {Loading === true ? <LinearIndeterminate /> : ""}
      {/* <OrderModal handleOpen={state}/> */}
      <Typography className={classes.typo} color="secondary">
        My Profile
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {user.username[0]}
                </Avatar>
              }
              action={
                <IconButton onClick={handleClick} aria-label="settings">
                  <EditOutlined />
                </IconButton>
              }
              title={user.username}
              subheader={user.createdAt}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {box.map((item) => (
              <Grid key={item.status} item xs={6} md={3}>
                <Paper>
                  <Box className={classes.Box}>
                    <Typography variant="h5" color="primary">
                      {Loading ? (
                        <CircularProgress
                          size={20}
                          color="secondary"
                          thickness={3}
                        />
                      ) : (
                        item.value
                      )}
                    </Typography>
                    <Typography
                      className={classes.status}
                      variant="p"
                      color="secondary"
                    >
                      {item.status}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Paper>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>

                  <TableCell>Email Address</TableCell>
                  <TableCell>Phone number</TableCell>
                  <TableCell>Delivery Address</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th">{user.username}</TableCell>
                  <TableCell component="th">
                    {user.email ? user.email : "None"}
                  </TableCell>
                  <TableCell component="th">
                    {user.phone_number ? `0${user.phone_number}` : "None"}
                  </TableCell>
                  <TableCell component="th">
                    {user.address ? user.address : "None"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
