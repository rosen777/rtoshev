import React, { useState, useEffect, MouseEventHandler } from "react";
import Image from "react-bootstrap/Image";
import "./Thumbnail.css";
import { useDarkMode } from "../../ThemeHandler";
import { darkTheme, lightTheme } from "../../styles/Theme";

type ThumbnailProps = {
  imageUrl: string;
  index: number;
  currentIndex: number;
  handleSelectedSlide: any;
};

export const Thumbnail: React.FC<ThumbnailProps> = ({
  imageUrl,
  index,
  currentIndex,
  handleSelectedSlide,
}) => {
  const selectImage = () => {
    handleSelectedSlide(index);
  };
  const { darkMode } = useDarkMode();

  return (
    <Image
      alt="thumbnail image"
      src={imageUrl}
      thumbnail={true}
      className="thumbnail"
      onClick={() => selectImage()}
      style={{
        borderWidth: currentIndex === index ? 2 : 0,
        borderColor:
          currentIndex === index && !darkMode
            ? lightTheme.palette.info.main
            : currentIndex === index && darkMode
            ? darkTheme.palette.info.light
            : "transparent",
      }}
    />
  );
};
