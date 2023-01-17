import React from "react";
import { styled } from "@mui/material/styles";
import MaterialButton from "@mui/material/Button";
import { buttonVariants } from "../../components/types";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import styles from "./style.module.css";
import { ImageSlider } from "../../components/ImageSlider";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const navigate = useNavigate();
  const slides = [
    { url: "/assets/slider_placeholder.jpg", title: "Beach" },
    { url: "/assets/slider_placeholder_2.png", title: "Beach" },
    { url: "/assets/slider_placeholder.jpg", title: "Beach" },
    { url: "/assets/slider_placeholder_2.png", title: "Beach" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
        <ImageSlider slides={slides} />
      </div>
      {/* <MaterialButton
        variant={buttonVariants.contained}
        onClick={() => navigate("/portfolio")}>
        My Portfolio
      </MaterialButton> */}
      <div>
        <Card />
      </div>
    </Box>
  );
};

export default Home;
