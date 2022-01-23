import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import _mainProfile from "../../../components/auth/profile/main";
import _DashboardNav from "../../../components/auth/profile/Nav";

const useStyles = makeStyles((theme) => ({
  pushDown: {
    margin: "6rem 0rem",
  },
}));
export default function ProfilePage() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.pushDown}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3}>
            <_DashboardNav />
          </Grid>
          <Grid item xs={12} md={9}>
            <_mainProfile />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
