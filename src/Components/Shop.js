import { Box } from "@mui/material";

import ProductCard from "./ProductCard/ProductCard"

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

  return (
    <Box sx={{ mt: 14, display: "flex", justifyContent: "center" }}>
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
            return <ProductCard key={index} props={{ item }} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}
