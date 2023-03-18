import React from "react";
import { styled } from "@mui/material/styles";
import MaterialButton from "@mui/material/Button";
import { buttonVariants } from "../../components/types";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import styles from "./style.module.css";
import { ImageSlider } from "../../components/ImageSlider";
import { ImageSection } from "../../components/ImageSection";
import { Accordion } from "../../components/Accordion";
import { portfolioData } from "../../utils/portfolioData";
import "./Home.css";
import { Card } from "../../components/Cards";
import { useDarkMode } from "../../ThemeHandler";
import { darkTheme, lightTheme } from "../../styles/Theme";
import { Tabs } from "../../components/Tabs";
import { GridSection } from "../../components/GridSection";
// import useTheme, { themes } from "../../ThemeContext";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

type gridDataType = {
  title: string;
  description: string;
}[];

const Home = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  // const { theme, setTheme } = useTheme();
  const slides = [
    { url: "/assets/slider_placeholder.jpg", title: "Beach" },
    { url: "/assets/slider_placeholder_2.png", title: "Beach" },
    { url: "/assets/slider_placeholder.jpg", title: "Beach" },
    { url: "/assets/slider_placeholder_2.png", title: "Beach" },
  ];

  const gridData: gridDataType = [
    {
      title: "Title #1",
      description: "Description #1",
    },
    {
      title: "Title #2",
      description: "Description #2",
    },
    {
      title: "Title #3",
      description: "Description #3",
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      style={{
        width: "100%",
        backgroundColor: darkMode
          ? darkTheme.palette.primary.main
          : lightTheme.palette.primary.main,
      }}>
      <div>
        <ImageSlider slides={slides} />
      </div>
      <div>
        <ImageSection />
      </div>
      <div className="accordion_container">
        <Accordion data={portfolioData} />
      </div>
      <div>
        <Tabs
          title="Portfolio Tabs"
          tabs={[
            { name: "Tab1", content: "Tab1" },
            { name: "Tab2", content: "Tab2" },
          ]}
        />
      </div>
      <div>
        <GridSection gridData={gridData} />
      </div>
      <div>
        <Card />
      </div>
    </Box>
  );
};

export default Home;
