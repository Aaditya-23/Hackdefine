export const container = {
  mt: 3,
  minWidth: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
};

export const userAvatar = {
  position: "relative",
};

export const fileIcon = {
  position: "absolute",
  height: "100%",
  width: "100%",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  bgcolor: "black",
  borderRadius: "50%",
  opacity: 0,
  transition: "opacity 0.2s ease-out",
  "&:hover": {
    opacity: 1,
  },
};

export const details = {
  minWidth: "50vw",
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export const inlineStyle = {
  display: "flex",
  gap: 3,
};

export const inputField = {
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "hsl(37, 90%, 61%)",
    borderWidth: "1.8px",
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "hsl(37, 90%, 41%)",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "hsl(37, 90%, 41%)",
  },
  "& .MuiOutlinedInput-input": {
    color: "hsl(37, 90%, 61%)",
  },
  "&:hover .MuiOutlinedInput-input": {
    color: "hsl(37, 90%, 41%)",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
    color: "hsl(37, 90%, 41%)",
  },
  "& .MuiInputLabel-outlined": {
    color: "hsl(37, 90%, 61%)",
  },
  "&:hover .MuiInputLabel-outlined": {
    color: "hsl(37, 90%, 61%)",
  },
  "& .MuiInputLabel-outlined.Mui-focused": {
    color: "hsl(37, 90%, 61%)",
  },
};
