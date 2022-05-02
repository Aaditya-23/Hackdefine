import { Autocomplete, TextField } from "@mui/material";
import { TextFieldStyles, AutocompleteStyles } from "./Styles";

export default function SearchBar() {
  const data = [
    { label: "sup F" },
    { label: "niga F" },
    { label: "Hitler" },
    { label: "Benz" },
    { label: "grills" },
  ];

  const styleTextField = TextFieldStyles();
  const styleAutocomplete = AutocompleteStyles();

  return (
    <Autocomplete
      classes={styleAutocomplete}
      sx={{ width: 300 }}
      id="search-bar"
      options={data}
      renderInput={(params) => (
        <TextField
          {...params}
          classes={styleTextField}
          label="Search for items..."
        />
      )}
    ></Autocomplete>
  );
}
