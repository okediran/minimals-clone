import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
      secondary: '#5f6368',
    },
  },
});

export default lightTheme;
