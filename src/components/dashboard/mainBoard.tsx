import React, { useState } from "react";
import { styled } from "@mui/system";
import {Typography,Box} from "@mui/material";
import DashboardNavbar from "./dashboard-navbar";

const PREFIX = "Demo";
const classes = {
  iconButton: `${PREFIX}-IconButton`,
  appbar: `${PREFIX}-appbar`,
  styledBadge: `${PREFIX}-styledBadge`,
  link: `${PREFIX}-link`,
  textField: `${PREFIX}-textField`,
  buttonEndicon: `${PREFIX}-buttonEndicon`,
  customButton: `${PREFIX}-customButton`,
};

const StyledMain = styled("div")(({ theme }) => ({
  [`& .${classes.iconButton}`]: {
    color: "#32383e",
  },
  [`& .${classes.appbar}`]: {
    background: "none",
    boxShadow: "none",
    borderBottom: "1px solid #e0e0e0",
    position: "static",
  },
  [`& .${classes.styledBadge}`]: {
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  },
}));


const MainBoard: React.FC = () => {
 

  return (
    <StyledMain >
      <DashboardNavbar/>
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h4">Main Content</Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
          velit, vulputate eu pharetra nec, mattis ac neque.
        </Typography>
      </Box>
    </StyledMain>
  );
};

export default MainBoard;
