import * as React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

export default function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs")); // between 0 and 600px
  const isTablet = useMediaQuery(theme.breakpoints.only("sm")); // between 600px and 900px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // above 900px

  return (
    <React.Fragment>
      {isMobile && <span>Hello Mobile</span>}
      {isTablet && <span>Hello Tablet</span>}
      {isDesktop && <span>Hello Desktop</span>}
    </React.Fragment>
  );
}
