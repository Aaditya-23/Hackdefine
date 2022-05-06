import { makeStyles } from "@material-ui/core";
import { Box, Container, styled } from "@mui/material";
import { teal } from "@mui/material/colors";

export const TextFieldStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: teal[600],
      borderWidth: "1.8px",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: teal[600],
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: teal[700],
    },
    "& .MuiOutlinedInput-input": {
      color: teal[600],
    },
    "&:hover .MuiOutlinedInput-input": {
      color: teal[600],
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: teal[600],
    },
    "& .MuiInputLabel-outlined": {
      color: teal[600],
    },
    "&:hover .MuiInputLabel-outlined": {
      color: teal[700],
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: teal[700],
    },
  },
}));

export const AutocompleteStyles = makeStyles((theme) => ({
  endAdornment: {
    display: "none",
  },
}));

export const homePage = {
  width: "95vw",
  mt: 2,
  position: "fixed",
  left: "calc(100vw - 97.5vw)",
  overflow: "scroll",
  display: "flex",
  flexDirection: "column",
  gap: { xs: "2.5in", sm: "3.5in" },
};

export const customBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: { xs: "5px", sm: "15px" },
  backgroundColor: "white",
};

export const customText = {
  fontSize: { xs: "2rem", sm: "3.5rem" },
  color: teal[600],
  letterSpacing: "1px",
};

export const smallText = {
  fontSize: "1.2rem",
  fontWeight: 400,
  color: teal[600],
};

export const navRoutes = {
  display: { xs: "none", sm: "flex" },
  a: { color: teal[600], textDecoration: "underline" },
  mt: 4,
};

export const AuthContainer = styled(Container)({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const AuthBox = styled(Box)({
  flex: "1",
  height: "50%",
  padding: "0.5rem",
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
