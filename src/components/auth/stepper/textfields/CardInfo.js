import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function _CardInfoTextField() {
  const [name, setName] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [expireMonth, setExpireMonth] = useState("");
  const [expireYear, setExpireYear] = useState("");
  const [CVC, setCVC] = useState("");

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        <TextField
          variant="outlined"
          color="primary"
          fullWidth
          label="Enter your name"
          size="small"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          variant="outlined"
          color="primary"
          fullWidth
          label="Enter Your Card Number"
          size="small"
          type={"number"}
          value={cardNo}
          onChange={(e) => setCardNo(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          variant="outlined"
          color="primary"
          fullWidth
          type={"month"}
          label="Expire Card Month"
          size="small"
          value={expireMonth}
          onChange={(e) => setExpireMonth(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          variant="outlined"
          color="primary"
          fullWidth
          type={"number"}
          label="Epire Card Year"
          size="small"
          value={expireYear}
          onChange={(e) => setExpireYear(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          variant="outlined"
          color="primary"
          fullWidth
          type={"number"}
          label="CVC/CVC"
          size="small"
          value={CVC}
          onChange={(e) => setCVC(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <Button fullWidth size="large" variant="contained" color="secondary">
          Place order
        </Button>
      </Grid>
    </Grid>
  );
}
