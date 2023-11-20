import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './formUsuarioStyles';

//* A propriedade cadastro é requerida para identificação
//* cadastro = true -> Formulário para cadastro
//* cadastro = false -> Formulário para atualizar dados
interface Props {
  cadastro: boolean;
}

export default function FormUsuario({ cadastro }: Props) {
  const navigate = useNavigate();
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
  const { id } = useParams()
  const [confirmacao, setConfirmacao] = useState(true)

  useEffect(() => {
    if (!cadastro) {
      console.log('UseEffectAtualizado')
      axios.get(`http://localhost:5000/selecionarusuario/${id}`)
        .then(response => {
          console.log(response.data)
          const {
            nomeusuario,
            cpfusuario,
            datanascusuario,
            celularusuario,
            emailusuario,
            cepusuario,
            estadousuario,
            cidadeusuario,
            bairrousuario,
            ruausuario,
            numerousuario } = response.data

          setUserData({
            ...userData,
            nome: nomeusuario,
            cpf: cpfusuario,
            dataNasc: datanascusuario.toString().split('T')[0],
            celular: celularusuario,
            email: emailusuario,
            cep: cepusuario,
            estado: estadousuario,
            cidade: cidadeusuario,
            bairro: bairrousuario,
            rua: ruausuario,
            numero: numerousuario
          })
        })
    }
  }, [])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });

    if (name === 'cep' && value.length === 8) {
      axios.get('http://localhost:5000/consultarcep', { params: { value } })
        .then(response => {
          // console.log(response.data)
          const { cep, uf, localidade, bairro, logradouro } = response.data

          setUserData({
            ...userData,
            cep: cep.replace(/-/g, ''),
            estado: uf,
            cidade: localidade,
            bairro: bairro,
            rua: logradouro
          })

        })
        .catch(erro => {
          console.log('Erro ao consultar cep:', erro.message)
        })
    } else if (name === 'cep' && value.length < 8) {
      console.log('cep esta com poucos valores: ' + value.length)
    }

  };

  const handleCadastrar = (event: React.FormEvent) => {
    // Impede a página de recarregar quando clicar no botão
    event.preventDefault();
    axios.post('http://localhost:5000/cadastrarusuario', userData)
      .then(response => {
        console.log(response.data)
        // navigate('/')
      })
      .catch(erro => {
        console.log('Erro ao cadastrar', erro.response.data)
      })
  }

  const handleAtualizar = (event: React.FormEvent) => {
    event.preventDefault();
    axios.put(`http://localhost:5000/atualizarusuario/${id}`, userData)
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
      spacing={2}
      sx={styles.formUsuario}
    >
      <Typography variant='h4' component='h2' sx={styles.titulo}>
        {cadastro ? 'Cadastro' : 'Meus dados'}
      </Typography>

      <Grid xs={12} sm={6}>
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
      <Grid xs={6}>
        <TextField
          type='number'
          id='cpf'
          name='cpf'
          label='CPF'
          variant='outlined'
          value={userData.cpf}
          inputProps={{ maxLength: 11 }}
          onChange={handleInputChange}
          required
          sx={[styles.campo, styles.campoNumero]}
        />
      </Grid>

      <Grid xs={6}>
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
      <Grid xs={4} sm={6}>
        <TextField
          type='number'
          id='celular'
          name='celular'
          label='Celular'
          variant='outlined'
          inputProps={{ maxLength: 11 }}
          value={userData.celular}
          onChange={handleInputChange}
          required
          sx={[styles.campo, styles.campoNumero]}
        />
      </Grid>

      <Grid xs={8} sm={12}>
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

      <Grid xs={12} sm={6}>
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
      <Grid xs={12} sm={6}>
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

      <Grid xs={6} sm={4}>
        <TextField
          type='number'
          id='cep'
          name='cep'
          label='CEP'
          variant='outlined'
          inputProps={{ maxLength: 8 }}
          value={userData.cep}
          onChange={handleInputChange}
          required
          sx={[styles.campo, styles.campoNumero]}
        />
      </Grid>
      <Grid xs={6} sm={4}>
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
      <Grid xs={6} sm={4}>
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

      <Grid xs={6} sm={4}>
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
      <Grid xs={9} sm={4}>
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
      <Grid xs={3} sm={4}>
        <TextField
          type='number'
          id='numero'
          name='numero'
          label='Número'
          variant='outlined'
          value={userData.numero}
          onChange={handleInputChange}
          required
          sx={[styles.campo, styles.campoNumero]}
        />
      </Grid>

      <Grid xs={12} sx={styles.center}>
        <Button type='submit' variant='contained' id={cadastro ? 'btnCadastrar' : 'btnAtualizar'}>
          Enviar
        </Button>
      </Grid>
      <Grid xs={12} sx={styles.center}>
        {cadastro ?
          <Typography component='p' sx={{ color: 'black', marginTop: 2 }}>
            Já possui uma conta?
            <Typography component='span' sx={{ a: { textDecoration: 'underline', color: 'primary.main' } }}>
              <Link to={'/login'}> Entre aqui</Link>
            </Typography>
          </Typography>
          : ''}
      </Grid>
    </Grid>
  );
}