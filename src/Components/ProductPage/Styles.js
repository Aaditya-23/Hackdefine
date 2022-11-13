export const container = {
  mt: 3,
  mb: 3,
  minWidth: "100vw",
  display: "flex",
  flexDirection: "column",
  gap: 4,
};

export const prodImg = {
  borderRadius: 2,
  "& img": {
    borderRadius: 2,
  },
};

export const details = {
  flex: 1,
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "space-between",
};

export const description = {
  height: "2.5in",
  width: "90%",
  pr: 1,
  textAlign: "justify",
  lineHeight: 2,
  letterSpacing: 1.2,
  fontSize: 18,
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: 5,
  },
  "&::-webkit-scrollbar-track": {
    borderRadius: 3,
    backgroundColor: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    height: 2,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 3,
  },
};

export const otherItems = {
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
