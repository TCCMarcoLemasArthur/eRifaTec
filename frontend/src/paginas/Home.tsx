import React from 'react'
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import { useNavigate } from 'react-router-dom';

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

  const testeUsuarioEspecifico1 = () => {
    navigate('/user/1')
  }

  const testeUsuarioEspecifico2 = () => {
    navigate('/user/2')
  }

  const testeUsuarioEspecifico3 = () => {
    navigate('/user/3')
  }

  const testeUsuarioEspecifico4 = () => {
    navigate('/user/4')
  }

  const testeUsuarioEspecifico5 = () => {
    navigate('/user/5')
  }

  const noPage = () => {
    navigate('/awgawg')
  }

  return (
    <>
      <Header />
      <Container sx={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        width: '100%',
        p: '20px 0'
      }}>
        <Typography variant='h1' component='h1' sx={{
          fontSize: 34,
          p: 2,
          mb: 2,
          borderRadius: '10px',
          boxShadow: '0 0 17px #890DB7',
          borderWidth: '5px',
          borderStyle: 'double',
          borderColor: '#890DB7 #B407DB #DF00FF'
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

        <Button onClick={testeUsuarioEspecifico1} variant='contained' color='warning'  sx={{marginBottom: 2}}>
          Teste Usuário Específico 1
        </Button>

        <Button onClick={testeUsuarioEspecifico2} variant='contained' color='warning'  sx={{marginBottom: 2}}>
          Teste Usuário Específico 2
        </Button>

        <Button onClick={testeUsuarioEspecifico3} variant='contained' color='warning'  sx={{marginBottom: 2}}>
          Teste Usuário Específico 3
        </Button>

        <Button onClick={testeUsuarioEspecifico4} variant='contained' color='warning'  sx={{marginBottom: 2}}>
          Teste Usuário Específico 4
        </Button>

        <Button onClick={testeUsuarioEspecifico5} variant='contained' color='warning'  sx={{marginBottom: 2}}>
          Teste Usuário Específico 5
        </Button>

        <Button onClick={noPage} variant='contained' color='error'>
          Página 404
        </Button>
      </Container>
      <Footer />
    </>
  );
}
