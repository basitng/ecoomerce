import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { orange, grey } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { Star } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "60%",
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      boxShadow: theme.shadows[1],
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  CardContent: {
    marginTop: "-1rem",
  },
  avatar: {
    backgroundColor: grey[500],
  },
  icon: {
    color: orange[800],
    fontSize: 20,
  },
  ratingText: {
    paddingLeft: 10,
  },
}));

export default function ProductReviewCard({
  avatar,
  rating,
  type,
  desc,
  user,
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(rating);

  return (
    <Card elevation={0} className={classes.root}>
      <CardHeader
        avatar={
          <>
            {type == "text" ? (
              <>
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {avatar}
                </Avatar>
              </>
            ) : (
              <Avatar
                aria-label="recipe"
                className={classes.avatar}
                src={type}
              />
            )}
          </>
        }
        title={user}
        subheader={
          <>
            <div className="detail-rating">
              <Rating name="read-only" value={value} readOnly />
              <Typography className={classes.ratingText}>({rating})</Typography>
            </div>
            <Typography variant="body1" color="textSecondary" component="p">
              {desc}
            </Typography>
          </>
        }
      />
    </Card>
  );
}
