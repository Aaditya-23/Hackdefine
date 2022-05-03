import { TextField } from "@mui/material";
import { TextFieldStyles } from "./Styles";

export default function Input({ props }) {
  const styleTextField = TextFieldStyles();

  return (
    <TextField
      classes={styleTextField}
      required
      id={props.field}
      label={props.field}
      variant="outlined"
      color="success"
      type={props.type}
    />
  );
}
