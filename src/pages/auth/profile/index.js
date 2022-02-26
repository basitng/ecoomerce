import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import _mainProfile from "../../../components/auth/profile/main";
import _DashboardNav from "../../../components/auth/profile/Nav";
import { AuthContext } from "../../../context/providers/AuthContext";
import EditProfileModal from "../../../modals/profile/EditProfile";

const useStyles = makeStyles((theme) => ({
  pushDown: {
    margin: "6rem 0rem",
  },
}));
export default function ProfilePage() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => setOpen(true);
  const classes = useStyles();
  return (
    <div>
      <EditProfileModal handleOpen={open} setHandleOpen={setOpen} />
      <Container className={classes.pushDown}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3}>
            <_DashboardNav handleClick={handleClick} />
          </Grid>
          <Grid item xs={12} md={9}>
            <_mainProfile handleClick={handleClick} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
