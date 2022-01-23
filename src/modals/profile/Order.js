import {
  Button,
  Dialog,
  DialogContent,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect } from "react";

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
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    setHandleOpen(false);
  };
  useEffect(() => {
    if (handleOpen) {
      setOpen(true);
    } else {
      setOpen(false);
      setHandleOpen(false);
    }
  }, [handleOpen]);
  const classes = useStyles();
  return (
    <div>
      <Dialog
        classes={{ paper: classes.paper }}
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <Table className={classes.table}>
            <TableHead>
              <TableCell>Order #</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date Purchased</TableCell>
              <TableCell>Total</TableCell>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component={"th"}>Iphone12</TableCell>
                <TableCell component={"th"}>
                  <Button variant="outlined" color="secondary">
                    Pending
                  </Button>
                </TableCell>
                <TableCell component={"th"}>12-10-2021</TableCell>
                <TableCell component={"th"}>$20,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>
    </div>
  );
}
