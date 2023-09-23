import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
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
      main: '#ff9800',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 14,
  },
};

export const tema = createTheme(themeOptions)