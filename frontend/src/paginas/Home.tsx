import React from 'react'
import HeaderUI from "../componentes/HeaderUI";
import Footer from "../componentes/Footer";

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate()

  const listarUsuario = () => {
    navigate('/listar_usuarios')
  }

  return (
    <>
      <HeaderUI />
      <Container sx={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        width: '100%',
        p: '20px 0'
      }}>
        <Button onClick={listarUsuario} variant='contained'>
          Listar Usuários
        </Button>
      </Container>
      <Footer />
    </>
  );
}
