export const container = {};

export const text = {
  display: "flex",
  alignItems: "center",
  gap: 2,

  "&::before, &::after": {
    content: "''",
    height: 6,
    flex: 1,
    mt: 2,
    background: "linear-gradient(to left, #DEDEE4, transparent)",
    borderRadius: 2,
  },

  "::after": {
    background: "linear-gradient(to right, #DEDEE4, transparent)",
  },
};
