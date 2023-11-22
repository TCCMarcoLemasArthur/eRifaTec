import React from "react";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
    <Card
      sx={{
        borderRadius: '10px',
        width: '90%',
        boxShadow: '0 0 10px #000',
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'pink',
            borderRadius: '10px',
            height: `${sizes.img.height}`,
            width: `${sizes.img.width}`
          }}
        />

        <Typography component='h2' variant="h5"
          sx={{
            textAlign: 'center'
          }}
        >
          {titulo}
        </Typography>

        <Typography>
          Preço do bilhete: R${preco}
        </Typography>

        <Typography>
          Total de bilhetes: {quantbilhetes}
        </Typography>

        <Typography>
          Data do sorteio: {dataSorteio}
        </Typography>

        <Typography>
          Status: {status}
        </Typography>

      </CardContent>

      <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant='contained' size="small">Saiba mais</Button>
        <Button variant='contained' size="small">Compartilhar</Button>
      </CardActions>
    </Card>
  )
}