import {
  Avatar,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import _ProductLists from "./list";
import "./Stepper.css";
import { AuthContext } from "../../../context/providers/AuthContext";
import { getApiWithToken } from "../../../requestMethods";
import { PaystackButton } from "react-paystack";
import { useCart } from "react-use-cart";
import { LagosLocations } from "../../../config/Location";
const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(1),
    minWidth: 120,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  disable: {
    width: "100%",
    padding: 10,
    height: 55,
    background: "#777",
    opacity: 0.8,
    pointerEvents: "none",
    display: "block",
    border: "none",
    outline: "none",
    borderRadius: theme.spacing(1),
    color: "#fff",
    fontFamily: "poppins",
    cursor: "none",
  },
  btn: {
    width: "100%",
    padding: 10,
    height: 55,
    background: "#2B3445",
    display: "block",
    border: "none",
    outline: "none",
    borderRadius: theme.spacing(1),
    color: "#fff",
    fontFamily: "poppins",
    cursor: "pointer",
  },
}));
export default function PaymentStepper({ state }) {
  const { cartTotal, items } = useCart();
  const navigate = useNavigate();
  const classes = useStyles();
  const { isAuthenticated } = React.useContext(AuthContext);
  const { payload } = isAuthenticated;
  const [user, setUser] = React.useState(payload.user);
  const [Loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const publicKey = process.env.REACT_APP_PRIVATE_PAYSTACK_KEY;
  const productIDS = [];
  items.map((data) => {
    productIDS.push(data.id);
  });

  const [city, setCity] = React.useState("");
  const [phone, setPhone] = React.useState(`0${user.phone_number}`);
  const [junction, setJunction] = React.useState("");
  const [junctionNo, setJunctionNo] = React.useState("");
  const [streetName, setStreetName] = React.useState(user.address);

  const componentProps = {
    email: user.email,
    amount: (cartTotal + junctionNo) * 100,
    metadata: {
      name: user.username,
      phone: phone,
      junction,
      streetName,
      junction,
      city: "lagos",
    },
    publicKey,
    text: "Place Order",
    onSuccess: () => {
      setLoading(true);
      getApiWithToken
        .post("/order/create", {
          userID: user._id,
          productId: productIDS,
          amt: cartTotal + junctionNo,
          address: "Lagos State",
          junction: junction,
          phone: phone,
          shipping: junctionNo,
        })
        .then((res) => {
          console.log("Data", res.data);
          navigate("/");
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    },
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleJunction = (e) => {
    setJunction(e.target.value);
    console.log(e.target.value);
  };
  const handleStreetName = (e) => {
    setStreetName(e.target.value);
  };

  return (
    <div>
      <Container style={{ marginTop: "8rem" }}>
        {Loading && (
          <Backdrop
            className={classes.backdrop}
            open={true}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Paper elevation={5} className="paper">
                  <div className="container-card">
                    <div className="container-card-header">
                      <Avatar className="container-card-avatar">1</Avatar>
                      <Typography className="container-card-haeder-text">
                        Set Default Delivery Phone number
                      </Typography>
                    </div>

                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={12} md={12}>
                        <TextField
                          variant="outlined"
                          type="number"
                          fullWidth
                          value={phone}
                          onChange={handlePhone}
                          autoFocus
                          label={"Phone number"}
                        />
                      </Grid>
                    </Grid>
                  </div>
                </Paper>
              </Grid>
              {/* ================ DELIVERY ============= */}
              <Grid item xs={12} md={12}>
                <Paper elevation={5} className="paper">
                  <div className="container-card">
                    <div className="container-card-header2">
                      <div>
                        <Avatar className="container-card-avatar">2</Avatar>
                        <Typography className="container-card-haeder-text">
                          Delivery Address
                        </Typography>
                      </div>
                    </div>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <TextField
                          onChange={handleCity}
                          value={"Lagos"}
                          label="Your current city"
                          type="text"
                          fullWidth
                          variant="outlined"
                          required
                          disabled
                          style={{ marginBottom: 10 }}
                          helperText="Make sure your address is valid"
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <FormControl
                          variant="outlined"
                          className={classes.formControl}
                          fullWidth
                        >
                          <InputLabel id="location">
                            Choose closes junction
                          </InputLabel>
                          <Select
                            labelId="location"
                            id="outline"
                            value={junction}
                            onChange={handleJunction}
                            label="Choose closes junction"
                          >
                            {LagosLocations.map((docs) => (
                              <MenuItem
                                key={docs.id}
                                name={docs.location}
                                value={docs.location}
                                onClick={() => setJunctionNo(docs.amount)}
                              >
                                {docs.location}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField
                          onChange={handleStreetName}
                          value={streetName}
                          label="Street Name"
                          type="text"
                          fullWidth
                          variant="outlined"
                          required
                          helperText="e.g jimo..."
                        />
                      </Grid>
                      {/* <Grid item xs={12} md={12}></Grid> */}
                    </Grid>
                  </div>
                  <Grid item xs={12} md={4}>
                    <PaystackButton
                      className={
                        !junction || !phone || !streetName
                          ? classes.disable
                          : classes.btn
                      }
                      {...componentProps}
                    />
                  </Grid>
                </Paper>
              </Grid>
            </Grid>

            {/* ============ payment method ================ */}
          </Grid>

          <Grid item xs={12} md={4}>
            <div style={{ width: "100%", background: "#fff" }}>
              <_ProductLists location={junctionNo} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
