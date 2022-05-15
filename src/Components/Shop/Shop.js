import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ProductCard from "../ProductCard/ProductCard";
import { container, wrapper } from "./Styles";

export default function Shop() {
  const { Products } = useSelector((state) => state.products);

  return (
    <Box sx={{ ...container }}>
      <BreadCrumbs />

      <Box sx={{ ...wrapper }}>
        {Products.map((item, index) => {
          return <ProductCard key={index} props={{ item }} />;
        })}
      </Box>
    </Box>
  );
}
