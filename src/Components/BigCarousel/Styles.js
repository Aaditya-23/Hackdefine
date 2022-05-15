export const container = {
  width: "100%",
  overflow: "hidden",
};

export const view = {
  width: "100%",
  height: "95vh",
  display: "flex",
  transition: "all 0.3s ease-out",
};

export const image = {
  position: "relative",
  height: "100%",
  minWidth: "100vw",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

export const actions = {
  height: "100%",
  position: "absolute",
  top: 150,
  right: { xs: 1, sm: 50 },
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export const title = {
  color: "white",
  borderRadius: 2,
};

export const toLink = {
  p: 1,
  bgcolor: "black",
  color: "white",
  borderRadius: 2,
  alignSelf: "flex-end",
};
