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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "60%",
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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

export default function ProductReviewCard({ avatar, type }) {
  const classes = useStyles();

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
        title="Shrimp and Chorizo Paella"
        subheader={
          <div className="detail-rating">
            <Star className={classes.icon} />
            <Star className={classes.icon} />
            <Star className={classes.icon} />
            <Star className={classes.icon} />
            <Star className={classes.icon} />
            <Typography className={classes.ratingText}>4.7</Typography>
          </div>
        }
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}
