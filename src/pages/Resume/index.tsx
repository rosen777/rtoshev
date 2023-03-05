import { Box, Typography, Container, Toolbar } from "@mui/material";
import React from "react";

const Resume = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 0 }}>
        <Typography variant="body1" textAlign="center">
          Resume
        </Typography>
      </Box>
    </Container>
  );
};

export default Resume;
