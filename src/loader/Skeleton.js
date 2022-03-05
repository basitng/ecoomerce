import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  Skeleton: {
    margin: theme.spacing(1),
    borderRadius: theme.spacing(2),
  },
}));

export default function _Skeleton() {
  const classes = useStyles();
  return (
    <Box>
      <Skeleton
        className={classes.Skeleton}
        variant="rect"
        width={"100%"}
        height={"30vh"}
      />

      <Skeleton
        className={classes.Skeleton}
        variant="rect"
        width={"100%"}
        height={"2vh"}
      />
      <Grid
        container
        style={{ marginTop: "-.5rem" }}
        justifyContent="space-between"
      >
        <Grid item xs={6} md={6}>
          <Skeleton
            className={classes.Skeleton}
            variant="rect"
            width={"80%"}
            height={"2vh"}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <Skeleton
            className={classes.Skeleton}
            variant="rect"
            width={"100%"}
            height={"6vh"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
