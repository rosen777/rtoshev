import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    action: true;
    accent: true;
  }
}

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
      light: "#ff6d91",
    },
  },
  typography: {
    body1: {
      main: "#fff",
      color: "#fff",
      backgroundColor: "#23272F",
    },
    body2: {
      main: "#fff",
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
    MuiCard: {
      variants: [
        {
          props: { variant: "elevation" },
          style: {
            backgroundColor: "#202020",
            color: "#fff",
            border: "4px solid #fff",
          },
        },
      ],
      styleOverrides: {
        root: {
          backgroundColor: "#23272F",
          color: "#fff",
          border: "4px solid #fff",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "action" },
          style: {
            backgroundColor: "#178593",
            color: "#fff",
            border: "4px solid #178593",
          },
        },
        {
          props: { variant: "accent" },
          style: {
            backgroundColor: "#fff",
            color: "#23272F",
            border: "4px solid #fff",
          },
        },
      ],
      styleOverrides: {
        root: {
          color: "#23272F",
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
      main: "#23272F",
      color: "#23272F",
      backgroundColor: "#fff",
    },
    body2: {
      main: "#23272F",
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
    MuiCard: {
      variants: [
        {
          props: { variant: "elevation" },
          style: {
            backgroundColor: "#fff",
            color: "#202020",
            border: "4px solid #202020",
          },
        },
      ],
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          color: "#202020",
          border: `4px solid #202020`,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "action" },
          style: {
            backgroundColor: "#178593",
            color: "#fff",
            border: "4px solid #178593",
          },
        },
        {
          props: { variant: "accent" },
          style: {
            backgroundColor: "#23272F",
            color: "#fff",
            border: "4px solid #23272F",
          },
        },
      ],
      styleOverrides: {
        root: {
          color: "#23272F",
        },
      },
    },
  },
});

export { darkTheme, lightTheme };
