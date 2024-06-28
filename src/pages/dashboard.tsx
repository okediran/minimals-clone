import React from "react";
import {
  Box,
  Grid,
} from "@mui/material";
import MainBoard from "../components/dashboard/mainBoard";

const LoginPage: React.FC = () => {
  return (
    <Box >
      <Grid container min-height="100vh">
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={9}>
            <MainBoard/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
