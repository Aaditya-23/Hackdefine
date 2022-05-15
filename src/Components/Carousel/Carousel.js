import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, IconButton, Paper } from "@mui/material";
import { carousel, scrollWindow } from "./Styles";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";

export default function Carousel() {
  const { newReleases } = useSelector((state) => state.products);

  return (
    <Box sx={{ ...carousel }}>
      <Box className="scrollWindow" sx={{ ...scrollWindow }}>
        {newReleases.map((item, index) => {
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
