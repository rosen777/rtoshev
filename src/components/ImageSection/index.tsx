import React from "react";
import Box from "@mui/material/Box";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ImageSection.css";

export const ImageSection = () => {
  return (
    <div className="wrapper">
      <div>
        <Image
          alt="section image"
          className="sectionImage"
          src={"/assets/slider_placeholder.jpg"}
        />
      </div>
      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipis
      </div>
    </div>
  );
};
