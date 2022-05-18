import {
  Favorite,
  FavoriteBorder,
  Share,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Checkbox,
  IconButton,
  Rating,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateWishlist } from "../../Features/WishlistSlice";
import { updateCart } from "../../Features/CartSlice";
import ItemCount from "../ItemCount/ItemCount";
import Toast from "../Toast/Toast";
import { useState } from "react";

export default function ProductCard({ props }) {
  const label = { inputProps: { "aria-label": "Add to wishlist" } };

  const { item, isChecked, cartItem } = props;
  const dispatch = useDispatch();

  const [flash, setFlash] = useState({ open: false, message: "" });
  const handleClose = () => {
    setFlash({ ...flash, open: false });
  };

  const prodName =
    item.productName.slice(0, 20).trimEnd() +
    (item.productName.length > 20 ? " ..." : "");

  return (
    <>
      <Card
        elevation={3}
        sx={{
          width: 288,
          maxWidth: 288,
          minWidth: 288,
          minHeight: 319.2,
          bgcolor: "black",
          color: "white",
        }}
      >
        <CardActionArea component={Link} to={`/shop:${item._id}`}>
          <Box
            sx={{
              height: 144,
              width: 288,
              bgcolor: "white",
              display: "flex",
              justifyContent: "center",
              background: `url(${item.url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              sx={{ textTransform: "capitalize", mb: 1 }}
            >
              {prodName}
            </Typography>
            <Typography variant="p" component="div" mb={1}>
              Rs. {item.price}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Rating
                name="product-rating"
                value={item.rating}
                size="small"
                readOnly
                sx={{ ml: -0.4 }}
              />
              <Box component="span" sx={{ fontSize: 12 }}>
                {item.rating}
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>

        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Tooltip
              title={isChecked ? "Remove From Wishlist" : "Add To Wishlist"}
              TransitionComponent={Zoom}
              placement="bottom"
            >
              <Checkbox
                {...label}
                icon={<FavoriteBorder sx={{ color: "#D81B60" }} />}
                checkedIcon={<Favorite sx={{ color: "#E91E63" }} />}
                checked={isChecked}
                onClick={() => {
                  dispatch(updateWishlist(item._id));
                }}
              />
            </Tooltip>
            <Tooltip
              title="Share link"
              TransitionComponent={Zoom}
              placement="bottom"
            >
              <IconButton
                aria-label="share-link"
                onClick={() => {
                  const url =
                    "https://" + window.location.host + `/shop:${item._id}`;
                  navigator.clipboard.writeText(url);
                  setFlash({
                    open: true,
                    message: "Link Copied to Clipboard",
                  });
                }}
              >
                <Share sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Box>
          {(cartItem.quantity > 0 && (
            <ItemCount
              props={{ count: cartItem.quantity, _id: cartItem._id }}
            />
          )) || (
            <Button
              variant="contained"
              endIcon={<ShoppingCart />}
              sx={{
                bgcolor: "#4B5A67",
                "&:hover": { bgcolor: teal[700] },
              }}
              onClick={() => {
                const { _id } = item;
                dispatch(updateCart({ _id, quantity: 1 }));
              }}
            >
              add to cart
            </Button>
          )}
        </CardActions>
      </Card>
      <Toast props={{ flash, handleClose, type: "success" }} />
    </>
  );
}
