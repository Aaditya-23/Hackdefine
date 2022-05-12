export const carousel = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2
};

export const scrollWindow = {
  width: { xs: 290, sm: "96vw" },
  display: "flex",
  gap: 5,
  overflowX: "scroll",
  "&::-webkit-scrollbar": { display: "none" },
  scrollBehavior: "smooth",
};
