import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { ShoppingCart, FavoriteBorder } from "@mui/icons-material/";
import { teal } from "@mui/material/colors";
import SearchBar from "./StyledComponents/SearchBar";
import { Link } from "react-router-dom";
import CustomDrawer from "./CustomDrawer";

export default function Navbar() {
  return (
    <AppBar
      className="Navbar"
      sx={{ position: "sticky", backgroundColor: "#EAECEE" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "5px !important ",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <CustomDrawer />
          <Link to="/" style={{ color: teal[600] }}>
            STORE
          </Link>
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <SearchBar />
          </Box>

          <Tooltip title="Cart" placement="bottom-end">
            <IconButton>
              <ShoppingCart sx={{ color: teal[600] }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Wishlist" sx={{ mr: 1 }} placement="bottom-end">
            <IconButton>
              <FavoriteBorder sx={{ color: teal[600] }} />
            </IconButton>
          </Tooltip>
          <Button
            variant="contained"
            sx={{
              backgroundColor: teal[600],
              "&:hover": { backgroundColor: teal[700] },
            }}
          >
            <Link to="/auth/signin" style={{ color: "white" }}>
              LOGIN
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
