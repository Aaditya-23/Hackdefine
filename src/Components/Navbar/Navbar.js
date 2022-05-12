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
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import CustomDrawer from "../CustomDrawer/CustomDrawer";

import MyLogo from "../../Assets/Images/MyLogo.png";

export default function Navbar() {
  return (
    <AppBar
      className="Navbar"
      sx={{
        position: "fixed",
        backgroundColor: "#4B5A67",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "5px !important ",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomDrawer />
          <Box
            component={Link}
            to="/"
            sx={{ color: "#DEDEE4", display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src={MyLogo}
              sx={{ width: { xs: 50, sm: 80 }, height: { xs: 50, sm: 80 } }}
            />
            <Typography
              variant="h3"
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                color: "white",
                fontWeight: 600,
              }}
            >
              NILE
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: { xs: "none", sm: "block" }, mr: 1 }}>
            <SearchBar />
          </Box>

          <Tooltip title="Cart" placement="bottom-end">
            <IconButton>
              <ShoppingCart sx={{ color: "#DEDEE4" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Wishlist" sx={{ mr: 1 }} placement="bottom-end">
            <IconButton>
              <FavoriteBorder sx={{ color: "#DEDEE4" }} />
            </IconButton>
          </Tooltip>
          <Link to="/auth/signin" style={{ color: "white" }}>
            <Button
              variant="contained"
              sx={{
                fontWeight: 600,
                letterSpacing: 1,
                backgroundColor: "#4B5A67",
                "&:hover": { backgroundColor: "hsl(208, 16%, 33%)" },
              }}
            >
              Login
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
