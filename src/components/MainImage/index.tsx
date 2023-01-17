import React from "react";
import Image from "react-bootstrap/Image";
import "./MainImage.css";

type MainImageProps = {
  imageUrl: string;
};

export const MainImage: React.FC<MainImageProps> = ({ imageUrl }) => {
  return (
    <div>
      <Image alt="primary image" className="mainImage" src={imageUrl} />
    </div>
  );
};
