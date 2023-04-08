import { createTheme } from "@mui/material";

export const portfolioTheme = createTheme({
  palette: {
    primary: {
      main: "#645452",
    },
    secondary: {
      main: "#9E9D24",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontsize: "1.5rem",
        },
      },
    },
  },
});
