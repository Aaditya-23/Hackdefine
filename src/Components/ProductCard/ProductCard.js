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
  Typography,
} from "@mui/material";
import { teal } from "@mui/material/colors";

import Imgix from "react-imgix";

export default function ProductCard({ props }) {
  const label = { inputProps: { "aria-label": "Add to wishlist" } };

  const { item } = props;

  const prodName =
    item.prod.slice(0, 20).trimEnd() + (item.prod.length > 20 ? " ..." : "");

  return (
    <Card
      elevation={3}
      sx={{
        width: 288,
        maxWidth: 288,
        minWidth: 288,
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Imgix src={item.url} height={144} />
        </Box>
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
        </CardContent>
      </CardActionArea>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          pt: 0,
          pb: 0,
        }}
      >
        <Rating precision={1} value={item.rating} size="small" />
        <Typography
          variant="span"
          component="span"
          sx={{ fontSize: 12, color: teal[600] }}
        >
          {item.rating}
        </Typography>
      </CardContent>

      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box>
          <Checkbox
            {...label}
            icon={<FavoriteBorder sx={{ color: teal[600] }} />}
            checkedIcon={<Favorite sx={{ color: teal[600] }} />}
          />
          <IconButton aria-label="share-link">
            <Share sx={{ color: teal[600] }} />
          </IconButton>
        </Box>
        <Button
          variant="contained"
          endIcon={<ShoppingCart />}
          sx={{
            bgcolor: teal[500],
            "&:hover": { bgcolor: teal[700] },
          }}
        >
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
