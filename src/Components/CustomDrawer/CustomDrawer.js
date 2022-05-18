import {
  Menu,
  ChevronLeft,
  ChevronRight,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  styled,
  Tooltip,
  Typography,
  useTheme,
  Zoom,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import UserActions from "../UserActions/UserActions";
import { socialProfiles } from "./Styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

export default function CustomDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const list = () => (
    <Box role="presentation">
      <DrawerHeader sx={{ bgcolor: "#181316" }}>
        <Typography variant="h6" component="h6" sx={{ color: "white" }}>
          NILE
        </Typography>
        <IconButton onClick={() => setIsOpen(false)}>
          {theme.direction === "ltr" ? (
            <ChevronLeft sx={{ color: "#DEDEE4" }} fontSize="large" />
          ) : (
            <ChevronRight sx={{ color: "#DEDEE4" }} fontSize="large" />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <List>
        <ListItem key={"user-actions"} onClick={() => setIsOpen(false)}>
          <UserActions />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button onClick={() => setIsOpen(false)}>
          <Box component={Link} to="/" style={{ width: "100%" }}>
            <ListItemText primary={"Home"} sx={{ color: "black" }} />
          </Box>
        </ListItem>
        <ListItem button onClick={() => setIsOpen(false)}>
          <Box component={Link} to="/shop" style={{ width: "100%" }}>
            <ListItemText primary={"Shop"} sx={{ color: "black" }} />
          </Box>
        </ListItem>
        <ListItem button onClick={() => setIsOpen(false)}>
          <Box
            component={Link}
            to="/shop/newReleases"
            style={{ width: "100%" }}
          >
            <ListItemText primary={"New Releases"} sx={{ color: "black" }} />
          </Box>
        </ListItem>

        <ListItem button onClick={() => setIsOpen(false)}>
          <Box component={Link} to="/shop/categories" style={{ width: "100%" }}>
            <ListItemText primary={"Categories"} sx={{ color: "black" }} />
          </Box>
        </ListItem>
        <ListItem sx={{ display: { sm: "none" } }}>
          <SearchBar />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button onClick={() => setIsOpen(false)}>
          <Box component={Link} to="/user/myorders" style={{ width: "100%" }}>
            <ListItemText primary={"My Orders"} sx={{ color: "black" }} />
          </Box>
        </ListItem>
      </List>

      <Stack
        direction="row"
        justifyContent="center"
        spacing={4}
        sx={{ ...socialProfiles }}
      >
        <Box
          onClick={() => {
            window.location.href = "https://github.com/Aaditya-23/Hackdefine";
          }}
        >
          <Tooltip title="Github" placement="top" TransitionComponent={Zoom}>
            <GitHub sx={{ color: "white" }} />
          </Tooltip>
        </Box>
        <Box
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/in/aaditya-verma-523069224";
          }}
        >
          <Tooltip title="Linked In" placement="top" TransitionComponent={Zoom}>
            <LinkedIn sx={{ color: "white" }} />
          </Tooltip>
        </Box>
      </Stack>
    </Box>
  );

  return (
    <>
      <IconButton sx={{ color: "#DEDEE4" }} onClick={() => setIsOpen(true)}>
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        sx={{ "& .MuiPaper-root": { bgcolor: "#4B5A67" } }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        {list()}
      </Drawer>
    </>
  );
}
