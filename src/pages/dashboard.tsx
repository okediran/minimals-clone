import React from "react";
import { Box, Stack } from "@mui/material";
import MainBoard from "../components/dashboard/mainBoard";
import Sidebar from "../components/dashboard/sideBar";

const LoginPage: React.FC = () => {
  return (
    <Stack sx={{overflow:'hidden'}}>
      {/* sidebar */}
      <Box sx={{}}>
        <Sidebar />
      </Box>

      {/* mainboard */}
      <Box sx={{marginLeft:'18.5rem',width:'77%'}}>
        <MainBoard />
      </Box>
    </Stack>
  );
};

export default LoginPage;
