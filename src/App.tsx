import * as React from "react";
import { Button, useMediaQuery, useTheme } from "@mui/material";

export default function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("xs")); // 600
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Button variant="contained">
      {isMobile && <span>Hello Mobile</span>}
      {isTablet && <span>Hello Tablet</span>}
      {isDesktop && <span>Hello Desktop</span>}
    </Button>
  );
}
