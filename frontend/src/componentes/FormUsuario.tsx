import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../estilos/formUsuarioStyles';
import axios from 'axios';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

// TODO Preparar os campos para os dados que serão inseridos (máscara no campo dataDeNascimento, filtro e verificação)

//* A propriedade cadastro é requerida para identificação
//* cadastro = true -> Formulário para cadastro
//* cadastro = false -> Formulário para atualizar dados
interface Props {
    cadastro: boolean;
}

function FormUsuario({cadastro}: Props) {
  const [userData, setUserData] = useState({
    nome: '',
    cpf: '',
    dataNasc: '',
    celular: '',
    email: '',
    senha: '',
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: ''
  })
  const [confirmacao, setConfirmacao] = useState(true)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

   //! Verificar campos e procurar uma alternativa ao useState

  const handleCadastrar = (event: React.FormEvent) => {
    // Impede a página de recarregar quando clicar no botão
    event.preventDefault();
    axios.post('http://localhost:5000/cadastrarusuario', userData)
      .then(response => {
        console.log(response)
      })
      .catch(erro => {
        console.log('Erro ao cadastrar', erro)
      })
  }
  
  const handleAtualizar = (event: React.FormEvent) => {
    event.preventDefault();
    axios.put('http://localhost:5000/atualizarusuario', userData)
      .then(response => {
        console.log(response)
      })
      .catch(erro => {
        console.log('Erro ao atualizar dados', erro)
      })
  }

  const confirmarSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === userData.senha && (value !== '' && userData.senha !== '')) {
      setConfirmacao(true);
    } else {
      setConfirmacao(false);
    }
  }

  return (
    <Grid 
      container 
      component="form" 
      onSubmit={cadastro ? handleCadastrar : handleAtualizar} 
      xs={12} 
      sx={styles.formUsuario}
    >
      <Typography variant='h2' component='h2' sx={{
        color: 'primary.main',
        textAlign: 'center',
        width: '100%',
        fontSize: '2rem',
        fontWeight: 600,
        marginBottom: '15px'
      }}>
        {cadastro ? 'Cadastro' : 'Meus dados'}
      </Typography>

      <Grid xs={12} md={6}>
        <TextField
          type='text'
          id='nome'
          name='nome'
          label='Nome'
          variant='outlined'
          value={userData.nome}
          onChange={handleInputChange}
          required
          sx={styles.campo}
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextField
          type='text'
          id='cpf'
          name='cpf'
          label='CPF'
          variant='outlined'
          value={userData.cpf}
          inputProps={{maxlength: 11}}
          onChange={handleInputChange}
          required
          sx={styles.campo}
        />
      </Grid>

      <Grid xs={12} md={6}>
        <TextField
          type='date'
          id='dataNasc'
          name='dataNasc'
          label='Data de Nascimento'
          variant='outlined'
          InputLabelProps={{ shrink: true }}
          value={userData.dataNasc}
          onChange={handleInputChange}
          required
          sx={styles.campo}
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextField
          type='text'
          id='celular'
          name='celular'
          label='Celular'
          variant='outlined'
          inputProps={{maxlength: 11}}
          value={userData.celular}
          onChange={handleInputChange}
          required
          sx={styles.campo}
        />
      </Grid>

      <Grid xs={12}>
        <TextField
          type='text'
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

      <Grid xs={12} md={6}>
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
      <Grid xs={12} md={6}>
        <TextField
          type='password'
          id='confirmacaosenha'
          name='confirmacaosenha'
          label='Confirme sua senha'
          variant='outlined'
          onChange={confirmarSenha}
          error={!confirmacao}
          required
          sx={styles.campo}
        />
      </Grid>

      <Grid xs={12} md={4}>
        <TextField
          type='text'
          id='cep'
          name='cep'
          label='CEP'
          variant='outlined'
          inputProps={{maxlength: 8}}
          value={userData.cep}
          onChange={handleInputChange}
          required
          sx={styles.campo}
        />
      </Grid>
      <Grid xs={12} md={4}>
        <TextField
          type='text'
          id='estado'
          name='estado'
          label='Estado'
          variant='outlined'
          value={userData.estado}
          onChange={handleInputChange}
          required
          sx={styles.campo}
        />
      </Grid>
      <Grid xs={12} md={4}>
        <TextField
          type='text'
          id='cidade'
          name='cidade'
          label='Cidade'
          variant='outlined'
          value={userData.cidade}
          onChange={handleInputChange}
          required
          sx={styles.campo}
        />
      </Grid>

      <Grid xs={12} md={4}>
        <TextField
          type='text'
          id='bairro'
          name='bairro'
          label='Bairro'
          variant='outlined'
          value={userData.bairro}
          onChange={handleInputChange}
          required
          sx={styles.campo}
        />
      </Grid>
      <Grid xs={12} md={4}>
        <TextField
          type='text'
          id='rua'
          name='rua'
          label='Rua'
          variant='outlined'
          value={userData.rua}
          onChange={handleInputChange}
          required
          sx={styles.campo}
        />
      </Grid>
      <Grid xs={12} md={4}>
        <TextField
          type='text'
          id='numero'
          name='numero'
          label='Número'
          variant='outlined'
          value={userData.numero}
          onChange={handleInputChange}
          required
          sx={styles.campo}
        />
      </Grid>

      <Grid xs={12} sx={styles.center}>
        <Button type='submit' variant='contained' id={cadastro ? 'btnCadastrar' : 'btnAtualizar'}>
          Enviar
        </Button>
      </Grid>
      <Grid xs={12} sx={styles.center}>
        {cadastro ? 
          <Typography component='p' sx={{color: 'black', margin: 2}}>
            Já possui uma conta?
            <Typography component='span' sx={{a: {textDecoration: 'underline', color: 'primary.main'}}}>
              <Link to={'/login'}> Entre aqui</Link>
            </Typography>
          </Typography>
        : ''}
      </Grid>
    </Grid>
  );
}

export default FormUsuario;