import { makeStyles } from "@material-ui/core";
import { Autocomplete, TextField } from "@mui/material";
import { inputField } from "./Styles";

const AutocompleteStyles = makeStyles((theme) => ({
  endAdornment: {
    display: "none",
  },
}));

export default function SearchBar() {
  const data = [
    { label: "sup " },
    { label: "nigga " },
    { label: "Hitler" },
    { label: "Benz" },
    { label: "grills" },
  ];

  const StyleAutocomplete = AutocompleteStyles();

  return (
    <Autocomplete
      classes={StyleAutocomplete}
      sx={{ width: 300 }}
      // id="search-bar"
      options={data}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{ ...inputField }}
          label="Search for items..."
        />
      )}
    ></Autocomplete>
  );
}
