import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { darkTheme, lightTheme } from "src/styles/Theme";
import { useDarkMode } from "src/ThemeHandler";
import PortfolioSection from "src/components/PortfolioSection";

const Portfolio = () => {
  const { darkMode } = useDarkMode();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        bgcolor: darkMode
          ? darkTheme.palette.primary.main
          : lightTheme.palette.primary.main,
      }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          maxHeight: "max(20%, 200)",
          marginTop: "20px",
        }}>
        <PortfolioSection
          title="Necessary Clothing"
          description={
            "Necessary Clothing is a trendy fashion retailer that has been in the women's clothing business for more than two decades. The company's primary target demographic are young women that dress in an urban fashion style. Since first launching their e-commerce site in 2011, online sales have been a growing part of the company's success. However, there was an issue. After five years, their website seemed dated for the modern standards and lacked SEO optimization. I headed a team that worked on completely redesigning the Necessary Clothing's website from scratch. By using Shopify and some of the latest innovations such as shoppable Instagram feed, real-time online chat, and online gift cards we managed to create a truly comprehensive digital hub for the brand. The result was an increased conversion rate and a decreased bounce rate. The site currently holds the undisputed number 1 spot on Google for the term \"trendy designer fashion\". Most importantly, customers found the new site more user-friendly and engaging. They absolutely loved it!"
          }
          isLeft={false}
        />
      </Container>
    </Box>
  );
};

export default Portfolio;
