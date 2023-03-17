import React from "react";
import { Grid } from "@mui/material";

export const GridSection = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        Title 1
      </Grid>
      <Grid item xs={4}>
        Title 2
      </Grid>
      <Grid item xs={4}>
        Title 3
      </Grid>
    </Grid>
  );
};
