import React from "react";

import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography";

import sizeConfigs from "../../configs/sizeConfigs";

interface CardRifaProps {
  titulo: string;
  status: string;
  preco: number;
  quantbilhetes: number;
  dataSorteio: string;
  // imagem
}

const sizes = sizeConfigs.feed

export default function CardRifa({ titulo, status, dataSorteio, preco, quantbilhetes }: CardRifaProps) {
  return (
    <Grid
      container
      sx={{
        borderRadius: '10px',
        maxWidth: '20rem',
        boxShadow: '0 0 10px #000',
        marginX: {
          xs: '12px'
        }
      }}
    >
      <Grid xs={12}>
        <Box 
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'pink',
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px',
            height: `${sizes.img.height}`,
            width: `${sizes.img.width}`
          }}
        />
      </Grid>

      <Grid xs={12}>
        <Typography component='h2' variant="h5">{titulo}</Typography>
      </Grid>

      <Grid xs={6}>
        <Typography>{preco}</Typography>
      </Grid>

      <Grid xs={6}>
        <Typography>{status}</Typography>
      </Grid>
      <Grid xs={6}>
        <Typography>{quantbilhetes}</Typography>
      </Grid>
      <Grid xs={6}>
        <Typography>{dataSorteio}</Typography>
      </Grid>
    </Grid>
  )
}