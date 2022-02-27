import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { AuthContext } from "../../context/providers/AuthContext";
import { getApiWithToken } from "../../requestMethods";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: "60%",
    padding: 10,
    [theme.breakpoints.down("xs")]: {
      minWidth: "100%",
      padding: 0,
    },
  },
  paper: {
    minWidth: "80%",
    background: theme.palette.background.paper,
    [theme.breakpoints.down("xs")]: {
      minWidth: "95%",
      height: window.innerHeight,
      padding: 0,
    },
  },
}));
export default function OrderModal({ handleOpen, setHandleOpen }) {
  const isOnline = navigator.onLine;
  const { isAuthenticated } = React.useContext(AuthContext);
  const { user } = isAuthenticated.payload;

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState();
  const [Loading, setLoading] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    setHandleOpen(false);
  };

  useEffect(async () => {
    if (handleOpen) {
      setOpen(true);
    } else {
      setOpen(false);
      setHandleOpen(false);
    }
    if (isOnline === true) {
      await getApiWithToken
        .get(`/order/find/${user._id}`)
        .then(({ data }) => {
          setLoading(false);
          setData(data.ordersRaw);
        })
        .catch((e) => {
          console.log(e);
          setLoading(true);
        });
    } else {
      setData([]);
    }
  }, [handleOpen]);

  function numberWithCommas(x) {
    return `₦${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }
  const classes = useStyles();
  return (
    <div>
      <Dialog
        classes={{ paper: classes.paper }}
        open={open}
        onClose={handleClose}
      >
        {Loading ? (
          <div style={{ display: "grid", placeContent: "center", padding: 30 }}>
            <CircularProgress size={40} thickness={10} color="secondary" />
          </div>
        ) : (
          <DialogContent>
            <Table className={classes.table}>
              <TableHead>
                <TableCell>Order #</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date Purchased</TableCell>
                <TableCell>Total</TableCell>
              </TableHead>
              <TableBody>
                {isOnline === true ? (
                  <>
                    {data ? (
                      <>
                        {data.map((data) => (
                          <TableRow>
                            <TableCell component={"th"}>
                              {data.productId}
                            </TableCell>
                            <TableCell component={"th"}>
                              <Button variant="outlined" color="secondary">
                                {data.status ? "Delivered" : "Pending"}
                              </Button>
                            </TableCell>
                            <TableCell component={"th"}>
                              {data.createdAt}
                            </TableCell>
                            <TableCell component={"th"}>
                              {numberWithCommas(data.amt)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  <Typography style={{ justifyContent: "center", padding: 10 }}>
                    No internet connection
                  </Typography>
                )}
              </TableBody>
            </Table>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
