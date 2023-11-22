import React, { useState, useEffect } from "react";
import axios from "axios";

import Grid from '@mui/material/Unstable_Grid2';

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
        setRifas(response.data)
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
      spacing={5}
    >
      <Grid xs={12}>
        <h1>Feed</h1>
      </Grid>
      {rifas.map(rifa => (
        <Grid xs={12} sm={6} md={4}>
          <CardRifa
            key={rifa.idrifa}
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