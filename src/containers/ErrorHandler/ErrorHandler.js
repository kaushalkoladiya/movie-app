import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ErrorHandler = () => {
  const [open, setOpen] = useState(true);
  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        maxWidth="md"
        open={open}
        onClose={closeHandler}
        aria-labelledby="error-handler"
      >
        <DialogTitle id="error-handler">Notice</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: "indianred" }}>
            Primary server is unavailable
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeHandler} color="inherit">
            Close
          </Button>
          <Button onClick={closeHandler} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ErrorHandler;
