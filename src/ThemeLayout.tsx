import { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "./styles/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { useDarkMode } from "./ThemeHandler";

export const ThemeLayout = ({ children }: any) => {
  const { darkMode, setDarkMode } = useDarkMode();
  useEffect(() => {
    const theme = localStorage.getItem("preferred-theme");
    if (theme) {
      const themePreference = localStorage.getItem("preferred-theme");
      if (themePreference === "dark") {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    } else {
      localStorage.setItem("preferred-theme", "light");
      setDarkMode(false);
    }
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <main>{children}</main>
    </ThemeProvider>
  );
};
