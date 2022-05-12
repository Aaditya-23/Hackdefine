import { Box, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import Catalogue from "../Catalogue/Catalogue";
import {
  FixedContainer,
  navContainer,
  navRoutes,
  newReleases,
  svgContainer,
} from "./Styles";

export default function HomePage() {
  const [NavHeight, setNavHeight] = useState(0);

  const reportHeight = () => {
    const height = document.querySelector(".Navbar").clientHeight;
    setNavHeight(height);
  };

  const variants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
    },
  };

  const transition = {
    duration: 4,
    ease: "easeOut",
  };

  useEffect(() => {
    reportHeight();
    window.addEventListener("resize", reportHeight);

    return () => {
      window.removeEventListener("resize", reportHeight);
    };
  }, []);

  return (
    <Box sx={{ ...FixedContainer, top: NavHeight }}>
      <Box sx={{ alignSelf: "end", mr: { xs: 2, sm: 5 }, mt: 5 }}>
        <Paper elevation={12} sx={{ ...svgContainer }} component={motion.div}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.1 42.4">
            <g>
              <motion.path
                d="M16.2,9.2v25.7h-3.5l-7-21.3v19.6c0,0.5-0.1,0.9-0.4,1.2c-0.3,0.3-0.6,0.5-0.9,0.5s-0.7-0.2-0.9-0.5
		c-0.3-0.3-0.4-0.7-0.4-1.2V7.4h3.4l7,21.3V9.2c0-0.5,0.1-0.9,0.4-1.3c0.3-0.4,0.6-0.5,0.9-0.5s0.7,0.2,0.9,0.5
		C16.1,8.3,16.2,8.7,16.2,9.2z"
                fill="transparent"
                strokeWidth="0.7"
                stroke="white"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ ...transition }}
              />
              <motion.path
                d="M23.5,7.4h10.5c0.3,0,0.6,0.2,0.9,0.5c0.3,0.3,0.4,0.8,0.4,1.2c0,0.5-0.1,0.9-0.4,1.2c-0.3,0.4-0.6,0.5-0.9,0.5H30v20.5
		h3.9c0.4,0,0.7,0.2,0.9,0.5c0.3,0.3,0.4,0.7,0.4,1.2s-0.1,0.9-0.4,1.2c-0.3,0.3-0.6,0.5-0.9,0.5H23.5c-0.4,0-0.7-0.2-0.9-0.5
		c-0.3-0.3-0.4-0.7-0.4-1.2s0.1-0.9,0.4-1.2c0.3-0.3,0.6-0.5,0.9-0.5h4V10.9h-4c-0.4,0-0.7-0.2-0.9-0.5c-0.3-0.3-0.4-0.8-0.4-1.2
		c0-0.5,0.1-0.9,0.4-1.3C22.8,7.6,23.1,7.4,23.5,7.4z"
                fill="transparent"
                strokeWidth="0.7"
                stroke="#181316"
                initial={{ pathLength: 0, scale: 1 }}
                animate={{ pathLength: 1, scale: 1.1 }}
                transition={{
                  ...transition,
                  delay: 0.5,
                }}
              />
              <motion.path
                d="M41.2,34.9V9.2c0-0.5,0.1-0.9,0.4-1.2c0.3-0.3,0.6-0.5,0.9-0.5s0.7,0.2,0.9,0.5c0.3,0.3,0.4,0.8,0.4,1.2v22.3H53
		c0.4,0,0.7,0.2,0.9,0.5s0.4,0.7,0.4,1.2s-0.1,0.9-0.4,1.2c-0.3,0.3-0.6,0.5-0.9,0.5H41.2z"
                fill="transparent"
                strokeWidth="0.7"
                stroke="white"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ ...transition, delay: 0.3 }}
              />
              <motion.path
                d="M72,10.9h-9.1v8.5h3.9c0.3,0,0.7,0.2,0.9,0.5c0.3,0.3,0.4,0.8,0.4,1.2c0,0.5-0.1,0.9-0.4,1.3c-0.3,0.3-0.6,0.5-0.9,0.5
		h-3.9v8.5H72c0.3,0,0.7,0.2,0.9,0.5c0.3,0.3,0.4,0.7,0.4,1.2s-0.1,0.9-0.4,1.2c-0.3,0.3-0.6,0.5-0.9,0.5H60.3V7.4H72
		c0.4,0,0.7,0.2,0.9,0.5c0.3,0.4,0.4,0.8,0.4,1.3c0,0.5-0.1,0.9-0.4,1.2C72.6,10.8,72.3,10.9,72,10.9z"
                fill="transparent"
                strokeWidth="0.7"
                stroke="white"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ ...transition, delay: 0.7 }}
              />
            </g>
          </svg>
        </Paper>

        <Stack
          sx={{ ...navContainer }}
          direction="row"
          justifyContent="space-between"
        >
          <Paper
            elevation={5}
            sx={{ ...navRoutes }}
            component={Link}
            to="/shop"
          >
            Shop
          </Paper>
          <Paper
            elevation={5}
            sx={{ ...navRoutes }}
            component={Link}
            to="/categories"
          >
            Categories
          </Paper>
          <Paper
            elevation={5}
            sx={{ ...navRoutes }}
            component={Link}
            to="/newreleases"
          >
            New Releases
          </Paper>
        </Stack>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Typography variant="h5" component="div" sx={{ ...newReleases }}>
          New Releases
        </Typography>
        <Carousel />
      </Box>
      <Catalogue />
    </Box>
  );
}
