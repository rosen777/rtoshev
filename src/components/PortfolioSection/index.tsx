/* eslint-disable react/jsx-no-undef */
import React from "react";
import Image from "react-bootstrap/Image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./PortfolioSection.css";

const PortfolioSection = ({
  title,
  description,
  isLeft = false,
}: {
  title: string;
  description: string;
  isLeft?: boolean;
}) => {
  return (
    <div className="portfolio-container">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          maxHeight: "max(20%, 200)",
          marginTop: "20px",
        }}>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}>
          {isLeft && (
            <Box sx={{ display: "flex", flex: 1 }}>
              <Image
                alt="section image"
                className="sectionImage"
                src={"/assets/portfolio/necessary_clothing.png"}
                style={{
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>
          )}
          <Box className="portfolio-text">
            <h1>{title}</h1>
            <p>{description}</p>
          </Box>
          {!isLeft && (
            <Box sx={{ display: "flex", flex: 1 }}>
              <Image
                alt="section image"
                className="sectionImage"
                src={"/assets/portfolio/necessary_clothing.png"}
                style={{
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default PortfolioSection;
