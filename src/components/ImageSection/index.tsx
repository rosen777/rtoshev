import Image from "react-bootstrap/Image";
import "./ImageSection.css";
import { darkTheme, lightTheme } from "../../styles/Theme";
import { useDarkMode } from "../../ThemeHandler";

type ImageSectionProps = {
  sectionDescription: string;
};

export const ImageSection = ({ sectionDescription }: ImageSectionProps) => {
  const { darkMode } = useDarkMode();

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
        {sectionDescription}
      </div>
    </div>
  );
};
