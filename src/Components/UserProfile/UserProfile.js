import {
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { container, details, fileIcon, inputField, userAvatar } from "./Styles";
import { Edit } from "@mui/icons-material";
import { updateUser } from "../../Features/UserSlice";

const Input = styled("input")({
  display: "none",
});

export default function UserProfile() {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [currImage, setCurrImage] = useState(null);
  const [gender, setGender] = useState(user?.gender ?? "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(document.querySelector("#user-profile-form"));
    dispatch(updateUser(data));
  };

  useEffect(() => {
    setGender(user?.gender ?? "");
  }, [user]);

  return (
    user && (
      <Box
        component="form"
        encType="multipart/form"
        id="user-profile-form"
        sx={{ ...container }}
        onSubmit={handleSubmit}
      >
        <Box sx={{ ...userAvatar }}>
          <Box sx={{ ...fileIcon }}>
            <label htmlFor="user-avatar-file">
              <Input
                name="userImage"
                accept="image/*"
                id="user-avatar-file"
                type="file"
                onChange={(e) => {
                  const fileReader = new FileReader();
                  fileReader.onload = (event) => {
                    setCurrImage(event.target.result);
                  };

                  if (e.target.files[0])
                    fileReader.readAsDataURL(e.target.files[0]);
                }}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <Edit sx={{ color: "white" }} />
              </IconButton>
            </label>
          </Box>
          <Avatar
            sx={{ bgcolor: "black", width: 80, height: 80 }}
            alt={user.firstName}
            src={
              currImage ||
              `${process.env.REACT_APP_SERVER_URL + user.avatarUrl}`
            }
          >
            {user.firstName[0].toUpperCase()}
          </Avatar>
        </Box>

        <Box sx={{ ...details }}>
          <Stack flexDirection={{ xs: "column", sm: "row" }} gap={3}>
            <TextField
              required
              name="firstName"
              type="text"
              id="user-first-name"
              label="First Name"
              variant="standard"
              sx={{ ...inputField, flex: 1 }}
              defaultValue={user.firstName}
            />
            <TextField
              required
              name="lastName"
              type="text"
              id="user-last-name"
              label="Last Name"
              variant="standard"
              sx={{ ...inputField, flex: 1 }}
              defaultValue={user.lastName}
            />
          </Stack>

          <TextField
            required
            name="email"
            disabled
            type="email"
            id="user-email"
            label="Email"
            variant="standard"
            sx={{ ...inputField }}
            defaultValue={user.email}
          />

          <FormControl variant="standard" sx={{ ...inputField, flex: 1 }}>
            <InputLabel id="user-gender-label">Gender</InputLabel>
            <Select
              labelId="user-gender-label"
              name="gender"
              id="user-gender"
              label="Gender"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <MenuItem value={"m"}>Male</MenuItem>
              <MenuItem value={"f"}>Female</MenuItem>
              <MenuItem value={"ts"}>Transgender</MenuItem>
              <MenuItem value={"prefer not to say"}>Prefer Not To Say</MenuItem>
            </Select>
          </FormControl>

          <TextField
            type="text"
            name="address"
            id="user-address"
            label="Address"
            variant="standard"
            sx={{ ...inputField, flex: 1 }}
            defaultValue={user.address}
          />
        </Box>

        <Button
          form="user-profile-form"
          variant="contained"
          type="submit"
          sx={{
            bgcolor: "black",
            "&:hover": { bgcolor: "black" },
          }}
        >
          Update
        </Button>
      </Box>
    )
  );
}
