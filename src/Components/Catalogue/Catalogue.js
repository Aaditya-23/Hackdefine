import CategoryCard from "../CategoryCard/CategoryCard";
import ToCategories from "./ToCategories";
import { Box, Typography } from "@mui/material";
import { container, Text } from "./Styles";
import { useSelector } from "react-redux";

export default function Catalogue() {
  const { Categories } = useSelector((state) => state.products);

  return (
    Categories.length > 0 && (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" component="div" sx={{ ...Text }}>
          Catalogue
        </Typography>

        <Box
          mt={5}
          sx={{
            ...container,
          }}
        >
          <ToCategories />

          <CategoryCard
            props={{
              url: Categories[0].url,
              type: Categories[0].name,
              hide: {},
            }}
          />
          <CategoryCard
            props={{
              url: Categories[1].url,
              type: Categories[1].name,
              hide: {},
            }}
          />
          <CategoryCard
            props={{
              url: Categories[3].url,
              type: Categories[3].name,
              hide: { display: { xs: "none", lg: "block" } },
            }}
          />
        </Box>
      </Box>
    )
  );
}
