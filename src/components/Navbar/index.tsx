import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDarkMode } from "../../ThemeHandler";
import { ThemeLayout } from "../../ThemeLayout";
import { darkTheme, lightTheme } from "../../styles/Theme";
import "./NavBar.css";

const pages = ["/", "portfolio", "resume", "getintouch"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [anchorElTheme, setAnchorElTheme] = React.useState<null | HTMLElement>(
    null
  );

  const { darkMode, setDarkMode } = useDarkMode();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleThemeMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElTheme(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseThemeMenu = () => {
    setAnchorElTheme(null);
  };

  const handleLightTheme = () => {
    localStorage.setItem("preferred-theme", "light");
    setDarkMode(false);
  };

  const handleDarkTheme = () => {
    localStorage.setItem("preferred-theme", "dark");
    setDarkMode(true);
  };

  const handlePageName = (page: string): string => {
    switch (page) {
      case "/":
        return "Home";
      case "getintouch":
        return "Get In Touch";
      default:
        return page;
    }
  };

  const themeOptions = [
    {
      title: "Light",
      icon: (
        <LightModeIcon
          style={{
            position: "relative",
            right: 5,
            width: 16,
            height: 16,
            color: "#2D3849",
          }}
        />
      ),
    },
    {
      title: "Dark",
      icon: (
        <DarkModeIcon
          style={{
            position: "relative",
            right: 5,
            width: 16,
            height: 16,
            color: "#2D3849",
          }}
        />
      ),
    },
  ];

  return (
    <ThemeLayout>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link
                        to={`${page}`}
                        style={{
                          textDecoration: "none",
                        }}>
                        {handlePageName(page)}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                color: darkMode
                  ? darkTheme.palette.secondary.main
                  : lightTheme.palette.secondary.main,
              }}>
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  <Link
                    to={`${page}`}
                    style={{
                      textDecoration: "none",
                      color: darkMode
                        ? darkTheme.palette.secondary.main
                        : lightTheme.palette.secondary.main,
                    }}>
                    {handlePageName(page)}
                  </Link>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Change theme">
                <IconButton
                  size="large"
                  aria-label="change mode"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleThemeMenu}
                  color="inherit">
                  {darkMode ? (
                    <DarkModeIcon style={{ width: 32, height: 32 }} />
                  ) : (
                    <LightModeIcon style={{ width: 32, height: 32 }} />
                  )}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElTheme}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElTheme)}
                onClose={handleCloseThemeMenu}>
                {themeOptions.map((theme, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      handleCloseThemeMenu();
                      index === 0 ? handleLightTheme() : handleDarkTheme();
                    }}>
                    {theme.icon}
                    <Typography textAlign="center">{theme.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeLayout>
  );
};

export default Navbar;
