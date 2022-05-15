import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ProductCard from "../ProductCard/ProductCard";
import { container, wrapper } from "./Styles";

export default function NewReleases() {
  const { newReleases } = useSelector((state) => state.products);

  return (
    <Box sx={{ ...container }}>
      <BreadCrumbs />

      <Box sx={{ ...wrapper }}>
        {newReleases.map((item, index) => {
          return <ProductCard key={index} props={{ item }} />;
        })}
      </Box>
    </Box>
  );
}
