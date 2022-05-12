import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { carousel, scrollWindow } from "./Styles";
import ProductCard from "../ProductCard/ProductCard";

export default function Carousel() {
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
    {
      url: "https://bit.ly/3vZvw7r",
      prod: "Calvin Klein Men's T-shirt",
      price: "5000",
      rating: 34,
    },
    {
      url: "https://swoo.sh/3L04b9A",
      prod: "Jordan Max Aura 3",
      price: "6495",
      rating: 3,
    },
  ];

  return (
    <Box sx={{ ...carousel }}>
      <Box className="scrollWindow" sx={{ ...scrollWindow }}>
        {data.map((item, index) => {
          return <ProductCard key={index} props={{ item }} />;
        })}
      </Box>

      <Box
        sx={{
          alignSelf: "center",
          display: "flex",
          justifyContent: "space-between",
          gap: 3,
          width: { xs: 290, sm: "96vw" },
        }}
      >
        <Paper
          elevation={4}
          sx={{
            bgcolor: "transparent",
            borderRadius: "50%",
          }}
          onClick={() => {
            const gap = parseInt(
              window
                .getComputedStyle(document.querySelector(".scrollWindow"))
                .getPropertyValue("gap")
                .slice(0, 2)
            );
            document.querySelector(".scrollWindow").scrollBy(-288 - gap, 0);
          }}
        >
          <IconButton>
            <ArrowBackIos sx={{ color: "white", fontSize: "large" }} />
          </IconButton>
        </Paper>

        <Paper
          elevation={4}
          sx={{
            bgcolor: "transparent",
            borderRadius: "50%",
          }}
          onClick={() => {
            const gap = parseInt(
              window
                .getComputedStyle(document.querySelector(".scrollWindow"))
                .getPropertyValue("gap")
                .slice(0, 2)
            );
            document.querySelector(".scrollWindow").scrollBy(288 + gap, 0);
          }}
        >
          <IconButton>
            <ArrowForwardIos sx={{ color: "white", fontSize: "large" }} />
          </IconButton>
        </Paper>
      </Box>
    </Box>
  );
}
