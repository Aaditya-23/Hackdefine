import { Box, Container } from "@mui/material";

export function AuthContainer() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}

export function AuthBox() {
  return (
    <Box
      sx={{
        flex: "1",
        height: "50%",
        padding: "0.5rem",
      }}
    />
  );
}
