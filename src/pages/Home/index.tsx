import React from 'react'
import { styled } from "@mui/material/styles";
import MaterialButton from "@mui/material/Button";
import {buttonVariants} from '../../components/types';
import { useNavigate } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>Home</div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <img alt="logo" src="logo512.png" width="512" height="512" />
          <Item>Item #1</Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item>Item #2</Item>
        </Grid>
      </Grid>
      <MaterialButton
        variant={buttonVariants.contained}
        onClick={() => navigate("/portfolio")}
      >
        My Portfolio
      </MaterialButton>
    </Box>
  );
}

export default Home