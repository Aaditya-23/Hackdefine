import { Box, Typography } from "@mui/material";
import Imgix from "react-imgix";
import { Source } from "react-imgix";
import { Picture } from "react-imgix";
import { Link } from "react-router-dom";
import { CategoriesCard, Text } from "./Styles";

export default function CategoryCard({ props }) {
  const { hide } = props;

  const handleMouseOver = (e) => {
    const { parentid } = e.target.dataset;
    document.querySelector(`#${parentid} img`).classList.add("zoomIn");
    e.target.classList.add("sharpen");
  };

  const handleMouseOut = (e) => {
    const { parentid } = e.target.dataset;
    document.querySelector(`#${parentid} img`).classList.remove("zoomIn");
    e.target.classList.remove("sharpen");
  };

  return (
    <Box
      id={props.type}
      component={Link}
      to={`/shop/categories:${props.type}`}
      sx={{ ...CategoriesCard, ...hide }}
    >
      <Picture>
        <Source
          src={props.url}
          width={300}
          height={350}
          htmlAttributes={{ media: "(min-width: 900px)" }}
        />
        <Source
          src={props.url}
          width={250}
          height={350}
          htmlAttributes={{ media: "(min-width: 500px)" }}
        />
        <Imgix src={props.url} width={350} height={350} />
      </Picture>

      <Typography
        data-parentid={props.type}
        variant="h3"
        component="div"
        sx={{ ...Text }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {props.type}
      </Typography>
    </Box>
  );
}
