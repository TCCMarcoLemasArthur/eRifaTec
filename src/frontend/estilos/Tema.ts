import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#6f00ff',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ed6c02',
    },
    background: {
      paper: '#dfdfdf',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 14,
  },
};

export const tema = createTheme(themeOptions)