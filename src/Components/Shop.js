import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function Shop() {
  const data = [
    {
      url: "https://bit.ly/37UxxsC",
      prod: "shoes",
      price: "100",
    },
    {
      url: "https://bit.ly/37UxxsC",
      prod: "shoes",
      price: "100",
    },
    {
      url: "https://bit.ly/37UxxsC",
      prod: "shoes",
      price: "100",
    },
    {
      url: "https://bit.ly/37UxxsC",
      prod: "shoes",
      price: "100",
    },
    {
      url: "https://bit.ly/37UxxsC",
      prod: "shoes",
      price: "100",
    },
  ];

  return (
    <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "90%" }}>
        <ImageList sx={{ width: "100%", height: "100%" }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">Products</ListSubheader>
          </ImageListItem>
          {data.map((item, index) => (
            <Link to="/prod" key={index}>
              <ImageListItem >
                <img
                  src={`${item.url}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.prod}
                  loading="lazy"
                />
                <ImageListItemBar title={item.prod} subtitle={item.price} />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
