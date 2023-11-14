import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from '../estilos/formRifaStyles';
import axios from 'axios';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel'

export default function FormRifa() {
  const navigate = useNavigate()
  const [rifaData, setRifaData] = useState({
    titulo: '',
    dataSorteio: '',
    horaSorteio: '',
    descricao: '',
    quantBilhete: 0,
    precoBilhete: 0.00,
    premio: '',
    imagem: [],
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: ''
  })

  const [possuiEndereco, setPossuiEndereco] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRifaData({ ...rifaData, [name]: value });

    if (name === 'cep' && value.length == 8) {
      axios.get('http://localhost:5000/consultarcep', { params: { value } })
        .then(response => {
          // console.log(response.data)
          const { cep, uf, localidade, bairro, logradouro } = response.data
          
          setRifaData({
            ...rifaData,
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

  const handleCheckboxChange = () => {
    if (!possuiEndereco) {
      setPossuiEndereco(true)
    } else {
      setPossuiEndereco(false)
    }
  }

  const criarRifa = (event: React.FormEvent) => {
    event.preventDefault();
    axios.post('http://localhost:5000/criarrifa', rifaData)
      .then(response => {
        console.log(response.data)
      })
      .catch(erro => {
        console.log('Erro ao criar rifa:', erro.response.data.msg)
      })
  }

  return (
    <>
      <Grid
        container
        component="form" 
        sx={styles.formRifa}
        onSubmit={criarRifa}
        spacing={2}
      >
        <Typography variant='h2' component='h2' sx={styles.titulo}>
          Nova Rifa
        </Typography>

        <Grid xs={12} sm={6}>
          <TextField
            type='text'
            id='titulo'
            name='titulo'
            label='Titulo da Rifa'
            variant='outlined'
            value={rifaData.titulo}
            onChange={handleInputChange}
            required
            sx={styles.campo}
          />
        </Grid>

        <Grid xs={12} sm={6}>
          <TextField
            type='text'
            id='premio'
            name='premio'
            label='Prêmio da Rifa'
            variant='outlined'
            value={rifaData.premio}
            onChange={handleInputChange}
            required
            sx={styles.campo}
          />
        </Grid>

        <Grid xs={6}>
          <TextField
            type='date'
            id='dataSorteio'
            name='dataSorteio'
            label='Data do Sorteio'
            variant='outlined'
            InputLabelProps={{ shrink: true }}
            value={rifaData.dataSorteio}
            onChange={handleInputChange}
            required
            sx={styles.campo}
          />
        </Grid>
      
        <Grid xs={6}>
          <TextField
            type='time'
            id='horaSorteio'
            name='horaSorteio'
            label='Hora do Sorteio'
            variant='outlined'
            InputLabelProps={{ shrink: true }}
            value={rifaData.horaSorteio}
            onChange={handleInputChange}
            required
            sx={styles.campo}
          />
        </Grid>

        <Grid xs={6}>
          <TextField
            type='number'
            id='quantBilhete'
            name='quantBilhete'
            label='Quantidade de Bilhetes'
            variant='outlined'
            value={rifaData.quantBilhete}
            onChange={handleInputChange}
            required
            sx={styles.campo}
          />
        </Grid>

        <Grid xs={6}>
          <TextField
            type='text'
            id='precoBilhete'
            name='precoBilhete'
            label='Preço de cada Bilhete'
            variant='outlined'
            value={rifaData.precoBilhete}
            onChange={handleInputChange}
            required
            sx={styles.campo}
          />
        </Grid>
        
        <Grid xs={12} sm={6}>
          <TextField
            type='text'
            id='descricao'
            name='descricao'
            label='Descrição'
            variant='outlined'
            multiline
            rows={5}
            value={rifaData.descricao}
            onChange={handleInputChange}
            required
            sx={styles.campo}
          />
        </Grid>

        <Grid xs={12} sm={6}>
          <InputLabel 
            htmlFor="imagem"
            sx={styles.campoImagem}
          >
            Clique para adicionar uma imagem
          </InputLabel>
          <input
            type='file'
            id='imagem'
            name='imagem'
            value={rifaData.imagem}
            onChange={handleInputChange}
            required
            style={{display: 'none'}}
          />
        </Grid>
        
        <Grid container sx={styles.enderecoBox}>
          <Grid xs={12}>
            <FormControlLabel 
              control={<Checkbox checked={possuiEndereco} onChange={handleCheckboxChange} />} 
              label="Adicionar endereço"
            />
          </Grid>
          { 
            possuiEndereco ?
            
            <>
              <Grid xs={6} sm={4}>
                <TextField
                  type='text'
                  id='cep'
                  name='cep'
                  label='CEP'
                  variant='outlined'
                  inputProps={{maxLength: 8}}
                  value={rifaData.cep}
                  onChange={handleInputChange}
                  required
                  sx={styles.campo}
                />
              </Grid>
              <Grid xs={6} sm={4}>
                <TextField
                  type='text'
                  id='estado'
                  name='estado'
                  label='Estado'
                  variant='outlined'
                  value={rifaData.estado}
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
                  value={rifaData.cidade}
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
                  value={rifaData.bairro}
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
                  value={rifaData.rua}
                  onChange={handleInputChange}
                  required
                  sx={styles.campo}
                />
              </Grid>
              <Grid xs={3} sm={4}>
                <TextField
                  type='text'
                  id='numero'
                  name='numero'
                  label='Número'
                  variant='outlined'
                  value={rifaData.numero}
                  onChange={handleInputChange}
                  required
                  sx={styles.campo}
                />
              </Grid>
            </>

            : ''
          }
        </Grid>
        <Grid xs={12} sx={styles.center}>
          <Button type='submit' variant='contained' id='btnEnviar'>
            Enviar
          </Button>
        </Grid>
      </Grid>
    </>
  )
}