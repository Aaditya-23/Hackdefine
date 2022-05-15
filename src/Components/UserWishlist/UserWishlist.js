import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ProductCard from "../ProductCard/ProductCard";
import { container, wrapper } from "./Styles";

export default function UserWishlist() {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { Products } = useSelector((state) => state.products);
  const [wishlistedItems, setWishlistedItems] = useState([]);

  useEffect(() => {
    const temp = Products.filter((item) => {
      if (wishlist.includes(item._id)) return true;
      return false;
    });

    setWishlistedItems(temp);
  }, [wishlist, Products]);

  return (
    <Box sx={{ ...container }}>
      <BreadCrumbs />

      <Box sx={{ ...wrapper }}>
        {wishlistedItems.map((item, index) => {
          return <ProductCard key={index} props={{ item }} />;
        })}

        {wishlistedItems.length === 0 && (
          <Typography
            variant="h4"
            component="h4"
            sx={{ textTransform: "capitalize", color: "white" }}
          >
            looks like your wishlist is empty
          </Typography>
        )}
      </Box>
    </Box>
  );
}
