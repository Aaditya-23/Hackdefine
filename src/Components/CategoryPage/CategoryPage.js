import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ProductCard from "../ProductCard/ProductCard";
import { container } from "./Styles";
import { useSelector } from "react-redux";

export default function CategoryPage() {
  const { id } = useParams();

  const { Products } = useSelector((state) => state.products);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const temp = Products.filter((item) => {
      return item.category === id.slice(1);
    });

    setProducts(temp);
  }, [id, Products, wishlist]);

  return (
    <Box sx={{ ...container }}>
      <BreadCrumbs></BreadCrumbs>

      <Stack
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
      >
        {products.map((item, index) => {
          const isChecked = wishlist.includes(item._id);

          const prod = cart.filter((cartItem) => {
            if (cartItem._id === item._id) return true;

            return false;
          });

          return (
            <ProductCard
              key={index}
              props={{
                item,
                isChecked: isChecked,
                cartItem: prod[0] || { _id: null, quantity: 0 },
              }}
            />
          );
        })}
      </Stack>
    </Box>
  );
}
