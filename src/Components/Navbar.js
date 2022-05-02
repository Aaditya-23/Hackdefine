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

export default function Navbar() {
  return (
    <AppBar
      className="Navbar"
      sx={{ position: "sticky", backgroundColor: "#EAECEE", pt: 0.5 }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" component="h5" sx={{ color: teal[600] }}>
          STORE
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
            LOGIN
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
