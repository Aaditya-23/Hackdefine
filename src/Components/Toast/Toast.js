import { Alert as MuiAlert, Slide, Snackbar } from "@mui/material";
import { forwardRef } from "react";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

const SlideTransition = (props) => {
  return <Slide {...props} direction="left" />;
};

export default function Toast({ props }) {
  const { flash, handleClose } = props;

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
        severity="error"
        sx={{ width: "100%", textTransform: "capitalize" }}
      >
        {flash.message + "!"}
      </Alert>
    </Snackbar>
  );
}
