import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";

export default function Service({ icon, title, content }) {
  return (
    <Grid item xs={12} md={3}>
      <Card elevation={1} style={{ textAlign: "center", borderRadius: 10 }}>
        <CardContent draggable>
          <div className="icon-wrapper">{icon}</div>
          <Typography
            style={{ lineHeight: "3.5rem" }}
            variant="h6"
            color="secondary"
          >
            {title}
          </Typography>
          <Typography variant="p" color="secondary">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
