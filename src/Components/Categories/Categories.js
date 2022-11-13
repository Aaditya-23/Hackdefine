import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ToCategories from "../Catalogue/ToCategories";
import CategoryCard from "../CategoryCard/CategoryCard";
import { container, wrapper } from "./Styles";

export default function Categories() {
  const { Categories } = useSelector((state) => state.products);

  return (
    <Box sx={{ ...container }}>
      <BreadCrumbs />

      <Box sx={{ ...wrapper }}>
        <ToCategories />
        {Categories.map((item, index) => {
          return (
            <CategoryCard
              key={index}
              props={{ url: item.url, type: item.name, hide: {} }}
            />
          );
        })}
      </Box>
    </Box>
  );
}
