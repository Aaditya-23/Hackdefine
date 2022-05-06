import { LoadingButton } from "@mui/lab";
import { Box, Stack, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./StyledComponents/Input";
import { AuthBox, AuthContainer } from "./StyledComponents/Styles";
import { Login } from "@mui/icons-material";

export default function SignUp() {
  const intialState = {
    Email: null,
    Password: null,
  };

  const [formData, setFormData] = useState(intialState);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData((prevData) => {
      prevData[e.target.name] = e.target.value;
      return prevData;
    });
  };

  return (
    <div>
      <AuthContainer maxWidth="sm">
        <AuthBox>
          <Typography
            textAlign="center"
            color={teal[600]}
            mb={3}
            variant="h3"
            component="h3"
          >
            <Link to="/" style={{ color: teal[600] }}>
              STORE
            </Link>{" "}
          </Typography>

          <Box
            component="form"
            id="login-form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <Stack spacing={2}>
              <Typography textAlign="center" variant="h5" component="h5">
                Login
              </Typography>
              <Input props={{ field: "Email", type: "email", handleChange }} />
              <Input
                props={{ field: "Password", type: "password", handleChange }}
              />
              <LoadingButton
                form="login-form"
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
                Login
              </LoadingButton>
              <Typography textAlign="end" variant="p" component="p">
                Don't have an account? &nbsp;
                <Link to="/auth/signup">Sign up</Link>
              </Typography>
            </Stack>
          </Box>
        </AuthBox>
      </AuthContainer>
    </div>
  );
}
