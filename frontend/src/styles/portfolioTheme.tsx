import { createTheme, responsiveFontSizes } from "@mui/material";

export const portfolioTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#645452",
      },
      secondary: {
        main: "#9E9D24",
        // dark: "#8c0032",
        // light: "#e35183",
        // contrastText: "#fff",
      },
      action: {
        hover: "#9E9D24", // doesn't work for MUI button icon
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
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        "Noto Serif JP",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  })
);
