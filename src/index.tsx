// ! ARQUIVO NECESSÁRIO (NÃO MOVER) !
import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './Rotas';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { tema } from './frontend/estilos/Tema';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={tema}>
      <CssBaseline />
      <Rotas />
    </ThemeProvider>
  </React.StrictMode>
);
