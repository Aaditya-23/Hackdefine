import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ProductCard from "../ProductCard/ProductCard";
import { container, wrapper } from "./Styles";

export default function NewReleases() {
  const { newReleases } = useSelector((state) => state.products);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);

  return (
    <Box sx={{ ...container }}>
      <BreadCrumbs />

      <Box sx={{ ...wrapper }}>
        {newReleases.map((item, index) => {
          let isChecked = false;

          const prod = cart.filter((cartItem) => {
            if (cartItem._id === item._id) return true;

            return false;
          });

          if (wishlist.includes(item._id)) isChecked = true;

          return (
            <ProductCard
              key={index}
              props={{
                item,
                isChecked,
                cartItem: prod[0] || { _id: null, quantity: 0 },
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
}
