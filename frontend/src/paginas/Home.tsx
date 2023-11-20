import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Home() {
  const navigate = useNavigate()

  const cadastrarUsuario = () => {
    navigate('/cadastrar')
  }

  const listarUsuario = () => {
    navigate('/listar_usuarios')
  }
  const 
  loginUsuario = () => {
    navigate('/login')
  }

  const criarRifa = () => {
    navigate('/criar_rifa')
  }

  const noPage = () => {
    navigate('/404')
  }

  return (
    <>
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        p: '20px 0'
      }}>
        <Typography variant='h4' component='h2' sx={{
          p: 2,
          mb: 2,
          fontWeight: 500
        }}>
          Páginas existentes no momento
        </Typography>

        <Button onClick={cadastrarUsuario} variant='contained' sx={{marginBottom: 2}}>
          Cadastrar Usuário
        </Button>

        <Button onClick={loginUsuario} variant='contained' sx={{marginBottom: 2}}>
          Login
        </Button>

        <Button onClick={listarUsuario} variant='contained' sx={{marginBottom: 2}}>
          Listar Usuários
        </Button>

        <Button onClick={criarRifa} variant='contained' sx={{marginBottom: 2}}>
          Criar Rifa
        </Button>

        <Button onClick={noPage} variant='contained' color='error'>
          Página 404
        </Button>
      </Box>
    </>
  );
}
