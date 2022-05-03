import { LoadingButton } from "@mui/lab";
import { Box, Stack, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./StyledComponents/Input";
import { AuthBox, AuthContainer } from "./StyledComponents/Styles";
import { Login } from "@mui/icons-material";

export default function SignUp() {
  // const intialState = {
  //   firstName: null,
  //   email: null,
  //   password: null,
  //   confirmPassword: null,
  // };

  // const [formData, setFormData] = useState(intialState);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {};
  // const handleChange = (e) => {};
  const handleClick = (e) => {
    setLoading(true);
  };

  return (
    <div>
      <AuthContainer maxWidth="sm">
        <AuthBox>
          <Link to="/">
            <Typography
              textAlign="center"
              color={teal[600]}
              mb={3}
              variant="h3"
              component="h3"
            >
              STORE
            </Typography>
          </Link>

          <Box component="form" onSubmit={() => handleSubmit()}>
            <Stack spacing={2}>
              <Typography textAlign="center" variant="h5" component="h5">
                Login
              </Typography>
              <Input props={{ field: "Email", type: "email" }} />
              <Input props={{ field: "Password", type: "password" }} />
              <LoadingButton
                loading={loading}
                onClick={handleClick}
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
