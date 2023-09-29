import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  // Alterando cores ja existentes para as desejadas
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

export const tema = createTheme(themeOptions, {
  // Adicionando nomes de cores personalizados
  palette: {
    mode: 'dark',
    background: {
      dark: '#212121',
      light: '#353535'
    }
  }
})