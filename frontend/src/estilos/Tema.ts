import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  // Alterando cores ja existentes para as desejadas
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
      main: '#ff9800',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 14,
  },
};

export const tema = createTheme(themeOptions, {
  // Adicionando nomes de cores personalizados
  palette: {
    mode: 'light',
    background: {
      dark: '#272727',
      light: '#353535'
    }
  },
})