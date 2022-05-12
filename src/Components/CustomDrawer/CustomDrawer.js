import { Menu, ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  styled,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function CustomDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const GenURL = (text) => {
    let url = "/";
    if (text === "Home") return url;

    return url + text.toLowerCase().replaceAll(" ", "");
  };

  const list = () => (
    <Box role="presentation">
      <DrawerHeader sx={{ bgcolor: "#181316" }}>
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
        {["Home", "Shop", "New Collection"].map((text, index) => (
          <ListItem button key={index} onClick={() => setIsOpen(false)}>
            <Link to={GenURL(text)} style={{ width: "100%" }}>
              <ListItemText primary={text} sx={{ color: "black" }} />
            </Link>
          </ListItem>
        ))}
        <ListItem button key={"Searchbar"}>
          <SearchBar />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        sx={{ color: "#DEDEE4", display: { sm: "none" } }}
        onClick={() => setIsOpen(true)}
      >
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
