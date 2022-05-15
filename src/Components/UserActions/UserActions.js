import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { destroyUser } from "../../Features/UserSlice";
import { destroyWishlist } from "../../Features/WishlistSlice";
import { actionButtons, actions, container, toAuth } from "./Styles";

function ToAuth() {
  return (
    <Box sx={{ ...toAuth }}>
      <Button
        component={Link}
        to="/auth/signin"
        variant="contained"
        sx={{ flex: 1 }}
      >
        Login
      </Button>
      <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 8 }} />
      <Button
        component={Link}
        to="/auth/signup"
        variant="contained"
        sx={{ flex: 1 }}
      >
        Sign Up
      </Button>
    </Box>
  );
}

export default function UserActions() {
  const { token, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(destroyUser());
    dispatch(destroyWishlist());
  };

  return (
    (!token && <ToAuth />) ||
    (user && (
      <Box sx={{ ...container }}>
        <Avatar
          sx={{
            height: 56,
            width: 56,
            bgcolor: "black",
          }}
          alt={user.name}
          src={user.avatarUrl}
        >
          {user?.firstName[0].toUpperCase()}
        </Avatar>
        <Box sx={{ ...actions }}>
          <Typography variant="h5" component="h5">
            {user.firstName.slice(0, 12).trimEnd() +
              (user.firstName.length > 12 ? " ..." : "")}
          </Typography>
          <Box sx={{ ...actionButtons }}>
            <Button
              size="small"
              sx={{ mt: 1 }}
              variant="contained"
              component={Link}
              to="/user/profile"
            >
              My Profile
            </Button>
            <Button
              size="small"
              sx={{ mt: 1 }}
              variant="contained"
              to="/user/profile"
              color="error"
              onClick={handleClick}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Box>
    ))
  );
}
