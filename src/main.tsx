import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import store, { RootState } from './store/store';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/reactQueryClient';
// import { server  } from './mocks/browser';

// // Initialize the MSW worker in development mode
// if (process.env.NODE_ENV === 'development') {
//   server.listen();
// }

const Main: React.FC = () => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const [theme, setTheme] = useState<Theme>(themeMode === 'light' ? lightTheme : darkTheme);

  useEffect(() => {
    setTheme(themeMode === 'light' ? lightTheme : darkTheme);
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
