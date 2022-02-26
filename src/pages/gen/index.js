import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import _Banner from "../../components/gen/Banner/Banner";
import _Categories from "./Category";

export default function HomePage() {
  return (
    <React.Fragment>
      <_Categories />
    </React.Fragment>
  );
}
