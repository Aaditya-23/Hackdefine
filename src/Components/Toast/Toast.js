import { Alert as MuiAlert, Slide, Snackbar } from "@mui/material";
import { forwardRef } from "react";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

const SlideTransition = (props) => {
  return <Slide {...props} direction="left" />;
};

export default function Toast({ props }) {
  const { flash, handleClose, type } = props;

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      TransitionComponent={SlideTransition}
      open={flash.open}
      autoHideDuration={2000}
      onClose={handleClose}
      key={"Slide Transition"}
    >
      <Alert
        severity={type || "error"}
        sx={{ width: "100%", textTransform: "capitalize" }}
      >
        {flash.message + "!"}
      </Alert>
    </Snackbar>
  );
}
