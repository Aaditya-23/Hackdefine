import { LoadingButton } from "@mui/lab";
import { Box, Container, Stack, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import { useState } from "react";
import Input from "./StyledComponents/Input";

export default function Authentication() {
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
      <Container
        maxWidth="sm"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            flex: "1",
            height: "50%",
            padding: "0.5rem",
          }}
        >
          <Typography
            textAlign="center"
            color={teal[600]}
            mb={3}
            variant="h3"
            component="h3"
          >
            STORE
          </Typography>
          <Box component="form" onSubmit={() => handleSubmit()}>
            <Stack spacing={2}>
              <Typography textAlign="center" variant="h5" component="h5">
                Sign Up
              </Typography>
              <Input props={{ field: "Name", type: "text" }} />
              <Input props={{ field: "Email", type: "email" }} />
              <Input props={{ field: "Password", type: "password" }} />
              <Input props={{ field: "Confirm Password", type: "password" }} />
              <LoadingButton
                loading={loading}
                onClick={handleClick}
                loadingPosition="end"
                variant="contained"
                sx={{
                  backgroundColor: teal[600],
                  "&:hover": { backgroundColor: teal[700] },
                }}
              >
                Sign Up
              </LoadingButton>
            </Stack>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
