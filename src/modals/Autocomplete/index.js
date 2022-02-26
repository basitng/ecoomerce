import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Avatar,
  CircularProgress,
  ListItemAvatar,
  Paper,
} from "@material-ui/core";
import { useNavigate, Link } from "react-router-dom";
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

export default function AutocompleteModal({ active, setActive, data }) {
  const classes = useStyles();
  const navigate = useNavigate();
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
            <List>
              {data ? (
                data.map((docs) => (
                  <ListItem
                    onClick={() => setActive(false)}
                    component="nav"
                    component={Link}
                    to="/search"
                    divider
                    button
                    key={docs._id}
                  >
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={docs.frontPic} />
                    </ListItemAvatar>
                    <ListItemText primary={docs.name} />
                  </ListItem>
                ))
              ) : (
                <div
                  style={{
                    display: "grid",
                    placeContent: "center",
                    padding: 10,
                  }}
                >
                  <CircularProgress thickness={7} size={40} color="secondary" />
                </div>
              )}
            </List>
          </Paper>
        </React.Fragment>
      ) : null}
    </div>
  );
}
