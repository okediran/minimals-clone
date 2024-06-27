// src/components/LoginPage.tsx

import React, { useState } from "react";
import { Typography, Box, Grid, styled, Paper } from "@mui/material";
import {
  AccentureSvg,
  Tmobilesvg,
  BoitSvg,
  SamsangSvg,
  AwsSvg,
  VismaSvg,
} from "../../assets/icons";

const Logincontent: React.FC = () => {

  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="#667085"
      p='24px'
      bgcolor='#f9fafb'
      boxShadow= 'inset 0 0 10px rgba(0, 0, 0, 0.1)'
    >
      <Box>
        <Typography variant="h4" color='#000' gutterBottom>
          Welcome to Devias Kit <br /> PRO
        </Typography>
        <Typography >
          A professional template that comes with ready-to-use <br />
          MUI components developed with one common goal in <br />
          mind, help you build faster & beautiful applications.
        </Typography>
        <Box sx={{ flexGrow: 1, mt:'40px' }}>
          <Grid container spacing={2}>
            <Grid item xs={2} md={4}>
              <AccentureSvg />
            </Grid>
            <Grid item xs={6} md={4}>
              <Tmobilesvg />
            </Grid>
            <Grid item xs={6} md={4}>
              <BoitSvg />
            </Grid>
            <Grid item xs={6} md={4}>
              <SamsangSvg />
            </Grid>
            <Grid item xs={6} md={4}>
              <AwsSvg />
            </Grid>
            <Grid item xs={6} md={4}>
              <VismaSvg />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Logincontent;
