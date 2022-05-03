import { Menu, ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./StyledComponents/SearchBar";
import { DrawerHeader } from "./StyledComponents/Styles";

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
      <DrawerHeader sx={{ bgcolor: teal[700] }}>
        <IconButton onClick={() => setIsOpen(false)}>
          {theme.direction === "ltr" ? (
            <ChevronLeft sx={{ color: "white" }} />
          ) : (
            <ChevronRight sx={{ color: "white" }} />
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
      <Divider />
      <List>
        <ListItem button></ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        sx={{ color: teal[600], display: { sm: "none" } }}
        onClick={() => setIsOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer variant="persistent" anchor="left" open={isOpen}>
        {list()}
      </Drawer>
    </>
  );
}
