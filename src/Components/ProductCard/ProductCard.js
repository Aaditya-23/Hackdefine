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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateWishlist } from "../../Features/WishlistSlice";

export default function ProductCard({ props }) {
  const label = { inputProps: { "aria-label": "Add to wishlist" } };

  const { item } = props;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.wishlist);

  const prodName =
    item.productName.slice(0, 20).trimEnd() +
    (item.productName.length > 20 ? " ..." : "");

  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    const { productid } = e.target.dataset;
    dispatch(updateWishlist(productid));
  };

  useEffect(() => {
    if (state.wishlist.includes(item._id)) {
      setChecked(true);
    } else setChecked(false);
  }, [state, item._id]);

  return (
    <Card
      elevation={3}
      sx={{
        width: 288,
        maxWidth: 288,
        minWidth: 288,
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
            title={checked ? "Remove From Wishlist" : "Add To Wishlist"}
            TransitionComponent={Zoom}
            placement="bottom"
          >
            <Checkbox
              {...label}
              icon={<FavoriteBorder sx={{ color: "#D81B60" }} />}
              checkedIcon={<Favorite sx={{ color: "#E91E63" }} />}
              checked={checked}
              onChange={handleChange}
              inputProps={{
                "data-productid": `${item._id}`,
              }}
            />
          </Tooltip>
          <Tooltip
            title="Share link"
            TransitionComponent={Zoom}
            placement="bottom"
          >
            <IconButton aria-label="share-link">
              <Share sx={{ color: "white" }} />
            </IconButton>
          </Tooltip>
        </Box>
        <Button
          variant="contained"
          endIcon={<ShoppingCart />}
          sx={{
            bgcolor: "#4B5A67",
            "&:hover": { bgcolor: teal[700] },
          }}
        >
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
