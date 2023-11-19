import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Box from '@mui/material/Box';

import Header from "./componentes/header/Header";
import Footer from "./componentes/footer/Footer";
import Rotas from './Rotas';
import sizeConfigs from './configs/sizeConfigs'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box sx={{
        minHeight: `${sizeConfigs.conteudo.minHeight}`
      }}>
        <Rotas />
      </Box>
      <Footer />
    </BrowserRouter>
  )
}