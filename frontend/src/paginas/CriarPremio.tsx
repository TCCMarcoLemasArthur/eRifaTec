import * as React from 'react';

import Box from '@mui/material/Box';

import FormPremio from '../componentes/formpremio/FormPremio';

export default function CriarPremio() {
  return (
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <FormPremio />
    </Box>
  )
}