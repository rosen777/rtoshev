import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  typography: {
    fontFamily: "Roboto",
    fontSize: 14,
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: "#23272F",
    },
    secondary: {
      main: "#fafafa",
    },
  },
});

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: "#fafafa",
    },
    secondary: {
      main: "#23272F",
    },
  },
});

export { darkTheme, lightTheme };
