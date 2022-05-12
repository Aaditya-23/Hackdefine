export const CategoriesCard = {
  position: "relative",
  borderRadius: 3,
  overflow: "hidden",

  "& img": {
    borderRadius: 3,
    transition: "all 0.2s ease-in-out",
  },
};

export const Text = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backdropFilter: "blur(2px)",
  color: "white",
  textShadow: "1px 1px 1px white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.2s ease-in-out",
};
