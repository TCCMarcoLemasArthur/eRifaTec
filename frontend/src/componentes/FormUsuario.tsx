import React, { useState, useEffect } from 'react';
import '../estilos/formusuario.css';
import "../estilos/campotexto.css";
import { Link } from 'react-router-dom';
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
  const [response, setResponse] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

   //! Verificar campos e procurar uma alternativa ao useState

  const handleCadastrar = (event: React.FormEvent) => {
    // Impede a página de recarregar quando clicar no botão
    event.preventDefault();
    axios.post('http://localhost:5000/cadastrar', {
      nome: 'A',
      cpf: 'A',
      dataNasc: 'A',
      celular: 'A',
      email: 'A',
      senha: 'A',
      cep: 'A',
      estado: 'A',
      cidade: 'A',
      bairro: 'A',
      rua: 'A',
      numero: 'A'
    })
      .then(response => {
        console.log(response)
      })
      .catch(erro => {
        console.log('Erro ao fazer postagem', erro)
      })
  }
  
  const handleAtualizar = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO implementar método de atualização
  }

  const confirmarSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === userData.senha && (value !== '' && userData.senha !== '')) {
      //console.log('senha confirmada')
      setConfirmacao(true);
    } else {
      //console.log('senha não confirmada')
      setConfirmacao(false);
    }
  }

  const formStyles = {
    /*
    display: 'flex',
    flexDirection: 'column', */
    margin: '15px auto',
    width: '100%',
    maxWidth: '46rem',
    backgroundColor: 'white',
    padding: '15px 20px 0',
    borderRadius: '10px',
    boxShadow: '0 0 17px rgba(0, 0, 0, 0.3)'
  }

  const textFieldStyles = {
    input: {color: '#515151'},
    label: {color: '#7f858d'},
    fieldSet: {borderColor: '#7f858d'},
    width: '100%'
  }

  return (
    <Grid 
      container 
      component="form" 
      onSubmit={cadastro ? handleCadastrar : handleAtualizar} 
      xs={12} 
      sx={formStyles}
    >
      <Typography variant='h2' component='h2' sx={{
        color: 'primary.main',
        textAlign: 'center',
        width: '100%',
        fontSize: '2rem',
        fontWeight: 'bold',
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
          sx={textFieldStyles}
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
          onChange={handleInputChange}
          required
          sx={textFieldStyles}
        />
      </Grid>

      <Grid xs={12} md={6}>
        <TextField
          type='date'
          id='dataNasc'
          name='dataNasc'
          label='Data de Nascimento'
          variant='outlined'
          value={userData.dataNasc}
          onChange={handleInputChange}
          required
          sx={textFieldStyles}
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextField
          type='text'
          id='celular'
          name='celular'
          label='Celular'
          variant='outlined'
          value={userData.celular}
          onChange={handleInputChange}
          required
          sx={textFieldStyles}
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
          sx={textFieldStyles}
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
          sx={textFieldStyles}
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
          sx={textFieldStyles}
        />
      </Grid>

      <Grid xs={12} md={4}>
        <TextField
          type='text'
          id='cep'
          name='cep'
          label='CEP'
          variant='outlined'
          value={userData.cep}
          onChange={handleInputChange}
          required
          sx={textFieldStyles}
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
          sx={textFieldStyles}
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
          sx={textFieldStyles}
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
          sx={textFieldStyles}
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
          sx={textFieldStyles}
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
          sx={textFieldStyles}
        />
      </Grid>

      <Grid xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button type='submit' variant='contained' id={cadastro ? 'btnCadastrar' : 'btnAtualizar'}>
          Enviar
        </Button>
      </Grid>
      <Grid xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {cadastro ? 
          <Typography component='p' sx={{color: 'black'}}>
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