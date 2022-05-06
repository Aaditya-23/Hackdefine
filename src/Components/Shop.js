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
  Divider,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { indigo, pink, red, teal } from "@mui/material/colors";
import { useState } from "react";

import Imgix from "react-imgix";

export default function Shop() {
  const data = [
    {
      url: "https://bit.ly/37UxxsC",
      prod: "shoes",
      price: "100",
      rating: 3,
    },
    {
      url: "https://bit.ly/3LzzHMJ",
      prod: "Neeman's Ivory Cream Sneakers",
      price: "2999",
      rating: 51423,
    },
    {
      url: "https://bit.ly/3LBzxEy",
      prod: "Timex Water Resistant Watch",
      price: "12000",
      rating: 41142,
    },
    {
      url: "https://bit.ly/3kGYySN",
      prod: "Black Stainless Steel Police Watches ",
      price: "7800",
      rating: 3,
    },
  ];

  const label = { inputProps: { "aria-label": "Add to wishlist" } };

  return (
    <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "90%" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 5,
            pb: 1,
          }}
        >
          {data.map((item, index) => {
            const prodName =
              item.prod.slice(0, 20).trimEnd() +
              (item.prod.length > 20 ? " ..." : "");
            return (
              <Card
                key={index}
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
                    onChange
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
          })}
        </Box>
      </Box>
    </Box>
  );
}
