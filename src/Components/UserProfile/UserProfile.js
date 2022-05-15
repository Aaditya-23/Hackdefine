import {
  Avatar,
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  container,
  details,
  fileIcon,
  inlineStyle,
  inputField,
  userAvatar,
} from "./Styles";
import states from "./States";
import { LoadingButton } from "@mui/lab";
import { Edit, Update } from "@mui/icons-material";

const Input = styled("input")({
  display: "none",
});

export default function UserProfile() {
  const { token, user } = useSelector((state) => state.user);

  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleLength = (e, len) => {
    // const val = parseInt(e.target.value.slice(0, len));
  };

  useEffect(() => {
    if (user) setGender(user.gender || "");
  }, [user]);

  return (
    user && (
      <Box component="form" sx={{ ...container }}>
        <Box sx={{ ...userAvatar }}>
          <Box sx={{ ...fileIcon }}>
            <label htmlFor="user-avatar-file">
              <Input accept="image/*" id="user-avatar-file" type="file" />
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
            alt={user.name}
            src={user.avatarUrl}
          >
            {user.name[0].toUpperCase()}
          </Avatar>
        </Box>

        <Box sx={{ ...details }}>
          <Box sx={{ ...inlineStyle }}>
            <TextField
              type="text"
              id="user-first-name"
              label="First Name"
              variant="outlined"
              sx={{ ...inputField, flex: 1 }}
            />
            <TextField
              type="text"
              id="user-last-name"
              label="Last Name"
              variant="outlined"
              sx={{ ...inputField, flex: 1 }}
            />
          </Box>

          <TextField
            type="email"
            id="user-email"
            label="Email"
            variant="outlined"
            sx={{ ...inputField }}
          />

          <Box sx={{ ...inlineStyle }}>
            <TextField
              type="number"
              id="user-contact-number"
              label="Contact Number"
              variant="outlined"
              sx={{ ...inputField, flex: 1 }}
            />

            <FormControl sx={{ ...inputField, flex: 1 }}>
              <InputLabel id="user-gender-label">Gender</InputLabel>
              <Select
                labelId="user-gender-label"
                id="user-gender"
                label="Gender"
                value={gender}
                onChange={handleGenderChange}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"transgender"}>Transgender</MenuItem>
                <MenuItem value={"prefer not to say"}>
                  Prefer Not To Say
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField
            type="text"
            id="user-address"
            label="Address"
            variant="outlined"
            sx={{ ...inputField, flex: 1 }}
          />

          <Box sx={{ ...inlineStyle }}>
            <TextField
              type="number"
              id="user-pinCode"
              label="Pin-Code"
              variant="outlined"
              sx={{ ...inputField, flex: 1 }}
            />

            <FormControl sx={{ ...inputField, flex: 1 }}>
              <InputLabel id="user-state-label">State</InputLabel>
              <Select
                labelId="user-state-label"
                id="user-state"
                label="State"
                value={state}
              >
                {states.map((state, index) => (
                  <MenuItem key={index} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>

        <LoadingButton
          variant="contained"
          loadingPosition="end"
          endIcon={<Update />}
          loading={loading}
          onClick={() => setLoading(true)}
        >
          Update
        </LoadingButton>
      </Box>
    )
  );
}
