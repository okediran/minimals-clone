import {
  Button,
  TextField,
  Divider,
  Box,
  Typography,
  styled,
  InputLabel,
} from "@mui/material";
import GoogleIcon from "../../assets/images/logo-google.svg";
import DiscordIcon from "../../assets/images/logo-discord.svg";
import logo from "../../assets/images/logo--dark.svg";
import supabaseLogo from "../../assets/images/logo-supabase.svg";
import { Link } from "react-router-dom";


const PREFIX = "Demo";
const classes = {
  logo: `${PREFIX}-logo`,
  img: `${PREFIX}-img`,
  form: `${PREFIX}-form`,
  link: `${PREFIX}-link`,
  textField: `${PREFIX}-textField`,
  buttonEndicon: `${PREFIX}-buttonEndicon`,
  customButton: `${PREFIX}-customButton`
};
const StyledDiv = styled("div")(({ theme }) => ({
  [`& .${classes.img}`]: {
    width: "15%",
  },
  [`& .${classes.customButton}`]: {
    borderColor: "#dde7ee",
    padding: "10px 20px",
    borderRadius: "8px",
    boxShadow: '0 0 0 1px #dcdfe4',
    fontSize:'12px',
    color: "black",
    "&:hover": {
      borderColor: "#dde7ee", // Darken border color on hover
      backgroundColor: "#32383e0a", // Darken background color on hover
    },
  },
  [`& .${classes.buttonEndicon}`]: {
    width: "20px",
    marginLeft:'10px' 
  },
  [`& .${classes.logo}`]: {
    width: "40%",
  },
  [`& .${classes.form}`]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  [`& .${classes.link}`]: {
    color: "#16b364",
  },
  [`& .${classes.textField}`]: {
    
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: "#dcdfe4",
        boxShadow: '0 0 0 1px #dcdfe4',
        borderRadius:'8px'
      },
      "&:hover fieldset": {
        borderColor: "#dcdfe4", 
      },
      position: 'relative',
      '&.Mui-focused fieldset': {
        inset: 0,
        borderColor: '#16b364',
      },
      '& input': {
        padding: '8px', // Adjust the padding to reduce the height
      },
      '& .Mui-focused': {
      '& .MuiInputLabel-root': {
        color: '#16b364', // Focus label color
      },
    },
    },
  },
}));

const Form = () => {
  return (
    <StyledDiv>
      <Box className={classes.form}>
        <Box mt={5} width='400px' >
          <img src={logo} alt="logo" className={classes.logo} />
          <Box sx={{ mb: "30px" }}>
            <Typography variant="h5" gutterBottom mt={5}>
              Sign in
            </Typography>
            <Typography>
              Don't have an account?{" "}
              <Link to="#" className={classes.link}>
                Sign up
              </Link>
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" width="100%" mb={2}>
            <Button
              variant="outlined"
              className={classes.customButton}
              sx={{ mb: 2 }}>
              Continue with Google
              <img className={classes.buttonEndicon} src={GoogleIcon} alt="logo" />
            </Button>
            <Button
              variant="outlined"
              className={classes.customButton}>
              Continue with Discord
              <img className={classes.buttonEndicon} src={DiscordIcon} alt="logo" />
            </Button>
          </Box>
          <Divider sx={{ my: "20px" }}>or</Divider>
          <Box component="form" width="100%">
            <InputLabel htmlFor="email" className={classes.textField}>Email address</InputLabel>
            <TextField
              fullWidth
              className={classes.textField}
              margin="normal"
              id="email"
              type="email"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
              
              <InputLabel htmlFor="password" className={classes.textField}>Password</InputLabel>
            <TextField
              fullWidth
              className={classes.textField}
              margin="normal"
              id="password"
              type="password"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2 }}
            >
              Login
            </Button>
            <Typography sx={{ lineHeight: "80px" }}>
              <Link to="#" className={classes.link}>
                Forgot password?
              </Link>
            </Typography>
            <img
              style={{ width: "40px" }}
              src={supabaseLogo}
              alt="Supabase logo"
            />
          </Box>
        </Box>
      </Box>
    </StyledDiv>
  );
};

export default Form;
