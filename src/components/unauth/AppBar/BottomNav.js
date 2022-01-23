import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Badge, Paper } from "@material-ui/core";
import {
  HomeOutlined,
  PersonAddOutlined,
  SettingsBrightnessOutlined,
  SettingsOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import LoginForm from "../../../modals/Login";

const useStyles = makeStyles({
  root: {
    width: "100%",
    background: "#fff",
    color: "#fff",
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [loginModal, setLoginModal] = React.useState(false);
  const handleLoginClick = () => {
    setLoginModal(true);
  };
  const handleClose = () => {
    setLoginModal(false);
  };
  return (
    <Paper elevation={10}>
      <LoginForm
        handleClick={handleLoginClick}
        handleClose={handleClose}
        loginModal={loginModal}
      />
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeOutlined className="white-text" />}
        />
        <BottomNavigationAction
          label="Carts"
          icon={
            <Badge badgeContent={3} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          }
        />

        <BottomNavigationAction
          label="Login"
          onClick={handleLoginClick}
          icon={<PersonAddOutlined />}
        />
        <BottomNavigationAction label="Theme" icon={<SettingsOutlined />} />
      </BottomNavigation>
    </Paper>
  );
}
