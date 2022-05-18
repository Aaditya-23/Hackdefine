import { AddRounded, RemoveRounded } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../../Features/CartSlice";

export default function ItemCount({ props }) {
  const { count, _id } = props;
  const dispatch = useDispatch();

  const [Value, setValue] = useState(count);

  const handleClick = (val) => {
    const newValue = Value + val;
    setValue(newValue);
    dispatch(updateCart({ _id, quantity: newValue }));
  };

  return (
    <Stack direction="row" alignItems="center">
      <IconButton
        disabled={Value === 5 ? true : false}
        size="small"
        onClick={() => {
          handleClick(1);
        }}
      >
        <AddRounded fontSize="inherit" sx={{ color: "white" }} />
      </IconButton>

      <Typography variant="span" component="span">
        {Value}
      </Typography>

      <IconButton
        disabled={Value === 0 ? true : false}
        size="small"
        onClick={() => {
          handleClick(-1);
        }}
      >
        <RemoveRounded fontSize="inherit" sx={{ color: "white" }} />
      </IconButton>
    </Stack>
  );
}
