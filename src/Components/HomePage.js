import { Box, Stack, Typography } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  customBox,
  customText,
  smallText,
  navRoutes,
  homePage,
} from "./StyledComponents/Styles";
import Carousel from "./Carousel";

export default function HomePage() {
  const [pageheight, setPageheight] = useState(0);

  function reportPageHeight() {
    const navbar = document.querySelector(".Navbar");
    setPageheight(window.innerHeight - navbar.offsetHeight - 15);
  }

  useEffect(() => {
    reportPageHeight();
    window.addEventListener("resize", reportPageHeight);

    return () => {
      window.removeEventListener("resize", reportPageHeight);
    };
  }, []);

  return (
    <Box
      className="homePage"
      sx={{
        height: `${pageheight}px`,
        ...homePage,
      }}
    >
      <Box sx={{ ...customBox, pt: 3, pb: 5 }}>
        <Typography sx={{ ...customText }}>ONE - OF - A - KIND</Typography>
        <Typography sx={{ ...customText, ml: -1 }}>ITEMS</Typography>
        <Typography
          sx={{
            ...smallText,
          }}
        >
          Easy, Fun Shopping
        </Typography>

        <Stack direction="row" spacing={{ xs: 3, sm: 6 }} sx={{ ...navRoutes }}>
          <Typography variant="p" component="p">
            <Link to="/">Home</Link>
          </Typography>
          <Typography variant="p" component="p">
            <Link to="/shop">Shop</Link>
          </Typography>
          <Typography variant="p" component="p">
            <Link to="/newcollection">New Collection</Link>
          </Typography>
          <Typography variant="p" component="p">
            <Link to="/products">Product</Link>
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ ...customBox }}>
        <Carousel />

        <Typography sx={{ ...customText }}>About Us</Typography>
        <Typography sx={{ ...smallText }}>The Way It Should Be</Typography>
        <Typography
          sx={{
            width: { xs: "100%", sm: "60%" },
            color: teal[600],
            textAlign: "center",
            fontSize: "0.9rem",
            fontWeight: 300,
            lineHeight: "1.5rem",
          }}
        >
          We founded hackdefine with one goal in mind: providing a high-quality,
          smart, and reliable online store. Our passion for excellence has
          driven us from the beginning, and continues to drive us into the
          future. We know that every product counts, and strive to make the
          entire shopping experience as rewarding as possible. Check it out for
          yourself!
        </Typography>

        <Box
          sx={{
            mt: 3,
            bgcolor: teal[700],
            width: "100%",
            height: { xs: "5in", sm: "4in" },
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: "1rem",
              color: "white",
            }}
          >
            <Typography sx={{ fontSize: "1.5rem" }}>GET IN TOUCH</Typography>
            <Typography>
              500 Terry Francois Street San Francisco, CA 94158
            </Typography>
            <Typography>aaditya220055@gmail.com</Typography>
            <Typography>123-456-7890</Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <LinkedIn />
              <GitHub />
              <Twitter />
            </Box>
          </Box>

          <Box className="officeBackground" sx={{ flex: 1 }}></Box>
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "center", gap: "20px", mt: 4 }}
        >
          <LinkedIn sx={{ color: "black" }} />
          <GitHub sx={{ color: "black" }} />
          <Twitter sx={{ color: "black" }} />
        </Box>

        <Typography
          variant="p"
          component="p"
          sx={{ color: teal[600], mt: 1, mb: 2 }}
        >
          ©2022 by hackdefine
        </Typography>
      </Box>
    </Box>
  );
}
