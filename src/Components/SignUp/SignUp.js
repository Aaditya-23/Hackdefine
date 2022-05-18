import { LoadingButton } from "@mui/lab";
import { Box, Stack, Typography, Paper, Button } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input";
import { Google, Login } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { createUser, initialiseUser } from "../../Features/UserSlice";
import { getWishlist } from "../../Features/WishlistSlice";
import Toast from "../Toast/Toast";
import { AuthBox, container, heading } from "./Styles";

export default function SignUp() {
  const intialState = {
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
  };

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [formData, setFormData] = useState(intialState);
  const [loading, setLoading] = useState(false);
  const [flash, setFlash] = useState({ open: false, message: null });

  const handleClose = () => {
    setFlash({ ...flash, open: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { isCreated, response } = await createUser(formData);
    const storage = window.localStorage;
    storage.clear();

    if (isCreated) {
      dispatch(initialiseUser({ token: response.token, user: response.user }));
      dispatch(getWishlist(response.token));
      storage.setItem("token", response.token);
      storage.setItem("user", JSON.stringify(response.user));
      setLoading(false);
      Navigate("/", { replace: true });
    } else {
      setLoading(false);
      setFlash({
        open: true,
        message: response?.message || "Internal Server Error",
      });
    }
  };

  const handleChange = (e) => {
    setFormData((prevData) => {
      prevData[e.target.name] = e.target.value;
      return prevData;
    });
  };

  return (
    <>
      <Box sx={{ ...container }}>
        <Paper elevation={6} sx={{ ...AuthBox }}>
          <Box sx={{ ...heading }}>create your account</Box>

          <Stack
            spacing={2}
            component="form"
            id="sign-up-form"
            onSubmit={handleSubmit}
          >
            <Input
              props={{ field: "first Name", type: "text", handleChange }}
            />
            <Input props={{ field: "last Name", type: "text", handleChange }} />
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
          </Stack>

          <LoadingButton
            form="sign-up-form"
            type="submit"
            loading={loading}
            endIcon={<Login />}
            loadingPosition="end"
            variant="contained"
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
              already have an account?
            </Typography>
            <Box component={Link} to="/auth/login" sx={{ color: "#2196F3" }}>
              Sign In
            </Box>
          </Box>
        </Paper>
      </Box>

      <Toast props={{ flash, handleClose }} />
    </>
  );
}
