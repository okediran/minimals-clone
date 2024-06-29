import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  Toolbar,
  Typography,
  AppBar,
  IconButton,
  Box,
  Divider,
  Avatar,
  Badge,
  Tooltip,
  MenuItem,
  ListItemIcon,
  Button,
  Modal,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Stack
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { deepOrange } from "@mui/material/colors";
import UKflag from "../../assets/images/flag-uk.svg";
import DEflag from "../../assets/images/flag-de.svg";
import ESflag from "../../assets/images/flag-es.svg";
import CustomMenu from "./CustomMenu"
import { BadgeProps } from "@mui/material/Badge";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

// CSS prefix for styling
const PREFIX = "Demo";

// CSS classes for styling elements
const classes = {
  iconButton: `${PREFIX}-IconButton`,
  appbar: `${PREFIX}-appbar`,
  styledBadge: `${PREFIX}-styledBadge`,
  img: `${PREFIX}-img`,
};

// Styled component for the main container
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
  [`& .${classes.img}`]: {
    width: "20px",
  }
}));

// Styled component for modal content
const StyledModalContent = styled("div")(({ theme }) => ({
    backgroundColor: 'white',
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    width: 600,
    borderRadius: theme.shape.borderRadius,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '24',
    p: '4',
  }));
  
// Styled component for Badge with custom styling
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    top: 30,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "4px 4px",
    borderRadius: "100%",
    background: "#16b364",
  },
}));

interface State {
    anchorElProfile: HTMLElement | null;
    anchorElNotifications: HTMLElement | null;
    anchorElContacts: HTMLElement | null;
    anchorElCountry: HTMLElement | null;
  }

  const initialState: State = {
    anchorElProfile: null,
    anchorElNotifications: null,
    anchorElContacts: null,
    anchorElCountry: null,
  };
  
const DashboardNavbar: React.FC = () => {

    // State to manage menu visibility
    const [anchorEl, setAnchorEl] = useState<State>(initialState);

    // Function to open a specific menu
    const handleClick = (key: keyof State, event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl({ ...initialState, [key]: event.currentTarget });
    };

     // Function to close a specific menu
    const handleClose = (key: keyof State) => {
      setAnchorEl({ ...initialState, [key]: null });
    };
  
    const isOpen = (key: keyof State) => Boolean(anchorEl[key]);

  // Render the profile menu
  const renderProfileMenu = (
    <CustomMenu
      isOpen={isOpen('anchorElProfile')}
      anchorEl={anchorEl.anchorElProfile} 
      onClose={() => handleClose('anchorElProfile')}
      width="300px"
      actions={
        <>
          <Box sx={{ padding: "20px 20px 0px" }}>
            <Typography
              variant="h5"
              id="modal-modal-title"
              fontSize="15px"
              lineHeight="0.1px"
              paragraph
            >
              Okediran Daniel
            </Typography>
            <Typography
              color="#667085"
              variant="body1"
              fontSize="13px"
              id="modal-modal-description"
              paragraph
            >
              okediran96@gmail.com
            </Typography>
          </Box>
          <Divider />
          {["Account", "Security", "Billing"].map((text) => (
            <MenuItem key={text} onClick={() => handleClose('anchorElProfile')}>
              <ListItemIcon>
                {text === "Account" ? <PersonAddIcon fontSize="small" /> : <SettingsIcon fontSize="small" />}
              </ListItemIcon>
              {text}
            </MenuItem>
          ))}
          <Divider />
          <Button
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "#0000000a",
              },
            }}
            onClick={() => handleClose('anchorElProfile')}
            fullWidth
          >
            Sign Out
          </Button>
        </>
      }
    />
  );

  // Render the notifications menu
  const renderNotificationsModal = (
    <CustomMenu
      isOpen={isOpen('anchorElNotifications')}
      anchorEl={anchorEl.anchorElNotifications}
      onClose={() => handleClose('anchorElProfile')}
      width="380px"
      height="380px"
      actions={
        <>
          <Stack
            sx={{ padding: "16px 24px" }}
            direction="row"
            justifyContent="space-between"
          >
            <Typography variant="h6" gutterBottom>
              Notifications
            </Typography>
            <IconButton>
              <MailOutlineIcon />
            </IconButton>
          </Stack>

          <Box height="300px" overflow="scroll">
          {[1, 2, 3, 4].map((item) => (
              <Stack key={item} direction="row" spacing={2} sx={{ padding: "8px 16px", borderBottom: "1px solid #dcdfe4" }}>
                <Avatar sx={{ bgcolor: deepOrange[500], width: 34, height: 34 }}>N</Avatar>
                <Box>
                  <Typography paragraph>
                    <Typography variant="overline">Jie Yan</Typography>
                    added a new job{" "}
                    <Link to="/">Remote React / React Native Developer</Link> <br />
                    <Typography variant="caption">Jun 27, 06:55 AM</Typography>
                  </Typography>
                </Box>
                <IconButton>
                  <CloseIcon />
                </IconButton>
              </Stack>
            ))}
          </Box>
        </>
      }
    />
  );
// Render the contacts menu
  const renderContactsModal = (
    <CustomMenu
      isOpen={isOpen('anchorElContacts')}
      anchorEl={anchorEl.anchorElContacts}
      onClose={() => handleClose('anchorElContacts')}
      width="300px"
      height="380px"
      actions={
        <>
          <Box
            sx={{
              padding: "16px 24px",
            }}
          >
            Contacts
          </Box>
          <Box height="300px" overflow="scroll">
          {[...Array(10)].map((_, index) => (
              <MenuItem key={index}>
                <Stack direction="row" spacing={2}>
                  <ListItemIcon>
                    <Avatar sx={{ bgcolor: deepOrange[500], width: 34, height: 34 }}>N</Avatar>
                  </ListItemIcon>
                  <Typography>Miron Vitold</Typography>
                </Stack>
              </MenuItem>
            ))}
          </Box>
        </>
      }
    />
  );

   // Render the country selection menu
  const renderCountryModal = (
    <CustomMenu
      isOpen={isOpen('anchorElCountry')}
      anchorEl={anchorEl.anchorElCountry}
      onClose={() => handleClose('anchorElCountry')}
      actions={
        <Box px="10px">
          {["United Kingdom", "Germany", "Spain"].map((country, index) => (
            <MenuItem key={index} onClick={() =>  handleClose('anchorElCountry')}>
              <ListItemIcon>
                <img src={[UKflag, DEflag, ESflag][index]} style={{ width: "25px" }} alt="flag" />
              </ListItemIcon>
              {country}
            </MenuItem>
          ))}
        </Box>
      }
    />
  );

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const modalhandleClose = () => {
    setOpen(false);
  };

  return (
    <StyledMain>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            {/* Search button with modal */}
            <Tooltip title="search">
              <IconButton
                size="large"
                aria-label="search"
                className={classes.iconButton}
                onClick={handleOpen}
              >
                <SearchIcon />
              </IconButton>
            </Tooltip>
            {/* Search modal */}
            <Modal
              open={open}
              onClose={modalhandleClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
              <StyledModalContent>
              <Stack
            direction="row"
            justifyContent="space-between"
          >
            <Typography variant="h6">Search</Typography>
                
            <IconButton onClick={modalhandleClose}>
                <CloseIcon />
              </IconButton>
          </Stack>
          <Stack sx={{my:'30px', background:'#f9fafb', borderRadius:'5px'}}>
          <Typography variant="body2"  gutterBottom> 
          <LightbulbOutlinedIcon sx={{}}/> <span style={{color:'#667085'}}>Tip.</span> Search by entering a keyword and pressing Enter</Typography>
          </Stack>
            
                <FormControl fullWidth sx={{ m: 1 }}>
          <OutlinedInput
            id="outlined-adornment-search"
            sx={{ height:'40px'}}
            placeholder='Search'
            startAdornment={<InputAdornment position="start"><IconButton
                size="large"
                aria-label="search"
              >
                <SearchIcon />
              </IconButton></InputAdornment>}
            
          />
        </FormControl>
              </StyledModalContent>
              
            </Modal>
          </Box>
          <Stack direction="row" spacing={2}>
            <Tooltip title="Notifications">
              <IconButton
                size="large"
                aria-label="search"
                className={classes.iconButton}
                onClick={(event) => handleClick('anchorElNotifications', event)}
              >
                <Badge badgeContent="" color="secondary" variant="dot">
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Contacts">
              <IconButton
                size="large"
                aria-label="search"
                className={classes.iconButton}
                onClick={(event) => handleClick('anchorElContacts', event)}
              >
                <PeopleAltOutlinedIcon />
              </IconButton>
            </Tooltip>

            <Divider orientation="vertical" variant="middle" flexItem />
            <Tooltip title="Language / Country">
              <IconButton
                size="large"
                aria-label="search"
                className={classes.iconButton}
                onClick={(event) => handleClick('anchorElCountry', event)}
              >
                <img style={{ width: "25px" }} src={UKflag} alt="flag" />
              </IconButton>
            </Tooltip>

            <IconButton onClick={(event) => handleClick('anchorElProfile', event)} >
                {/* Badge for notifications */}
              <StyledBadge badgeContent="" variant="dot">
                <Avatar
                  sx={{ bgcolor: deepOrange[500], width: 34, height: 34 }}
                >
                  N
                </Avatar>
              </StyledBadge>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      {/* Redering menu */}
      {renderProfileMenu}
      {renderNotificationsModal}
      {renderContactsModal}
      {renderCountryModal}
    </StyledMain>
  );
};

export default DashboardNavbar;
