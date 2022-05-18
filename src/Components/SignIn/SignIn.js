import { LoadingButton } from "@mui/lab";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input";
import { AuthBox, container, heading } from "./Styles";
import { Google, Login } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { createSession, initialiseUser } from "../../Features/UserSlice";
import { getWishlist } from "../../Features/WishlistSlice";
import { getCart } from "../../Features/CartSlice";
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
      dispatch(getCart(response.token));

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
      <Box sx={{ ...container }}>
        <Paper elevation={6} sx={{ ...AuthBox }}>
          <Box sx={{ ...heading }}>login to your account</Box>

          <Stack
            spacing={2}
            component="form"
            id="login-form"
            onSubmit={handleSubmit}
          >
            <Input props={{ field: "email", type: "email", handleChange }} />
            <Input
              props={{ field: "password", type: "password", handleChange }}
            />
          </Stack>

          <LoadingButton
            form="login-form"
            variant="contained"
            loadingPosition="end"
            endIcon={<Login />}
            loading={loading}
            type="submit"
            sx={{
              bgcolor: "black",
              "&:hover": { bgcolor: "black" },
            }}
          >
            Sign Up
          </LoadingButton>

          <Button
            variant="contained"
            endIcon={<Google />}
            sx={{ bgcolor: "#E53935", "&:hover": { bgcolor: "#D32F2F" } }}
          >
            continue with google
          </Button>

          <Box textAlign="end">
            <Typography
              textTransform="capitalize"
              variant="p"
              component="span"
              mr={1}
            >
              don't have an account?
            </Typography>
            <Box component={Link} to="/auth/login" sx={{ color: "#2196F3" }}>
              Register
            </Box>
          </Box>
        </Paper>
      </Box>

      <Toast props={{ flash, handleClose }} />
    </>
  );
}
