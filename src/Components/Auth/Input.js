import { TextField } from "@mui/material";
import { inputField } from "./Styles";

export default function Input({ props }) {
  const { handleChange } = props;
  return (
    <TextField
      required
      id={props.field}
      label={props.field[0].toUpperCase() + props.field.slice(1)}
      variant="outlined"
      name={props.field.replaceAll(" ", "")}
      type={props.type}
      sx={{ ...inputField }}
      onChange={(e) => handleChange(e)}
    />
  );
}
