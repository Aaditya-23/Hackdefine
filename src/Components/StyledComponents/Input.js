import { TextField } from "@mui/material";
import { TextFieldStyles } from "./Styles";

export default function Input({ props }) {
  const styleTextField = TextFieldStyles();
  const { handleChange } = props;
  return (
    <TextField
      classes={styleTextField}
      required
      id={props.field}
      label={props.field}
      variant="outlined"
      color="success"
      name={props.field.replaceAll(" ", "")}
      type={props.type}
      onChange={(e) => handleChange(e)}
    />
  );
}
