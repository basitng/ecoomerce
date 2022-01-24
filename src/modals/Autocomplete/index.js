import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { Avatar, ListItemAvatar, Paper } from "@material-ui/core";
import img2 from "../../assets/products/headset.png";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    position: "absolute",
    top: 80,
    left: 0,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      zIndex: 1000000,
    },
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function AutocompleteModal({ active, setActive }) {
  const classes = useStyles();
  useEffect(() => {
    if (!active) {
      setActive(false);
    }
  }, [active]);
  return (
    <div className={classes.root}>
      {active ? (
        <React.Fragment>
          <Paper elevation={10}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Drafts" />
              </ListItem>

              <Divider />
              <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={img2} />
                  </ListItemAvatar>
                  <ListItemText primary="Headset" />
                </ListItem>
              </List>
            </List>
          </Paper>
        </React.Fragment>
      ) : null}
    </div>
  );
}
