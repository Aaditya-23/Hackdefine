import { Breadcrumbs, Link } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { NavigateNext } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function BreadCrumbs ({ props }) {
  const [paths, setPaths] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const temp = pathname.split("/");
    temp.shift();

    if (temp[temp.length - 1].split(":").length > 1) {
      const spread = temp[temp.length - 1].split(":");

      temp.pop();
      temp.push(spread[0]);
      temp.push(spread[1]);
    }

    setPaths(temp);
  }, [pathname]);

  return (
    <Breadcrumbs
      alignSelf="flex-start"
      ml={2}
      maxItems={2}
      separator={<NavigateNext />}
      aria-label="breadcrumb"
    >
      {paths.map((path, index) => {
        return (
          <Link
            key={index}
            underline="hover"
            color={index === paths.length - 1 ? "#3498DB" : "#C39BD3"}
            component={RouterLink}
            to={
              index === paths.length - 1
                ? "#"
                : "/" + paths.slice(0, index + 1).join("/")
            }
            textTransform="capitalize"
          >
            {path}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
