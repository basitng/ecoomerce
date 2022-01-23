import React, { useState } from "react";
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
} from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";
import OrderModal from "../../../modals/profile/Order";
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
export default function _mainProfile() {
  // const [state, setState] = useState(false)
  const classes = useStyles();
  const box = [
    { value: "03", status: "All Orders" },
    { value: "03", status: "Delivered" },
    { value: "05", status: "Awaiting Delivery" },
    { value: "05", status: "Awaiting Payment" },
  ];
  // const handleOpen = () => setState(true);
  return (
    <div>
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
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <EditOutlined />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
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
                      {item.value}
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
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email Address</TableCell>
                  <TableCell>Phone number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th">Andreid</TableCell>
                  <TableCell component="th">Peter</TableCell>
                  <TableCell component="th">peter@gmail.com</TableCell>
                  <TableCell component="th">07062602401</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
