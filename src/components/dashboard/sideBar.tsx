import {
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Avatar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import logo from "../../assets/images/white-logo.svg";
import { deepOrange } from "@mui/material/colors";
import { AngleSvg } from "../../assets/icons";
import { GoHome } from "react-icons/go";
import { FiBox } from "react-icons/fi";
import { BsPieChart } from "react-icons/bs";
import { IoDiamondOutline, IoSettingsOutline, IoShareSocialOutline  } from "react-icons/io5"
import { LuUsers2, LuCalendarCheck } from "react-icons/lu"
import { TiShoppingBag, TiDocumentText, TiCloudStorage  } from "react-icons/ti";
import { CiShoppingCart,CiTextAlignLeft, CiMail  } from "react-icons/ci";
import { PiNewspaperClipping, PiChatsCircleLight } from "react-icons/pi";
import { TbTruck } from "react-icons/tb";
import { HiOutlineAcademicCap } from "react-icons/hi";

// CSS prefix for styling
const PREFIX = "Demo";

// CSS classes for styling elements
const classes = {
  sidebar: `${PREFIX}-sidebar`,
  drawerPaper: `${PREFIX}-drawerPaper`,
  sidebarlistdev: `${PREFIX}-sidebarlistdev`,
};

// Styled component for the main container
const StyledMain = styled("div")(({ theme }) => ({
  [`& .${classes.sidebar}`]: {
    background: "#121621",
    height: "100vh",
    color: "#b3b9c6",
    overflowY: "scroll",
    position: "fixed",
    width: "25%",
    scrollbarWidth: "none",
  },
  [`& .${classes.sidebarlistdev}`]: {},
}));

const sidebarItems = [
  {
    title: "Dashboards",
    list: [
      { text: "Overview", icon: <GoHome/> },
      { text: "Analytics", icon: <BsPieChart/> },
      { text: "E-commerce", icon: <FiBox /> },
      { text: "Crypto", icon: <IoDiamondOutline/> },
    ],
  },
  {
    title: "General",
    list: [
      { text: "setting", icon: <IoSettingsOutline/> },
      { text: "customers", icon: <LuUsers2 />},
      { text: "Products", icon: <TiShoppingBag /> },
      { text: "Orders", icon: <CiShoppingCart /> },
      { text: "Invoice", icon: <PiNewspaperClipping /> },
      { text: "Jobs", icon: <TiDocumentText /> },
      { text: "Logistics", icon: <TbTruck /> },
      { text: "Blog", icon: <CiTextAlignLeft /> },
      { text: "Social", icon: <IoShareSocialOutline /> },
      { text: "Academy", icon: <HiOutlineAcademicCap /> },
      { text: "File storage", icon: <TiCloudStorage /> },
      { text: "Mail", icon: <CiMail /> },
      { text: "Chat", icon: <PiChatsCircleLight /> },
      { text: "Calender", icon: <LuCalendarCheck /> },
      { text: "Task", icon: "TwitterIcon" },
    ],
  },
  {
    title: "Other",
    list: [
      { text: "Auth", icon: "GitHubIcon" },
      { text: "Pricing", icon: "LinkedInIcon" },
      { text: "Checkout", icon: "RedditIcon" },
      { text: "Contact", icon: "RedditIcon" },
      { text: "Error", icon: "RedditIcon" },

    ],
  },
  {
    title: "Misc",
    list: [
      { text: "Level 0", icon: "GitHubIcon" },
      { text: "Diable", icon: "LinkedInIcon" },
      { text: "Blank", icon: "RedditIcon" },
      { text: "External link", icon: "RedditIcon" },
    ],
  },
];

const Sidebar = () => {
  return (
    <StyledMain>
      <Box className={classes.sidebar}>
        <Box px="25px" position="fixed" sx={{background:'#121621', zIndex:'1'}}>
          <Box>
            <img src={logo} alt="logo" />
          </Box>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: deepOrange[500] }} variant="rounded">
              JF
            </Avatar>
            <Box>
              <Typography variant="overline">Workspace</Typography>
              <Typography variant="h6">Devias</Typography>
            </Box>
            <AngleSvg />
          </Stack>
        </Box>

        <Box className={classes.sidebarlistdev} px="35px" pt="130px">
          <List>
            {sidebarItems.map((section, index) => (
              <Box key={index}>
                <ListItem>
                  <ListItemText primary={section.title} />
                </ListItem>
                {section.list.map((item, idx) => (
                  <ListItem key={idx} >
                    <ListItemIcon sx={{color:'white'}}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </Box>
            ))}
          </List>
        </Box>
      </Box>
    </StyledMain>
  );
};

export default Sidebar;
