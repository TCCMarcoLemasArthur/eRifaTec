import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './formLoginStyles';

export default function FormLogin() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    senha: ''
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  }

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    axios.post('http://localhost:5000/loginusuario', userData)
      .then(response => {
        console.log(response)
      })
      .catch(erro => {
        console.log('Erro ao entrar', erro)
      })

      // Pegar a mensagem de retorno do servidor e redirecionar o usuário para a home
      //* navigate('/') <- colocar dentro da condicional
  }

  return (
    <Grid 
      container 
      component="form" 
      onSubmit={handleLogin}
      sx={styles.formLogin}
    >
      <Typography variant='h2' component='h2' sx={styles.titulo}>
        Login
      </Typography>

      <Grid xs={12}>
        <TextField
          type='email'
          id='email'
          name='email'
          label='Email'
          variant='outlined'
          value={userData.email}
          onChange={handleInputChange}
          required
          sx={styles.campo}
        />
      </Grid>

      <Grid xs={12}>
        <TextField
          type='password'
          id='senha'
          name='senha'
          label='Senha'
          variant='outlined'
          value={userData.senha}
          onChange={handleInputChange}
          required
          sx={styles.campo}
        />
      </Grid>

      <Grid xs={12} sx={styles.center}>
        <Button type='submit' variant='contained' id='btnLogin'>
          Entrar
        </Button>
      </Grid>
      <Grid xs={12} sx={{textAlign: 'center', marginTop: 2}}>
        <Typography component='p' sx={{color: 'black'}}>
          Ainda não possui uma conta? 
          <Typography component='span' sx={{a: {textDecoration: 'underline', color: 'primary.main'}}}>
            <Link to={'/cadastrar'}> Cadastre-se</Link>
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
}