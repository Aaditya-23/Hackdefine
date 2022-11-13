import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { chargesWrapper, container, details } from "./Styles";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function UserCart() {
  const { Products } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const [cartItems, setCartItems] = useState([]);
  const [itemTotal, setItemTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    const temp = Products.filter((item) => {
      let quant = 0;
      let boolean = cart.some((prod) => {
        if (prod._id === item._id) {
          quant = prod.quantity;
          return true;
        }
        return false;
      });

      if (boolean) {
        total += item.price * quant;
        return true;
      }

      return false;
    });

    setItemTotal(total);
    setCartItems(temp);
  }, [wishlist, Products, cart]);

  return (
    <Box sx={{ ...container, mt: 1, mb: 1 }}>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={4}
        sx={{ minWidth: "98vw" }}
      >
        {cartItems.length > 0 && (
          <>
            <Stack
              spacing={2}
              sx={{
                height: { sm: "83vh" },
                overflowY: "scroll",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {cartItems.map((item, index) => {
                let isChecked = wishlist.includes(item._id);

                const prod = cart.filter((cartItem) => {
                  if (cartItem._id === item._id) return true;
                  return false;
                });

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
            </Stack>

            <Stack flex={1} spacing={4} p={1.5}>
              <Box sx={{ fontSize: { xs: 30, sm: 45 }, color: "white" }}>
                Order Summary
              </Box>

              <Stack spacing={2} sx={{ ...chargesWrapper }}>
                <Box sx={{ ...details }}>
                  <Box>Item Total</Box>
                  <Box>Rs. {itemTotal}</Box>
                </Box>
                <Divider sx={{ borderBottomWidth: 3, bgcolor: "#4B5A67" }} />
                <Box sx={{ ...details }}>
                  <Box>Shipping Charges</Box>
                  <Box>Rs. {100}</Box>
                </Box>
                <Divider sx={{ borderBottomWidth: 3, bgcolor: "#4B5A67" }} />
                <Box sx={{ ...details }}>
                  <Box>Total Ammount</Box>
                  <Box>Rs. {itemTotal + 100}</Box>
                </Box>
              </Stack>

              <Button sx={{ alignSelf: "flex-end" }} variant="contained">
                checkout
              </Button>
            </Stack>
          </>
        )}

        {cartItems.length === 0 && (
          <Box
            sx={{
              m: "auto",
              height: "83vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" component="h4" sx={{ color: "white" }}>
              Looks Like Your Cart Is Empty
            </Typography>
          </Box>
        )}
      </Stack>
    </Box>
  );
}
