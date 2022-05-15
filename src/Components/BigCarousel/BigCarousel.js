import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { actions, container, image, title, toLink, view } from "./Styles";
import sweaters from "../../Assets/Images/Sweaters.jpg";
import summers from "../../Assets/Images/Summers.jpg";
import shoes from "../../Assets/Images/Shoes.jpg";
import watch from "../../Assets/Images/Watch.jpg";
import { Link } from "react-router-dom";

export default function BigCarousel() {
  const data = [
    {
      img: sweaters,
      title: "Winter Collection",
    },
    {
      img: summers,
      title: "Summer Trends",
    },
    {
      img: shoes,
      title: "New Releases",
    },
    {
      img: watch,
      title: "New Releases",
    },
  ];

  useEffect(() => {
    const carousel = document.querySelector(".view");
    let mult = 0;

    const interval = setInterval(() => {
      const width = carousel.clientWidth;
      if (mult === width * 3) {
        mult = 0;
        carousel.style.transform = `translateX(${0}px)`;
      } else {
        carousel.style.transform = `translateX(-${width + mult}px)`;
        mult += width;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ ...container }}>
      <Box className="view" sx={{ ...view }}>
        {data.map((item, index) => {
          return (
            <Box
              component="div"
              key={index}
              sx={{ ...image, backgroundImage: `url(${item.img})` }}
            >
              <Box sx={{ ...actions }}>
                <Box fontSize={{ xs: "2em", sm: "3.5em" }} sx={{ ...title }}>
                  {item.title}
                </Box>
                <Box component={Link} to="#" sx={{ ...toLink }}>
                  Shop Now
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
