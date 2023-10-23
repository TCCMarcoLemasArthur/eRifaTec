import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from '../estilos/formRifaStyles';
import axios from 'axios';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FormRifa() {
  const navigate = useNavigate()
  const [rifaData, setRifaData] = useState({
    titulo: '',
    dataSorteio: '',
    horaSorteio: '',
    desc: '',
    quantBilhete: 0,
    precoBilhete: 0.00,
    premio: '',
    imagens: [],
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: ''
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRifaData({ ...rifaData, [name]: value });
  };
  return (
    <>
      <Grid
        container
        xs={12}
        component="form" 
        sx={styles.formRifa}
      >
        <Typography variant='h2' component='h2' sx={styles.titulo}>
          Criar Rifa
        </Typography>

        <Grid container xs={12} md={6}>
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

          <TextField
            type='text'
            id='desc'
            name='desc'
            label='Descrição'
            variant='outlined'
            multiline
            rows={5}
            value={rifaData.desc}
            onChange={handleInputChange}
            required
            sx={styles.campo}
          />
        </Grid>

        <Grid container xs={12} md={6}>
          <TextField
            type='number'
            id='quantBilhete'
            name='quantBilhete'
            label='Quantidade de Bilhetes'
            variant='outlined'
            value={rifaData.quantBilhete}
            onChange={handleInputChange}
            required
            sx={[styles.campo, {marginBottom: 1.8}]}
          />
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
          <TextField
            type='file'
            id='imagens'
            name='imagens'
            label='Imagens'
            variant='outlined'
            value={rifaData.imagens}
            InputLabelProps={{ shrink: true }}
            onChange={handleInputChange}
            required
            sx={[styles.campo, {marginTop: {xs: 0, md: 2}}]}
          />
        </Grid>
      </Grid>
    </>
  )
}