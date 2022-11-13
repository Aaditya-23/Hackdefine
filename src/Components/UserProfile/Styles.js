export const container = {
  mt: 3,
  mb: 3,
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
  width: { xs: "90vw", sm: "auto" },
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

export const inputField = {
  "& .MuiInputLabel-root": { color: "white !important" },
  "& .MuiInput-root::before": { borderColor: "white !important" },
  "& .MuiInput-root::after": { borderColor: "white" },
  "& .MuiInput-root": { color: "white" },
  "& svg": { color: "black" },
};
