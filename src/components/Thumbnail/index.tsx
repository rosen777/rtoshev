import React, { useState, useEffect, MouseEventHandler } from "react";
import Image from "react-bootstrap/Image";
import "./Thumbnail.css";

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

  return (
    <Image
      alt="thumbnail image"
      src={imageUrl}
      thumbnail={true}
      className="thumbnail"
      onClick={() => selectImage()}
      style={{
        borderWidth: currentIndex === index ? 1 : 0,
        borderColor: currentIndex === index ? "#2d3849" : "transparent",
      }}
    />
  );
};
