import { Category } from "@mui/icons-material";
import { Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cardContainer, linkButton } from "./Styles";

export default function ToCategories() {
  return (
    <Paper elevate={5} sx={{ ...cardContainer }}>
      <Box
        component={motion.div}
        animate={{
          y: [0, 5],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeIn",
          type: "spring",
        }}
      >
        <Paper
          component={Link}
          to="/shop/categories"
          elevate={10}
          sx={{ ...linkButton }}
        >
          <Box component="div" sx={{ fontSize: { sm: "1.8em", lg: "2.2em" } }}>
            CATEGORIES
          </Box>

          <Category fontSize="large" />
        </Paper>
      </Box>
    </Paper>
  );
}
