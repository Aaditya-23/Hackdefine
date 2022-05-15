import {
  AppBar,
  Badge,
  Box,
  Toolbar,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { ShoppingCart, FavoriteBorder } from "@mui/icons-material/";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import CustomDrawer from "../CustomDrawer/CustomDrawer";

import MyLogo from "../../Assets/Images/MyLogo.png";
import { useState } from "react";

export default function Navbar() {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  return (
    <AppBar
      className="Navbar"
      sx={{
        position: "sticky",
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

          <Tooltip
            title="Wishlist"
            sx={{ mr: 2 }}
            placement="bottom"
            TransitionComponent={Zoom}
          >
            <Badge color="secondary" badgeContent={wishlistCount}>
              <Box component={Link} to="/shop/wishlist">
                <FavoriteBorder sx={{ color: "#DEDEE4" }} />
              </Box>
            </Badge>
          </Tooltip>

          <Tooltip title="Cart" placement="bottom" TransitionComponent={Zoom}>
            <Box component={Link} to="/user/cart">
              <ShoppingCart sx={{ color: "#DEDEE4" }} />
            </Box>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
