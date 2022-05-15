import { Box, Typography } from "@mui/material";
import BigCarousel from "../BigCarousel/BigCarousel";
import Carousel from "../Carousel/Carousel";
import Catalogue from "../Catalogue/Catalogue";
import SocialMedia from "../SocialMedia/SocialMedia";
import { Container, newReleases } from "./Styles";

export default function HomePage() {
  return (
    <Box sx={{ ...Container }}>
      <BigCarousel />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Typography variant="h5" component="div" sx={{ ...newReleases }}>
          New Releases
        </Typography>
        <Carousel />
      </Box>
      <Catalogue />
      <SocialMedia />
    </Box>
  );
}
