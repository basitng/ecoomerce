import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import _ProductLists from "./list";
import DeliveryTextField from "./textfields/DeliveryTextField";
import "./Stepper.css";
import _CardInfoTextField from "./textfields/CardInfo";
import AddressForm from "../../../modals/payment/Address";
export default function PaymentStepper() {
  const [addressModal, setAddressModal] = React.useState(false);
  const handleAddressForm = () => {
    setAddressModal(true);
  };
  const handleClose = () => {
    setAddressModal(false);
  };
  return (
    <div>
      <AddressForm
        handleClick1={handleAddressForm}
        handleClose={handleClose}
        addressModal={addressModal}
      />
      <Container>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Paper elevation={5} className="paper">
                  <div className="container-card">
                    <div className="container-card-header">
                      <Avatar className="container-card-avatar">1</Avatar>
                      <Typography className="container-card-haeder-text">
                        Delivery Date and Time
                      </Typography>
                    </div>

                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={12} md={6}>
                        <DeliveryTextField
                          label={"Delivery Date"}
                          type={"delivery_date"}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <DeliveryTextField
                          label={"Delivery Date"}
                          type={"delivery_time"}
                        />
                      </Grid>
                    </Grid>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={12}>
                <Paper elevation={5} className="paper">
                  <div className="container-card">
                    <div className="container-card-header2">
                      <div>
                        <Avatar className="container-card-avatar">2</Avatar>
                        <Typography className="container-card-haeder-text">
                          Delivery Date and TimeDelivery Address
                        </Typography>
                      </div>
                      <Button
                        onClick={handleAddressForm}
                        size="medium"
                        variant="outlined"
                        color="primary"
                      >
                        Add new Address
                      </Button>
                    </div>
                    <Typography className="container-card-address">
                      Oshodi 12 Agede Road
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={12}>
                <Paper elevation={5} className="paper">
                  <div className="container-card">
                    <div className="container-card-header">
                      <Avatar className="container-card-avatar">3</Avatar>
                      <Typography className="container-card-haeder-text">
                        Payment Details
                        <Typography className="small-gray-text">
                          Enter card information
                        </Typography>
                      </Typography>
                    </div>
                    <_CardInfoTextField />
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={{ width: "100%", background: "#fff" }}>
              <_ProductLists />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
