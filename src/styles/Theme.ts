import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  typography: {
    fontFamily: "Roboto",
    fontSize: 18,
  },
  spacing: [0, 4, 8, 16, 32, 64],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: "#23272F",
    },
    secondary: {
      main: "#fff",
    },
    info: {
      main: "#008593",
      dark: "#ff6d91",
    },
  },
  typography: {
    body1: {
      color: "#fff",
      backgroundColor: "#23272F",
    },
  },
  components: {
    // Name of the component
    MuiList: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "#23272F",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "#23272F",
        },
      },
    },
  },
});

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#23272F",
    },
    background: {
      default: "#fff",
    },
    info: {
      main: "#2d3849",
      dark: "#2d3849",
    },
  },
  typography: {
    body1: {
      color: "#23272F",
      backgroundColor: "#fff",
    },
  },
  components: {
    // Name of the component
    MuiList: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "#fff",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "#fff",
        },
      },
    },
  },
});

export { darkTheme, lightTheme };
