export const Text = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  "&::before, &::after": {
    content: "''",
    height: 6,
    width: "3vw",
    mt: 0.5,
    borderRadius: 2,
    background: "linear-gradient(to left, #DEDEE4, transparent)",
  },
  "&::after": {
    background: "linear-gradient(to right, #DEDEE4, transparent)",
    flex: 1,
  },
};

export const container = {
  alignSelf: "center",
  width: "98vw",
  display: "flex",
  justifyContent: "space-between",
  gap: 2,
  mb: 2,
  overflow: "hidden",
};

export const cardContainer = {
  boxSizing: "border-box",
  p: 1,
  width: { sm: 250, md: 300 },
  height: 350,
  backgroundColor: "hsl(120, 1%, 10%)",
  color: "white",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  overflow: "hidden",
};

export const linkButton = {
  py: 3,
  pl: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
  bgcolor: "hsl(120, 1%, 16%)",
  color: "#F5B041",
  borderRadius: 3,
};
