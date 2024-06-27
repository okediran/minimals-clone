import React from "react";
import { Box, Grid } from "@mui/material";
import Logincontent from "../components/users/content";
import Form from "../components/users/form";


const LoginPage: React.FC = () => {

  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container  min-height="100vh">
          <Grid item xs={5}>
            <Logincontent />
          </Grid>
          <Grid item xs={7}>
            <Form/>
          </Grid>
        </Grid>
      </Box>
  );
};

export default LoginPage;
