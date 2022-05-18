import {
  Box,
  Button,
  Checkbox,
  Rating,
  Stack,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { container, description, details, otherItems, prodImg } from "./Styles";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Imgix from "react-imgix";
import { Picture, Source } from "react-imgix";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Favorite, FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import { updateWishlist } from "../../Features/WishlistSlice";
import { updateCart } from "../../Features/CartSlice";
import ItemCount from "../ItemCount/ItemCount";
import { teal } from "@mui/material/colors";
import Carousel from "../Carousel/Carousel";

export default function ProductPage() {
  const label = { inputProps: { "aria-label": "Add to wishlist" } };

  const location = useLocation();
  const dispatch = useDispatch();

  const { Products } = useSelector((state) => state.products);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);

  const [product, setProduct] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [cartItem, setCartItem] = useState({ _id: null, quantity: 0 });

  useEffect(() => {
    let item = cart.filter((item) => {
      if (item._id === product?._id) return true;

      return false;
    });

    item = item.length === 0 ? { _id: null, quantity: 0 } : item[0];
    setCartItem(item);
  }, [cart, location, product]);

  useEffect(() => {
    const id = location.pathname.split(":")[1];

    for (const item of Products) {
      if (item._id === id) {
        setProduct(item);
        setIsChecked(wishlist.includes(item._id));
        break;
      }
    }
  }, [Products, location, wishlist]);

  return (
    product && (
      <Box sx={{ ...container }}>
        <BreadCrumbs></BreadCrumbs>

        <Stack
          p={1.5}
          flexDirection={{ xs: "column", md: "row" }}
          gap={3}
          justifyContent="center"
        >
          <Box sx={{ ...prodImg, alignSelf: "center" }}>
            <Picture>
              <Source
                src={product.url}
                width={480}
                height={480}
                htmlAttributes={{ media: "(min-width: 1100px)" }}
              />
              <Source
                src={product.url}
                width={400}
                height={400}
                htmlAttributes={{ media: "(min-width: 600px)" }}
              />
              <Imgix src={product.url} width={350} height={350} />
            </Picture>
          </Box>

          <Box sx={{ ...details }}>
            <Stack spacing={3}>
              <Typography variant="h3" component="h3">
                {product.productName}
              </Typography>

              <Stack flexDirection="row">
                <Tooltip
                  title={isChecked ? "Remove From Wishlist" : "Add To Wishlist"}
                  TransitionComponent={Zoom}
                  placement="bottom"
                >
                  <Checkbox
                    size="large"
                    {...label}
                    icon={<FavoriteBorder sx={{ color: "#D81B60" }} />}
                    checkedIcon={<Favorite sx={{ color: "#E91E63" }} />}
                    checked={isChecked}
                    onClick={() => {
                      dispatch(updateWishlist(product._id));
                    }}
                  />
                </Tooltip>

                {(cartItem.quantity > 0 && (
                  <ItemCount
                    props={{ count: cartItem.quantity, _id: cartItem._id }}
                  />
                )) || (
                  <Button
                    variant="contained"
                    endIcon={<ShoppingCart />}
                    sx={{
                      bgcolor: teal[600],
                      "&:hover": { bgcolor: teal[700] },
                    }}
                    onClick={() => {
                      const { _id } = product;
                      dispatch(updateCart({ _id, quantity: 1 }));
                    }}
                  >
                    add to cart
                  </Button>
                )}
              </Stack>

              <Typography variant="p" component="p">
                Rs. {product.price}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Rating size="small" value={product.rating} readOnly />
                <Box fontSize={12}>{product.rating}</Box>
              </Stack>
            </Stack>

            <Box sx={{ ...description }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              congue, purus ut pellentesque congue, est enim imperdiet urna, vel
              sodales mi quam in nibh. Cras tristique sem viverra eros cursus,
              eget mattis erat consectetur. Aliquam porttitor nec elit tristique
              convallis. Nam laoreet nulla vitae tempus interdum. Maecenas
              aliquet neque vel massa accumsan, quis suscipit risus tempus. Nunc
              porta aliquet dui et mattis. Nullam posuere tellus ut neque
              tincidunt venenatis. Morbi odio eros, vestibulum quis bibendum
              vel, semper vel metus. In tempus pulvinar velit, sit amet semper
              felis imperdiet vitae. Nam sed sagittis enim. Donec iaculis ligula
              ut malesuada tempus. Mauris commodo, diam vel aliquet
              pellentesque, tellus ipsum finibus metus, ac vestibulum velit ante
              eu nisl. Aliquam congue suscipit purus, in elementum est aliquam
              nec. Nam pharetra elit at hendrerit scelerisque. Nullam posuere ut
              sem ultrices vulputate. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque congue, purus ut pellentesque congue, est
              enim imperdiet urna, vel sodales mi quam in nibh. Cras tristique
              sem viverra eros cursus, eget mattis erat consectetur. Aliquam
              porttitor nec elit tristique convallis. Nam laoreet nulla vitae
              tempus interdum. Maecenas aliquet neque vel massa accumsan, quis
              suscipit risus tempus. Nunc porta aliquet dui et mattis. Nullam
              posuere tellus ut neque tincidunt venenatis. Morbi odio eros,
              vestibulum quis bibendum vel, semper vel metus. In tempus pulvinar
              velit, sit amet semper felis imperdiet vitae. Nam sed sagittis
              enim. Donec iaculis ligula ut malesuada tempus. Mauris commodo,
              diam vel aliquet pellentesque, tellus ipsum finibus metus, ac
              vestibulum velit ante eu nisl. Aliquam congue suscipit purus, in
              elementum est aliquam nec. Nam pharetra elit at hendrerit
              scelerisque. Nullam posuere ut sem ultrices vulputate.
            </Box>
          </Box>
        </Stack>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <Typography variant="h5" component="div" sx={{ ...otherItems }}>
            Users Also Bought
          </Typography>
          <Carousel />
        </Box>
      </Box>
    )
  );
}
