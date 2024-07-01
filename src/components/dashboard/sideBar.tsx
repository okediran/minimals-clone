import {
  Stack,
  List,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
  Avatar,
  Typography,
  Collapse,
  ListItemButton,
  Menu,
} from "@mui/material";
import { styled } from "@mui/system";
import logo from "../../assets/images/white-logo.svg";
import { GoHome } from "react-icons/go";
import { FiBox } from "react-icons/fi";
import { BsPieChart } from "react-icons/bs";
import {
  IoDiamondOutline,
  IoSettingsOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { LuUsers2, LuCalendarCheck } from "react-icons/lu";
import { TiShoppingBag, TiDocumentText, TiCloudStorage } from "react-icons/ti";
import { CiShoppingCart, CiTextAlignLeft, CiMail } from "react-icons/ci";
import { PiNewspaperClipping, PiChatsCircleLight } from "react-icons/pi";
import { TbTruck } from "react-icons/tb";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FaTasks } from "react-icons/fa";
import React, { useState } from "react";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SidebarSection } from "./types";
import SLUG from "../../utils/slug";
import { NavLink, useLocation } from "react-router-dom";
import { TfiAngleUp, TfiAngleDown } from "react-icons/tfi";

// CSS prefix for styling
const PREFIX = "Demo";

// CSS classes for styling elements
const classes = {
  sidebar: `${PREFIX}-sidebar`,
  icon: `${PREFIX}-icon`,
  active: `${PREFIX}-active`,
};

// Styled component for the main container
const StyledMain = styled("div")(({ theme }) => ({
  [`& .${classes.sidebar}`]: {
    background: "#121621",
    height: "100vh",
    color: "#b3b9c6",
    overflowY: "scroll",
    position: "fixed",
    width: "23%",
    scrollbarWidth: "none",
  },
  [`& .${classes.icon}`]: {
    color: "#8a94a6",
    width: "1em",
    height: "1em",
  },
  [`& .${classes.active}`]: {
    background: "#1f2736",
    borderLeft: "1px solid #f50057",
  },
}));

// Define sidebar items with sections and respective dropdowns
const sidebarItems: SidebarSection[] = [
  {
    title: "Dashboards",
    list: [
      { text: "Overview", icon: <GoHome />, path: SLUG.dashboard },
      { text: "Analytics", icon: <BsPieChart />, path: SLUG.analytics },
      { text: "E-commerce", icon: <FiBox />, path: SLUG.commerce },
      { text: "Crypto", icon: <IoDiamondOutline />, path: SLUG.crypto },
    ],
  },
  {
    title: "General",
    list: [
      { text: "setting", icon: <IoSettingsOutline />, path: SLUG.settings },
      {
        text: "customers",
        icon: <LuUsers2 />,
        dropdown: [
          { List: "List customers", path: SLUG.customers },
          { List: "Create customer", path: SLUG.customerscreate },
          { List: "Customer details", path: SLUG.settings },
        ],
      },
      {
        text: "Products",
        icon: <TiShoppingBag />,
        dropdown: [
          { List: "List products", path: SLUG.products },
          { List: "Create product", path: SLUG.productscreate },
          { List: "Product details", path: SLUG.settings },
        ],
      },
      {
        text: "Orders",
        icon: <CiShoppingCart />,
        dropdown: [
          { List: "List orders", path: SLUG.orders },
          { List: "Create order", path: SLUG.orderscreate },
          { List: "Order details", path: SLUG.settings },
        ],
      },
      {
        text: "Invoice",
        icon: <PiNewspaperClipping />,
        dropdown: [
          { List: "List invoices", path: SLUG.invoices },
          { List: "Create Invoice", path: SLUG.invoicescreate },
          { List: "Invoice details", path: SLUG.settings },
        ],
      },
      {
        text: "Jobs",
        icon: <TiDocumentText />,
        dropdown: [
          { List: "Browse jobs", path: SLUG.jobs },
          { List: "Create job", path: SLUG.jobscreate },
          { List: "Company details", path: SLUG.settings },
        ],
      },
      {
        text: "Logistics",
        icon: <TbTruck />,
        dropdown: [
          { List: "Metrics", path: SLUG.logistics },
          { List: "Fleet", path: SLUG.fleet },
        ],
      },
      {
        text: "Blog",
        icon: <CiTextAlignLeft />,
        dropdown: [
          { List: "List posts", path: SLUG.blog },
          { List: "Create post", path: SLUG.blogcreate },
          { List: "Post details", path: SLUG.settings },
        ],
      },
      {
        text: "Social",
        icon: <IoShareSocialOutline />,
        dropdown: [
          { List: "Profile", path: SLUG.socialprofile },
          { List: "Feed", path: SLUG.socialfeed },
        ],
      },
      {
        text: "Academy",
        icon: <HiOutlineAcademicCap />,
        dropdown: [
          { List: "Browser courses", path: SLUG.academy },
          { List: "Course details", path: SLUG.settings },
        ],
      },
      { text: "File storage", icon: <TiCloudStorage />, path: SLUG.file },
      { text: "Mail", icon: <CiMail />, path: SLUG.inbox },
      { text: "Chat", icon: <PiChatsCircleLight />, path: SLUG.chat },
      { text: "Calender", icon: <LuCalendarCheck />, path: SLUG.settings },
      { text: "Task", icon: <FaTasks />, path: SLUG.tasks },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation(); // Get current location using useLocation hook

  // Render sidebar items based on sidebarItems array
  const renderSidebarItems = (sections: SidebarSection[]) => {
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
      null
    );

    //  Toggle dropdown menu for list items with dropdown
    const handleToggle = (itemIndex: number) => {
      setOpenDropdownIndex(openDropdownIndex === itemIndex ? null : itemIndex);
    };

    // Determine if a link is active based on current pathname
    const isActive = (path: string) => {
      return location.pathname === path;
    };

    return (
      <List>
        {sections.map((section, index) => (
          <Box key={index}>
            <Typography sx={{ marginBottom: "20px" }}>
              {section.title}
            </Typography>
            {section.list.map((item, itemIndex) => (
              <>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  key={itemIndex}
                  onClick={() => item.dropdown && handleToggle(itemIndex)}
                  className={isActive(item.path) ? classes.active : ""}
                >
                  <ListItemIcon className={classes.icon}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                  {item.dropdown &&
                    (openDropdownIndex === itemIndex ? (
                      <ArrowForwardIosIcon />
                    ) : (
                      <ExpandMore />
                    ))}
                </ListItemButton>
                {item.dropdown && (
                  <Collapse
                    in={openDropdownIndex === itemIndex}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" sx={{ paddingLeft: "24px" }}>
                      <Box
                        sx={{
                          borderLeft: "1px solid #434a60",
                        }}
                      >
                        {item.dropdown.map((dropdownItem, dropdownIdx) => (
                          <ListItemButton
                            key={dropdownIdx}
                            component={NavLink}
                            to={item.path}
                            className={
                              isActive(dropdownItem.path) ? classes.active : ""
                            }
                          >
                            <ListItemText primary={dropdownItem.List} />
                          </ListItemButton>
                        ))}
                      </Box>
                    </List>
                  </Collapse>
                )}
              </>
            ))}
          </Box>
        ))}
      </List>
    );
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Handle click event to open profile menu
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle close event to close profile menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledMain>
      <Box className={classes.sidebar}>
        <Box
          px="25px"
          position="fixed"
          width="23%"
          sx={{ background: "#121621", zIndex: "10" }}
        >
          <Box sx={{ py: "20px" }}>
            {/* Display logo */}
            <img src={logo} alt="logo" width="120px" />
          </Box>
          {/* Display profile dropdown */}
          <span onClick={handleClick}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                border: "1px solid #434a60",
                borderRadius: "10px",
                padding: "5px",
                cursor: "pointer",
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: "#ff5722" }} variant="rounded">
                  JF
                </Avatar>
                <Box>
                  <Typography
                    variant="overline"
                    sx={{ lineHeight: "1.4", fontsize: "10px" }}
                    gutterBottom
                  >
                    Workspace
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: "1" }}
                    gutterBottom
                  >
                    Devias
                  </Typography>
                </Box>
              </Stack>
              {/* Display expand icon */}
              <Stack direction="column" sx={{ float: "right" }}>
                <TfiAngleUp />
                <TfiAngleDown />
              </Stack>
            </Stack>
          </span>
          {/* Render profile menu */}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Box sx={{ width: "250px" }}>
              <MenuItem onClick={handleClose}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    sx={{ bgcolor: "#ff5722", width: 34, height: 34 }}
                    variant="rounded"
                  >
                    JF
                  </Avatar>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: "1" }}
                      gutterBottom
                    >
                      Devias
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    sx={{ bgcolor: "#fb9c0c", width: 34, height: 34 }}
                    variant="rounded"
                  >
                    ill
                  </Avatar>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: "1" }}
                      gutterBottom
                    >
                      Carpatin
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Box>
          </Menu>
        </Box>

        <Box px="35px" pt="150px">
          {renderSidebarItems(sidebarItems)}
        </Box>
      </Box>
    </StyledMain>
  );
};

export default Sidebar;
