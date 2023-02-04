import * as React from "react";
import { Button, useTheme } from "@mui/material";

export default function MyApp() {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "grey",
        [theme.breakpoints.up("sm")]: {
          backgroundColor: "red"
        },
        [theme.breakpoints.up("md")]: {
          backgroundColor: "green"
        }
      }}
    >
      Hello World
    </Button>
  );
}
