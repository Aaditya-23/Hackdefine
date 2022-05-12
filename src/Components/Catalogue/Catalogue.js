import CategoryCard from "../CategoryCard/CategoryCard";
import ToCategories from "./ToCategories";
import { Box, Typography } from "@mui/material";
import { container, Text } from "./Styles";


export default function Catalogue() {
  return (
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
          props={{ url: "https://bit.ly/38eAEf7", type: "Shoes", hide: {} }}
        />
        <CategoryCard
          props={{ url: "https://bit.ly/37AeIKT", type: "Watches", hide: {} }}
        />
        <CategoryCard
          props={{
            url: "https://bit.ly/3N0geVQ",
            type: "Clothing",
            hide: { display: { xs: "none", lg: "block" } },
          }}
        />
      </Box>
    </Box>
  );
}
