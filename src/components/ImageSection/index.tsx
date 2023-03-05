import Image from "react-bootstrap/Image";
import "./ImageSection.css";
import { ThemeLayout } from "../../ThemeLayout";
import { darkTheme, lightTheme } from "../../styles/Theme";
import { useDarkMode } from "../../ThemeHandler";

export const ImageSection = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div
      className="wrapper"
      style={{
        backgroundColor: darkMode
          ? darkTheme.palette.primary.main
          : lightTheme.palette.primary.main,
      }}>
      <div>
        <Image
          alt="section image"
          className="sectionImage"
          src={"/assets/slider_placeholder.jpg"}
        />
      </div>
      <div
        className="content"
        style={{
          textDecoration: "none",
          color: darkMode
            ? darkTheme.palette.secondary.main
            : lightTheme.palette.secondary.main,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipis
      </div>
    </div>
  );
};
