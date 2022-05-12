export const FixedContainer = {
  mt: 1,
  width: "100vw",
  position: "fixed",
  bottom: 0,
  overflow: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

export const svgContainer = {
  width: { xs: "3.5in", sm: "7in" },
  bgcolor: "transparent",
};

export const navContainer = {
  mt: 1,
  "& .MuiPaper-root": {
    flex: 1,
  },
  gap: { xs: 1, sm: 2 },
};

export const navRoutes = {
  background: "transparent",
  color: "white",
  pt: 1.5,
  pb: 1.5,
  textAlign: "center",
};

export const newReleases = {
  display: "flex",
  gap: 2,
  alignItems: "center",
  "&::before, &::after": {
    content: "''",
    flex: 1,
    height: 6,
    mt: 0.5,
    background: "linear-gradient(to left, #DEDEE4, transparent)",
    borderRadius: 2,
  },
  "&::after": {
    background: "linear-gradient(to right, #DEDEE4, transparent)",
  },
};
