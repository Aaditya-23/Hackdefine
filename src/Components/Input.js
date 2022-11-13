import { TextField } from "@mui/material";

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
      sx={{
        flex: 1,
      }}
      onChange={(e) => handleChange(e)}
    />
  );
}
