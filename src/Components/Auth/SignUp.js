import { LoadingButton } from "@mui/lab";
import {
  Box,
  Stack,
  Typography,
  Alert as MuiAlert,
  Snackbar,
  Slide,
  Container,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import { AuthBox, AuthContainer } from "./Styles";
import { Login } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { createUser, initialiseUser } from "../../Features/UserSlice";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

export default function SignUp() {
  const intialState = {
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
  };

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(intialState);
  const [loading, setLoading] = useState(false);
  const [flash, setFlash] = useState({ open: false, message: null });
  const [transition, setTransition] = useState(undefined);

  const handleClose = () => {
    setFlash({ ...flash, open: false });
  };

  const SlideTransition = (props) => {
    return <Slide {...props} direction="left" />;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { isCreated, response } = await createUser(formData);
    const storage = window.localStorage;
    storage.clear();

    if (isCreated) {
      dispatch(initialiseUser({ token: response.token, user: response.user }));

      storage.setItem("token", response.token);
      storage.setItem("user", JSON.stringify(response.user));
    } else {
      setLoading(false);
      setTransition(() => SlideTransition);
      setFlash({ open: true, message: response.message });
    }
  };

  const handleChange = (e) => {
    setFormData((prevData) => {
      prevData[e.target.name] = e.target.value;
      return prevData;
    });
  };

  return (
    <div>
      <Container maxWidth="sm" sx={{...AuthContainer}}>
        <Box sx={{...AuthBox}}>
          <Typography textAlign="center" mb={3} variant="h3" component="h3">
            <Link to="/" style={{ color: teal[600] }}>
              NILE
            </Link>
          </Typography>

          <Box
            component="form"
            id="sign-up-form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <Stack spacing={2}>
              <Typography textAlign="center" variant="h5" component="h5">
                Sign Up
              </Typography>
              <Input props={{ field: "name", type: "text", handleChange }} />
              <Input props={{ field: "email", type: "email", handleChange }} />
              <Input
                props={{ field: "password", type: "password", handleChange }}
              />
              <Input
                props={{
                  field: "confirm Password",
                  type: "password",
                  handleChange,
                }}
              />
              <LoadingButton
                form="sign-up-form"
                type="submit"
                loading={loading}
                endIcon={<Login />}
                loadingPosition="end"
                variant="contained"
                sx={{
                  backgroundColor: teal[600],
                  "&:hover": { backgroundColor: teal[700] },
                }}
              >
                Sign Up
              </LoadingButton>
              <Typography textAlign="end" variant="p" component="p">
                Already have an account? &nbsp;
                <Link to="/auth/signin">Sign in</Link>
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={transition}
        open={flash.open}
        autoHideDuration={2000}
        onClose={handleClose}
        key={transition ? transition.name : ""}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {flash.message + "!"}
        </Alert>
      </Snackbar>
    </div>
  );
}
