import { Box, Stack, Tooltip, Typography, Zoom } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { container } from "./Styles";

export default function Footer() {
  return (
    <Box sx={{ ...container }}>
      <Stack gap={2}>
        <Typography variant="p" component={Link} to="/shop">
          Shop
        </Typography>
        <Typography variant="p" component={Link} to="/shop/newreleases">
          New releases
        </Typography>
        <Typography variant="p" component={Link} to="/shop/categories">
          categories
        </Typography>
        <Typography variant="p" component={Link} to="#">
          orders
        </Typography>
      </Stack>

      <Stack gap={2}>
        <Typography variant="p" component={Link} to="#">
          Terms and conditions
        </Typography>

        <Stack direction="row" gap={2}>
          <Box
            onClick={() => {
              window.location.href = "https://github.com/Aaditya-23/Hackdefine";
            }}
          >
            <Tooltip
              title="Github"
              placement="bottom"
              TransitionComponent={Zoom}
            >
              <GitHub sx={{ color: "white" }} />
            </Tooltip>
          </Box>
          <Box
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/aaditya-verma-523069224";
            }}
          >
            <Tooltip
              title="Linked In"
              placement="bottom"
              TransitionComponent={Zoom}
            >
              <LinkedIn sx={{ color: "white" }} />
            </Tooltip>
          </Box>
        </Stack>

        <Typography variant="p" component="p">
          © By Nile
        </Typography>
      </Stack>
    </Box>
  );
}
