import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import CardRifa from "./CardRifa";

interface Rifa {
  idrifa: number;
  titulorifa: string;
  statusrifa: string;
  quantbilheterifa: number;
  datasorteiorifa: string;
}

export default function Feed() {
  const [rifas, setRifas] = useState<Rifa[]>([])

  const listarRifas = () => {
    axios.get('http://localhost:5000/listarrifa')
      .then(response => {
        const rifas = response.data.map((rifa: Rifa) => ({
          ...rifa,
          datasorteiorifa: format(new Date(rifa.datasorteiorifa), 'dd/MM/yyyy'),
        }));
        console.log(rifas);
        setRifas(rifas);
      })
      .catch(erro => console.log(erro))
  }

  useEffect(() => {
    console.log('Feed atualizado')
    listarRifas()
  }, [])

  return (
    <Grid
      container
      spacing={4}
      sx={{
        mx: {
          md: 8
        },
      }}
    >
      <Grid xs={12}>
        <Typography
          component='h1'
          variant='h1'
          sx={{
            textAlign: 'center',
            color: 'primary.main',
            fontFamily: 'Cookie',
            mb: {
              md: 3
            }
          }}
        >
          eRifaTec
        </Typography>
      </Grid>

      {rifas.map(rifa => (
        <Grid
          key={rifa.idrifa}
          xs={12} sm={6} md={4} lg={3}
          sx={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            mb: 5
          }}
        >
          <CardRifa
            titulo={rifa.titulorifa}
            status={rifa.statusrifa}
            quantbilhetes={rifa.quantbilheterifa}
            preco={10}
            dataSorteio={rifa.datasorteiorifa}
          />
        </Grid>
      ))}
    </Grid>
  )
}