import { LoadingButton } from "@mui/lab";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import { AuthBox, AuthContainer } from "./Styles";
import { Google, Lock, Login } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { createSession, initialiseUser } from "../../Features/UserSlice";
import {getWishlist} from "../../Features/WishlistSlice";
import Toast from "../Toast/Toast";

export default function SignUp() {
  const intialState = {
    Email: null,
    Password: null,
  };

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [formData, setFormData] = useState(intialState);
  const [loading, setLoading] = useState(false);
  const [flash, setFlash] = useState({ open: false, message: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { isCreated, response } = await createSession(formData);
    const storage = window.localStorage;
    storage.clear();

    if (isCreated) {
      dispatch(initialiseUser({ token: response.token, user: response.user }));
      storage.setItem("token", response.token);
      storage.setItem("user", JSON.stringify(response.user));
      dispatch(getWishlist(response.token));

      setLoading(false);
      Navigate("/", { replace: true });
    } else {
      setLoading(false);
      setFlash({
        open: true,
        message: response?.message || "Internal server Error",
      });
    }
  };

  const handleChange = (e) => {
    setFormData((prevData) => {
      prevData[e.target.name] = e.target.value;
      return prevData;
    });
  };

  const handleClose = () => {
    setFlash({ ...flash, open: false });
  };

  return (
    <>
      <Box sx={{ ...AuthContainer }}>
        <Paper elevation={12} sx={{ ...AuthBox }}>
          <Stack direction="row" alignItems="center" spacing={3}>
            <Typography textAlign="center" variant="h4" component="h4">
              Login
            </Typography>
            <Lock />
          </Stack>
          <Box
            component="form"
            id="login-form"
            onSubmit={(e) => handleSubmit(e)}
            width="100%"
          >
            <Stack spacing={2}>
              <Input props={{ field: "email", type: "email", handleChange }} />
              <Input
                props={{ field: "password", type: "password", handleChange }}
              />
              <Stack direction="column" spacing={2}>
                <LoadingButton
                  form="login-form"
                  type="submit"
                  loading={loading}
                  endIcon={<Login />}
                  loadingPosition="end"
                  variant="contained"
                  sx={{
                    flex: 1,
                    bgcolor: "hsl(37, 90%, 31%)",
                    "&:hover": { bgcolor: "hsl(37, 90%, 41%)" },
                  }}
                >
                  Login
                </LoadingButton>
                <Button
                  sx={{
                    flex: 1,
                    bgcolor: "#D32F2F",
                    "&:hover": { bgcolor: "#E53935" },
                  }}
                  variant="contained"
                  endIcon={<Google />}
                >
                  continue with google
                </Button>
              </Stack>
              <Typography textAlign="end" variant="p" component="p">
                Don't have an account? &nbsp;
                <Box
                  component={Link}
                  to="/auth/signup"
                  sx={{ color: "#3498DB" }}
                >
                  Sign up
                </Box>
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Box>
      <Toast props={{ flash, handleClose }} />
    </>
  );
}
